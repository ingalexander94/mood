import { Metadata } from "next";

type Props = {
  children: React.ReactNode;
};

export const metadata: Metadata = {
  title: "Mood | Favoritos",
};

const FavoritesLayout = ({ children }: Props) => {
  return <>{children}</>;
};

export default FavoritesLayout;
