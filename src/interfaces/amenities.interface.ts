export const AmenityModel = {
  TV: {
    id: 1,
    name: "TV Led / LCD / Plasma",
    icon: "icon_tv.svg",
  },
  SNACK: {
    id: 2,
    name: "Snack / Bebidas",
    icon: "icon_snack.svg",
  },
  PARKING: {
    id: 3,
    name: "Parqueadero privado",
    icon: "icon_parking_2.svg",
  },
  GAY: {
    id: 4,
    name: "Gay friendly",
    icon: "icon_gay.svg",
  },
  FAN: {
    id: 5,
    name: "Ventilador",
    icon: "icon_fan.svg",
  },
  GROUPS: {
    id: 6,
    name: "Tríos / Grupos",
    icon: "icon_groups.svg",
  },
  DEPORTS: {
    id: 7,
    name: "Canales deportivos",
    icon: "icon_deports.svg",
  },
  CHANNELS: {
    id: 8,
    name: "Canales para adultos",
    icon: "icon_channels.svg",
  },
  SOUND: {
    id: 9,
    name: "Equipo de sonido",
    icon: "icon_sound.svg",
  },
};

export interface Amenity {
  id: Number;
  name: string;
  icon: string;
}
