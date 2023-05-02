export const CategoryModel = {
  POPULAR: {
    id: 1,
    name: "Populares",
    icon: "icon_popular.svg",
  },
  CLOSEST: {
    id: 2,
    name: "El más cercano",
    icon: "icon_closest.svg",
  },
  TOP: {
    id: 3,
    name: "Top 10",
    icon: "icon_star.svg",
  },
  PROMOTIONS: {
    id: 4,
    name: "Promociones",
    icon: "icon_promotions.svg",
  },
  WEEK: {
    id: 5,
    name: "Motel de la semana",
    icon: "icon_week.svg",
  },
  RECENT: {
    id: 6,
    name: "Más recientes",
    icon: "icon_recent.svg",
  },
  THEMATIC: {
    id: 7,
    name: "Temáticos",
    icon: "icon_thematic.svg",
  },
  PARKING: {
    id: 8,
    name: "Con parqueadero",
    icon: "icon_parking.svg",
  },
};

export interface Category {
  id: Number;
  name: string;
  icon: string;
}
