import { type Metadata } from "next";
import { roboto } from "~/_assets/fonts/fonts";
import "./globals.css";

type Properties = {
  children: React.ReactNode;
};

const RootLayout: React.FC<Properties> = ({ children }) => {
  return (
    <html lang="en">
      <body className={`${roboto.variable} font-roboto text-text`}>{children}</body>
    </html>
  );
};

export default RootLayout;

export const metadata: Metadata = {
  title: "Shortts.ai",
};
