import { type Metadata } from "next";
import "./globals.css";

type Properties = {
  children: React.ReactNode;
};

const RootLayout: React.FC<Properties> = ({ children }) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;

export const metadata: Metadata = {
  title: "Shortts.ai",
};
