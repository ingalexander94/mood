import Back from "@/components/Back/Back";
import BottomFilter from "@/components/BottomFilter/BottomFilter";
import { Metadata } from "next";

type Props = {
  children: React.ReactNode;
};

export const metadata: Metadata = {
  title: "Mood | Crear Reserva",
};

const ReserveLayout = ({ children }: Props) => {
  return (
    <>
      <Back isShared={false} />
      {children}
      <BottomFilter textButton="Realizar búsqueda" showClear={true} />
    </>
  );
};

export default ReserveLayout;
