"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { sendContactMessage, type ContactState } from "@/app/contact/actions";
import { siteConfig } from "@/lib/site-config";

const initialState: ContactState = { status: "idle" };

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-full bg-ink px-9 py-4 text-sm font-medium text-paper transition-transform duration-500 disabled:opacity-60 disabled:cursor-not-allowed hover:-translate-y-0.5"
    >
      <span
        aria-hidden
        className="absolute inset-0 origin-left scale-x-0 bg-brand transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100"
      />
      {pending ? (
        <>
          <Loader2 size={16} className="relative animate-spin" aria-hidden />
          <span className="relative">Envoi en cours…</span>
        </>
      ) : (
        <>
          <span className="relative">Envoyer mon message</span>
          <span
            aria-hidden
            className="relative transition-transform duration-500 group-hover:translate-x-1"
          >
            →
          </span>
        </>
      )}
    </button>
  );
}

export function ContactForm() {
  const [state, formAction] = useActionState(sendContactMessage, initialState);
  const fieldErrors = state.status === "error" ? state.fieldErrors : undefined;

  if (state.status === "success") {
    return (
      <div
        role="status"
        aria-live="polite"
        className="rounded-3xl border border-success/30 bg-success/10 p-10 md:p-12"
      >
        <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-success/15">
          <CheckCircle2 size={28} className="text-success" aria-hidden />
        </span>
        <h2 className="mt-6 font-display text-3xl text-ink">
          Message envoyé, merci !
        </h2>
        <p className="mt-4 text-ink/85 leading-relaxed max-w-lg">
          Votre message a bien été transmis. Vous recevez un accusé de réception à
          l&apos;instant. Marie-Laure vous répond généralement sous 48 heures ouvrées.
        </p>
      </div>
    );
  }

  return (
    <form
      action={formAction}
      noValidate
      className="space-y-8 rounded-3xl border border-stone/40 bg-paper p-8 md:p-12 shadow-sm"
    >
      <div>
        <p className="eyebrow">Formulaire</p>
        <h2 className="mt-4 font-display text-2xl md:text-3xl text-ink">
          Une question, un projet ?
        </h2>
        <span aria-hidden className="hairline mt-6 text-stone" />
      </div>

      {state.status === "error" && state.message && (
        <div
          role="alert"
          className="flex items-start gap-3 rounded-2xl border border-error/30 bg-error/5 p-4 text-sm text-error"
        >
          <AlertCircle size={18} className="mt-0.5 shrink-0" aria-hidden />
          <p>{state.message}</p>
        </div>
      )}

      <div className="grid gap-6 sm:grid-cols-2">
        <Field
          id="name"
          label="Votre nom"
          required
          autoComplete="name"
          errors={fieldErrors?.name}
        />
        <Field
          id="email"
          label="Votre email"
          type="email"
          required
          autoComplete="email"
          errors={fieldErrors?.email}
        />
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <Field
          id="phone"
          label="Téléphone (facultatif)"
          type="tel"
          autoComplete="tel"
          errors={fieldErrors?.phone}
        />
        <Field
          id="subject"
          label="Sujet"
          required
          errors={fieldErrors?.subject}
          placeholder="Cours, stage, pièce, location…"
        />
      </div>

      <Field
        id="message"
        label="Votre message"
        as="textarea"
        rows={6}
        required
        minLength={20}
        errors={fieldErrors?.message}
        placeholder="Décrivez votre demande — disponibilités, niveau d'expérience, projet…"
      />

      {/* Honeypot — caché aux humains, visible aux bots */}
      <div
        aria-hidden
        style={{ position: "absolute", left: "-9999px", width: "1px", height: "1px" }}
      >
        <label htmlFor="website">Ne pas remplir</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="flex items-start gap-3 rounded-2xl bg-shell/50 p-4 border border-stone/30">
        <input
          id="consent"
          name="consent"
          type="checkbox"
          required
          className="mt-1 h-4 w-4 shrink-0 rounded border-stone text-brand focus:ring-2 focus:ring-brand/30"
        />
        <label htmlFor="consent" className="text-sm text-ink/85 leading-relaxed">
          J&apos;accepte que mes données soient utilisées par {siteConfig.name} pour
          répondre à ma demande, conformément à la{" "}
          <a
            href="/confidentialite"
            className="underline decoration-brand/40 underline-offset-2 text-brand hover:text-brand-deep hover:decoration-brand transition-colors"
          >
            politique de confidentialité
          </a>
          .
        </label>
      </div>
      {fieldErrors?.consent && (
        <p className="text-sm text-error" role="alert">
          {fieldErrors.consent[0]}
        </p>
      )}

      <div className="pt-2">
        <SubmitButton />
      </div>
    </form>
  );
}

type FieldProps = {
  id: string;
  label: string;
  type?: string;
  as?: "input" | "textarea";
  rows?: number;
  required?: boolean;
  minLength?: number;
  autoComplete?: string;
  placeholder?: string;
  errors?: string[];
};

function Field({
  id,
  label,
  type = "text",
  as = "input",
  rows,
  required,
  minLength,
  autoComplete,
  placeholder,
  errors,
}: FieldProps) {
  const errorId = `${id}-error`;
  const hasError = errors && errors.length > 0;

  const commonProps = {
    id,
    name: id,
    required,
    minLength,
    autoComplete,
    placeholder,
    "aria-invalid": hasError ? ("true" as const) : undefined,
    "aria-describedby": hasError ? errorId : undefined,
    className: "field-input",
  };

  return (
    <div>
      <label
        htmlFor={id}
        className="block text-xs uppercase tracking-[0.18em] font-medium text-ink/80 mb-2.5"
      >
        {label}
        {required && (
          <span aria-hidden className="ml-1 text-brand">
            *
          </span>
        )}
      </label>
      {as === "textarea" ? (
        <textarea {...commonProps} rows={rows ?? 5} />
      ) : (
        <input {...commonProps} type={type} />
      )}
      {hasError && (
        <p id={errorId} role="alert" className="mt-2 text-sm text-error">
          {errors[0]}
        </p>
      )}
    </div>
  );
}
