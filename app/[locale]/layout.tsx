import type { Metadata } from "next";
import Script from "next/script";
import { Google_Sans } from "next/font/google";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { GoogleAnalytics } from "@next/third-parties/google";
import { routing } from "@/i18n/routing";
import "../globals.css";

// Analytics IDs are public by design (they ship to the browser), so they are
// hardcoded here rather than configured via environment variables.
const GA_ID = "G-DFJRS0N4YM";
const CLARITY_ID = "yac0qece9c";

const googleSans = Google_Sans({
  variable: "--font-google-sans",
  subsets: ["latin"],
  axes: ["GRAD"],
  display: "swap",
  // Google Sans has no metric data for an auto-generated fallback, which
  // triggers a build warning. Provide an explicit system fallback and disable
  // the automatic adjustment.
  adjustFontFallback: false,
  fallback: [
    "ui-sans-serif",
    "system-ui",
    "-apple-system",
    "Segoe UI",
    "Roboto",
    "Helvetica Neue",
    "Arial",
    "sans-serif",
  ],
});

const siteUrl = (process.env.SITE_URL ?? "https://lematter.in").replace(
  /\/$/,
  "",
);

const title = "Lematter — Open source AI for life science research";
const description =
  "Lematter is an open source, self-hostable AI platform for life science research. It delivers grounded, citation-backed answers for biotech, pharma, and healthcare research — with semantic search, a biology knowledge graph, data sovereignty, and compliance controls.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s — Lematter",
  },
  description,
  applicationName: "Lematter",
  keywords: [
    "open source life science AI",
    "life science AI platform",
    "AI for biotech research",
    "grounded AI for research",
    "citation-backed AI research tool",
    "semantic search for scientific literature",
    "knowledge graph for biology research",
    "AI literature synthesis tool",
    "self-hosted AI for research labs",
    "data sovereign AI platform",
    "compliant AI for healthcare research",
    "open source AI no vendor lock-in",
    "AI tools for bioinformatics teams",
    "AI for pharma R&D",
    "AI for public health research",
    "government life science AI platform",
    "trustworthy AI for biotech research",
    "HIPAA compliant AI research tool",
    "AI with citations for scientific research",
    "best AI for scientific literature review",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName: "Lematter",
    title,
    description,
    url: siteUrl,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/icons/app/favicon.png",
  },
};

// Structured data (JSON-LD) so answer engines and search crawlers can
// understand what Lematter is. Improves AEO/SEO with machine-readable facts.
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Lematter",
  applicationCategory: "Open source AI platform for life science research",
  operatingSystem: "Web, Self-hosted",
  url: siteUrl,
  description,
  isAccessibleForFree: true,
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  featureList: [
    "Grounded, citation-backed answers",
    "Semantic search for scientific literature",
    "Knowledge graph for biology research",
    "Data sovereignty and self-hosting",
    "Compliance controls for regulated research",
    "Lab and workflow integration",
  ],
  audience: {
    "@type": "Audience",
    audienceType:
      "Researchers, labs, biotech teams, pharma R&D, healthcare and public health researchers, and institutions",
  },
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params,
}: LayoutProps<"/[locale]">) {
  const { locale } = await params;

  // Validate that the incoming `locale` param is supported.
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  // Enable static rendering for this request.
  setRequestLocale(locale);

  return (
    <html
      lang={locale}
      className={`${googleSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
        <GoogleAnalytics gaId={GA_ID} />
        <Script id="ms-clarity" strategy="afterInteractive">
          {`(function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "${CLARITY_ID}");`}
        </Script>
      </body>
    </html>
  );
}
