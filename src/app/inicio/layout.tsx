import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mood | Habitaciones",
};

type Props = {
  children: React.ReactNode;
};

const RootLayout = async ({ children }: Props) => {
  return (
    <main>
      <div>{children}</div>
    </main>
  );
};

export default RootLayout;
