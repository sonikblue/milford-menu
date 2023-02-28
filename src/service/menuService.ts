import type { Menu } from "@/types/menu";

export interface MenuService {
  todaysMenu: () => Menu;
  menuFor: (date: Date) => Menu;
}
