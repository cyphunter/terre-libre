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
  subject: string;
};

export function ContactAcknowledgeEmail({ name, subject }: Props) {
  return (
    <Html lang="fr">
      <Head />
      <Preview>Votre message a bien été reçu — Terre Libre</Preview>
      <Body style={body}>
        <Container style={container}>
          <Heading style={h1}>Bonjour {name},</Heading>

          <Text style={paragraph}>
            Votre message concernant <strong>« {subject} »</strong> est bien arrivé. Je vous remercie de votre intérêt pour l'atelier Terre Libre.
          </Text>

          <Text style={paragraph}>
            Je vous réponds dans les meilleurs délais, généralement sous <strong>48 heures ouvrées</strong>. Si votre demande est urgente, n'hésitez pas à m'écrire directement sur Instagram à <strong>@terrelibre_ploemel</strong> ou à passer à l'atelier pendant les créneaux de cours.
          </Text>

          <Hr style={hr} />

          <Section>
            <Text style={signature}>
              À bientôt,
              <br />
              <strong>Marie-Laure Bretel</strong>
              <br />
              Céramiste — Atelier Terre Libre
              <br />
              Ploemel, Morbihan
            </Text>
          </Section>

          <Hr style={hr} />

          <Text style={footer}>
            Ce message est une confirmation automatique. Pour toute question, vous pouvez répondre directement à cet email.
          </Text>
        </Container>
      </Body>
    </Html>
  );
}

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
  fontSize: "24px",
  color: "#2c2520",
  margin: "0 0 16px",
  letterSpacing: "-0.02em",
};

const paragraph: React.CSSProperties = {
  fontSize: "15px",
  lineHeight: "1.7",
  color: "#2c2520",
  margin: "0 0 16px",
};

const signature: React.CSSProperties = {
  fontSize: "15px",
  lineHeight: "1.7",
  color: "#2c2520",
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
  margin: "16px 0 0",
};
