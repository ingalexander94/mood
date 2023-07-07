export const Routes = {
  HOME: {
    path: "/inicio",
    name: "Inicio",
    icon: "icon_home.svg",
  },
  FAVORITES: {
    path: "/favoritos",
    name: "Favoritos",
    icon: "icon_favorites.svg",
  },
  MOTELS: {
    path: "/moteles",
    name: "Moteles",
    icon: "icon_motels.svg",
  },
  PROFILE: {
    path: "/perfil",
    name: "Perfil",
    icon: "icon_profile.svg",
  },
};

export interface Route {
  path: string;
  name: string;
  icon: string;
}
