import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "VentureLink Web",
  description: "VentureLink - Startup-VC Matchmaking",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
