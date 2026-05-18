import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";

type Props = {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
};

export function ContactNotificationEmail({
  name,
  email,
  phone,
  subject,
  message,
}: Props) {
  return (
    <Html lang="fr">
      <Head />
      <Preview>{`Nouveau message de ${name} — ${subject}`}</Preview>
      <Body style={body}>
        <Container style={container}>
          <Heading style={h1}>Nouveau message — Terre Libre</Heading>
          <Text style={muted}>
            Vous avez reçu un message via le formulaire de contact.
          </Text>

          <Section style={section}>
            <Text style={label}>De</Text>
            <Text style={value}>{name}</Text>

            <Text style={label}>Email</Text>
            <Text style={value}>
              <a href={`mailto:${email}`} style={link}>
                {email}
              </a>
            </Text>

            {phone && (
              <>
                <Text style={label}>Téléphone</Text>
                <Text style={value}>{phone}</Text>
              </>
            )}

            <Text style={label}>Sujet</Text>
            <Text style={value}>{subject}</Text>
          </Section>

          <Hr style={hr} />

          <Section>
            <Text style={label}>Message</Text>
            <Text style={messageBody}>{message}</Text>
          </Section>

          <Hr style={hr} />

          <Text style={footer}>
            Email envoyé automatiquement depuis terre-libre.com
          </Text>
        </Container>
      </Body>
    </Html>
  );
}

export default ContactNotificationEmail;

const body: React.CSSProperties = {
  backgroundColor: "#faf6f1",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif",
  margin: 0,
  padding: 0,
};

const container: React.CSSProperties = {
  maxWidth: "600px",
  margin: "0 auto",
  padding: "40px 24px",
  backgroundColor: "#ffffff",
};

const h1: React.CSSProperties = {
  fontFamily: "Georgia, serif",
  fontSize: "26px",
  color: "#2c2520",
  margin: "0 0 8px",
  letterSpacing: "-0.02em",
};

const muted: React.CSSProperties = {
  fontSize: "14px",
  color: "#6a5d4e",
  margin: "0 0 24px",
};

const section: React.CSSProperties = {
  margin: "16px 0",
};

const label: React.CSSProperties = {
  fontSize: "12px",
  textTransform: "uppercase",
  letterSpacing: "0.08em",
  color: "#8c6e4d",
  margin: "16px 0 4px",
  fontWeight: 500,
};

const value: React.CSSProperties = {
  fontSize: "16px",
  color: "#2c2520",
  margin: "0",
};

const link: React.CSSProperties = {
  color: "#8c6e4d",
  textDecoration: "underline",
};

const messageBody: React.CSSProperties = {
  fontSize: "15px",
  lineHeight: "1.6",
  color: "#2c2520",
  whiteSpace: "pre-wrap",
  margin: "0",
};

const hr: React.CSSProperties = {
  borderColor: "#e8dcc4",
  margin: "24px 0",
};

const footer: React.CSSProperties = {
  fontSize: "12px",
  color: "#6a5d4e",
  textAlign: "center",
  margin: "0",
};
