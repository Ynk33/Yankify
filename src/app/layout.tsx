import "@/styles/reset.scss";
import "@/styles/globals.scss";

import { FontProvider, ClientFontInitializer, WordpressAPI } from "ydl-react-components";
import { primaryFont, secondaryFont } from "@/app/styles/fonts";

export async function generateMetadata() {
  const metadata = await WordpressAPI.getInstance().fetchMetadata();

  return {
    title: metadata.title,
    description: metadata.description,
    robots: {
      follow: true,
      index: true,
    },
    openGraph: {
      title: metadata.title,
      description: metadata.description,
      url: process.env.NEXT_PUBLIC_ROOT_URL as string,
      siteName: metadata.title,
      locale: "en_US",
      type: "website",
      images: [
        {
          url: metadata.image.full_image_url,
          height: metadata.image.media_details.sizes.medium_large.height,
          width: metadata.image.media_details.sizes.medium_large.width,
          alt: metadata.image.title,
        },
      ],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Initialize fonts for Server-side components
  FontProvider.initialize(primaryFont, secondaryFont);

  return (
    <html lang="en" className={FontProvider.PrimaryFont.className}>
      {/* Initialize fonts for Client-side components */}
      <ClientFontInitializer
        primaryFont={primaryFont}
        secondaryFont={secondaryFont}
      />

      {/* Body */}
      <body>{children}</body>
    </html>
  );
}
