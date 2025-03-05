import type { Metadata } from "next";
import { Inter } from "next/font/google"
import "@/assets/styles/globals.css"

import { APP_NAME, APP_DESCRIPTION, SERVER_URL} from "@/lib/constants"

const inter = Inter({
  subsets: [
    "latin"
  ]
});

export const metadata: Metadata = {
  // This allo the metadata to be dynamic and %s be the name based on the component metadata
  // name
  title: {
    template : `%s | ProStore`,
    default: APP_NAME,
  },
  description: `${APP_DESCRIPTION}`,
  metadataBase: new URL(SERVER_URL)
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
