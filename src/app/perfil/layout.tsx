import { Metadata } from "next";

type Props = {
  children: React.ReactNode;
};

export const metadata: Metadata = {
  title: "Mood | Perfil",
};

const ProfileLayout = ({ children }: Props) => {
  return <>{children}</>;
};

export default ProfileLayout;
