/**
 * Health check pour monitoring uptime (BetterStack/UptimeRobot).
 * Pas de check DB (Terre Libre est un site sans base de données).
 */
export const runtime = "edge";

export async function GET() {
  return Response.json(
    {
      status: "ok",
      version: process.env.NEXT_PUBLIC_VERSION ?? "dev",
      timestamp: new Date().toISOString(),
    },
    { status: 200, headers: { "Cache-Control": "no-store" } },
  );
}
