export interface MenuItem {
  description: string;
}

export interface Menu {
  mains: MenuItem[];

  desserts: MenuItem[];
}

export interface MenuService {
  todaysMenu: () => Menu;
  menuFor: (date: Date) => Menu;
}
