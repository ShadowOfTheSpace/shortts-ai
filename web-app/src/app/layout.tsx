import { type Metadata } from "next";
import { baloo, roboto } from "~/_assets/fonts/fonts";
import "./globals.css";

type Properties = {
  children: React.ReactNode;
};

const RootLayout: React.FC<Properties> = ({ children }) => {
  return (
    <html
      lang="en"
      className="scroll-pt-[100px] sm:scroll-pt-[120px] scroll-smooth"
    >
      <link
        rel="preload"
        href="/_next/static/media/d86cb100f71d6b8d-s.p.woff2"
        as="font"
        crossOrigin="anonymous"
        type="font/woff2"
      />
      <link
        rel="preload"
        href="/_next/static/media/934c4b7cb736f2a3-s.p.woff2"
        as="font"
        crossOrigin="anonymous"
        type="font/woff2"
      />
      <link
        rel="preload"
        href="/_next/static/media/0e4fe491bf84089c-s.p.woff2"
        as="font"
        crossOrigin="anonymous"
        type="font/woff2"
      />
      <body
        className={`${baloo.variable} ${roboto.variable} font-roboto text-text flex flex-col min-h-[100dvh]`}
      >
        {children}
      </body>
    </html>
  );
};

export default RootLayout;

export const metadata: Metadata = {
  title: "Shortts.ai",
};
