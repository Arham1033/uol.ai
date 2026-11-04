import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { site } from "@/data/site";

export const metadata = {
  title: {
    default: site.name,
    template: `%s · ${site.shortName}`,
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.maintainerName }],
  // The favicon, apple-icon and share image come from the files in this folder
  // (icon.svg, favicon.ico, apple-icon.png, opengraph-image.png).
  openGraph: {
    title: site.name,
    description: site.description,
    siteName: site.name,
    type: "website",
  },
};

export const viewport = {
  themeColor: "#0a1120",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col bg-paper text-slate-800 antialiased">
        {/* Without JavaScript the scroll animations would stay hidden, so show everything. */}
        <noscript>
          <style>{`.reveal{opacity:1!important;transform:none!important}.bar-fill,.col-fill{transform:none!important}.donut-seg{stroke-dasharray:var(--len) var(--circ)!important}`}</style>
        </noscript>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-navy-900 focus:shadow-lg"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
