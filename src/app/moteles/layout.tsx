import { Metadata } from "next";

type Props = {
  children: React.ReactNode;
};

export const metadata: Metadata = {
  title: "Mood | Moteles",
};

const MotelsLayout = ({ children }: Props) => {
  return <>{children}</>;
};

export default MotelsLayout;
