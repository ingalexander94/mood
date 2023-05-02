import BottomFilter from "@/components/BottomFilter/BottomFilter";
import { Metadata } from "next";

type Props = {
  children: React.ReactNode;
};

export const metadata: Metadata = {
  title: "Mood | Detalle de la habitación",
};

const DetailLayout = ({ children }: Props) => {
  return (
    <>
      {children}
      <BottomFilter />
    </>
  );
};

export default DetailLayout;
