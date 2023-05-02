import SEO from "@/components/SEO/SEO";
import { Metadata } from "next";

import "../styles/globals.css";
import Bottombar from "@/components/Bottombar/Bottombar";

type Props = {
  children: React.ReactNode;
};

export const metadata: Metadata = {
  title: "Mood | Habitaciones",
};

const RootLayout = ({ children }: Props) => {
  return (
    <html lang="es">
      <SEO />
      <body>
        <main>
          <div>{children}</div>
          <Bottombar />
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
