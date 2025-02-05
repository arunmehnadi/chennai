import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Footer from "@/component/Footer";
import Header from "@/component/Header";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// Metadata Configuration
export const metadata: Metadata = {
  title: "Top Mehandi Artist in Chennai | Professional Mehandi Designs",
  description:
    "Looking for the best Mehandi artist in Chennai? Book professional bridal, Arabic, and traditional Mehandi designs with our expert artists. Affordable rates and exceptional quality guaranteed.",
  openGraph: {
    title: "Top Mehandi Artist in Chennai | Professional Mehandi Designs",
    description:
      "Looking for the best Mehandi artist in Chennai? Book professional bridal, Arabic, and traditional Mehandi designs with our expert artists. Affordable rates and exceptional quality guaranteed.",
    url: "https://chennai-mehandiartist.com", // Update with your actual website URL
    siteName: "Chennai Mehandi Artist",
    images: [
      {
        url: "https://chennai-mehandiartist.com/assets/bridal-mehandi.jpg", // Replace with your image URL
        width: 1200,
        height: 630,
        alt: "Chennai Mehandi Artist - Bridal & Arabic Mehandi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Top Mehandi Artist in Chennai | Professional Mehandi Designs",
    description:
      "Book the top Mehandi artist in Chennai for beautiful bridal, Arabic, and traditional Mehandi designs. Get premium-quality service at affordable prices.",
  },
  robots: {
    index: true,
    follow: true,
  },
  keywords:
    "Best Mehandi artist Chennai, professional Mehandi designs, bridal Mehandi Chennai, Arabic Mehandi Chennai, traditional Mehandi Chennai, affordable Mehandi Chennai, wedding Mehandi, baby shower Mehandi, Mehandi art Chennai",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <link rel="icon" type="image/png" sizes="16x16" href="/assets/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/assets/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="48x48" href="/assets/favicon-48x48.png" />

        <link rel="apple-touch-icon" sizes="57x57" href="/assets/apple-touch-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/assets/apple-touch-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/assets/apple-touch-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/assets/apple-touch-icon-180x180.png" />
        <link rel="mask-icon" href="/assets/safari-pinned-tab.svg" color="#5bbad5" />

        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="msapplication-TileImage" content="/assets/mstile-144x144.png" />

        <link rel="manifest" href="/assets/site.webmanifest" />
        <meta name="theme-color" content="#ffffff" />

        <meta name="robots" content="index, follow" />
        <meta name="keywords" content="Best Mehandi artist Chennai, bridal Mehandi Chennai, Arabic Mehandi Chennai, traditional Mehandi Chennai" />
        <meta name="author" content="Chennai Mehandi Artist" />
        <meta name="language" content="English" />
        <meta property="og:title" content="Top Mehandi Artist in Chennai | Professional Mehandi Designs" />
        <meta
          property="og:description"
          content="Looking for the best Mehandi artist in Chennai? Book professional bridal, Arabic, and traditional Mehandi designs with our expert artists. Affordable rates and exceptional quality guaranteed."
        />
        <meta property="og:image" content="https://chennai-mehandiartist.com/assets/og-image.png" />
        <meta property="og:url" content="https://chennai-mehandiartist.com" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Chennai Mehandi Artist" />
        <meta property="og:locale" content="en_US" />
        {/* Global Schema Markup */}
        <script type="application/ld+json">
          {`
            {
              "@context": "http://schema.org",
              "@type": "LocalBusiness",
              "name": "Chennai Mehandi Artist",
              "url": "https://chennai-mehandiartist.com",
              "logo": "https://chennai-mehandiartist.com/assets/logo.jpg",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91-7736789140",
                "contactType": "Customer Service",
                "areaServed": "Chennai, IN",
                "availableLanguage": "English"
              },
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Chennai",
                "addressRegion": "Tamil Nadu",
                "addressCountry": "IN"
              },
              "description": "Chennai Mehandi Artist offers professional Mehandi services for bridal, Arabic, and traditional designs in Chennai.",
              "priceRange": "$$"
            }
          `}
        </script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />

        <div>
          {children}
        </div>

        <Footer />
      </body>
    </html>
  );
}
