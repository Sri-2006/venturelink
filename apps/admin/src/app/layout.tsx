import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "VentureLink Admin",
  description: "VentureLink Admin Portal",
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
