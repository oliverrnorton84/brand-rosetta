import type { Metadata } from "next";
import "./globals.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import JsonLd from "./components/JsonLd";
import { organisationJsonLd } from "../lib/jsonld";

export const metadata: Metadata = {
  title: {
    default: "Brand Rosetta",
    template: "%s | Brand Rosetta",
  },
  description:
    "An open vocabulary extension to schema.org JSON-LD for brand AI readiness.",
  metadataBase: new URL("https://brandrosetta.org"),
  openGraph: {
    siteName: "Brand Rosetta",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <JsonLd data={organisationJsonLd} />
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
