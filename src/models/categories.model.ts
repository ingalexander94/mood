export const CategoryModel = {
  POPULAR: {
    id: 1,
    name: "Populares",
    icon: "icon_popular.svg",
    active: false,
  },
  CLOSEST: {
    id: 2,
    name: "El más cercano",
    icon: "icon_closest.svg",
    active: true,
  },
  TOP: {
    id: 3,
    name: "Top 10",
    icon: "icon_star.svg",
    active: false,
  },
  PROMOTIONS: {
    id: 4,
    name: "Promociones",
    icon: "icon_promotions.svg",
    active: true,
  },
  WEEK: {
    id: 5,
    name: "Motel de la semana",
    icon: "icon_week.svg",
    active: false,
  },
  RECENT: {
    id: 6,
    name: "Más recientes",
    icon: "icon_recent.svg",
    active: false,
  },
  THEMATIC: {
    id: 7,
    name: "Temáticos",
    icon: "icon_thematic.svg",
    active: false,
  },
  PARKING: {
    id: 8,
    name: "Con parqueadero",
    icon: "icon_parking.svg",
    active: false,
  },
};

export interface Category {
  id: Number;
  name: string;
  icon: string;
  active: boolean;
}
