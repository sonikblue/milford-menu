import { type Menu } from "@/types/menu";
import { formatISO } from "date-fns";
import { type MenuFile } from "./menu";
import type { MenuService } from "./menuService";

const dateAsIsoString = (date: string | number | Date): string => {
  return formatISO(date, { representation: "date" });
};

export class FileMenuService implements MenuService {
  menu: MenuFile;

  constructor(menu: MenuFile) {
    this.menu = menu;
  }

  public todaysMenu(): Menu {
    return this.menu[dateAsIsoString(Date.now())];
  }

  public menuFor(date: Date): Menu {
    return this.menu[dateAsIsoString(date)];
  }
}
