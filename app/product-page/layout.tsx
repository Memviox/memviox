import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  metadataBase: new URL("https://memviox.com"),
  title: "Memviox — Launching Soon",
  description:
    "Memviox is an upcoming developer-focused multi-model AI workspace designed for configurable AI behavior, model routing, tools, and persistent context.",
  keywords: [
    "Memviox",
    "multi-model AI",
    "AI workspace",
    "developer AI platform",
    "AI routing",
    "AI behavior configuration",
    "persistent AI memory",
    "knowledge graphs",
    "CloudBrain.AI",
    "Syntherra Technologies",
  ],
  applicationName: "Memviox",
  authors: [{ name: "Mustafa" }],
  creator: "Mustafa",
  publisher: "CloudBrain.AI",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Memviox — Launching Soon",
    description:
      "Memviox is an upcoming developer-focused multi-model AI workspace designed for configurable AI behavior, model routing, tools, and persistent context.",
    url: "https://memviox.com",
    siteName: "Memviox",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Memviox — Launching Soon",
    description:
      "Memviox is an upcoming developer-focused multi-model AI workspace designed for configurable AI behavior, model routing, tools, and persistent context.",
    creator: "@memviox",
  },
  icons: {
    icon: '/icon.png',
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
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: "CloudBrain.AI",
      parentOrganization: {
        "@type": "Organization",
        name: "Syntherra Technologies",
      },
    },
    {
      "@type": "Person",
      name: "Mustafa",
      jobTitle: "Founder",
    },
    {
      "@type": "SoftwareApplication",
      name: "Memviox",
      applicationCategory: "DeveloperApplication",
      operatingSystem: "Web",
      description:
        "Memviox is an upcoming developer-focused multi-model AI workspace designed for configurable AI behavior, model routing, tools, and persistent context.",
      url: "https://memviox.com",
      creator: {
        "@type": "Person",
        name: "Mustafa",
      },
      producer: {
        "@type": "Organization",
        name: "CloudBrain.AI",
        parentOrganization: {
          "@type": "Organization",
          name: "Syntherra Technologies",
        },
      },
      keywords: [
        "multi-model AI",
        "AI workspace",
        "developer AI platform",
        "AI routing",
        "AI configuration",
        "persistent AI memory",
        "knowledge graphs",
      ],
    },
    {
      "@type": "WebSite",
      name: "Memviox",
      url: "https://memviox.com",
      description:
        "Official website for Memviox, an upcoming multi-model AI workspace for developers.",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
          rel="stylesheet"
        />
      </head>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
        {children}
      </body>
    </html>
  );
}