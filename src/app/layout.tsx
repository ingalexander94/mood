"use client";

import SEO from "@/components/SEO/SEO";

import "../styles/globals.css";
import Bottombar from "@/components/Bottombar/Bottombar";
import { FilterProvider, GlobalProvider } from "@/context";

type Props = {
  children: React.ReactNode;
};

const RootLayout = ({ children }: Props) => {
  return (
    <html lang="es">
      <SEO />
      <body>
        <GlobalProvider>
          <FilterProvider>
            <main>
              <div>{children}</div>
              <Bottombar />
            </main>
          </FilterProvider>
        </GlobalProvider>
      </body>
    </html>
  );
};

export default RootLayout;
