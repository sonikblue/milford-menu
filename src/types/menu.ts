export interface MenuItem {
  description: string;
}

export interface Menu {
  mains: MenuItem[];

  desserts: MenuItem[];
}
