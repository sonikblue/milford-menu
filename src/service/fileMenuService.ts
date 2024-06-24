import { isMenu, type Menu } from "@/types/menu";
import { formatISO } from "date-fns";
import { readFileSync } from "fs";
import type { MenuService } from "./menuService";

type FileMenu = {
  [key: string]: Menu;
};

const isFileMenu = (menuFile: any): menuFile is FileMenu => {
  for (const menu of Object.values(menuFile)) {
    if (!isMenu(menu)) {
      return false;
    }
  }

  return true;
};

const dateAsIsoString = (date: string | number | Date): string => {
  return formatISO(date, { representation: "date" });
};

export class FileMenuService implements MenuService {
  menu: FileMenu;

  constructor(filename: string) {
    const menuFile = readFileSync(filename, "utf-8");
    const menuFromFile = JSON.parse(menuFile);

    if (!isFileMenu(menuFromFile)) {
      throw new Error(`${filename} did not contain a valid set of menus!`);
    }

    this.menu = menuFromFile;
  }

  public todaysMenu(): Menu {
    return this.menu[dateAsIsoString(Date.now())];
  }

  public menuFor(date: Date): Menu {
    return this.menu[dateAsIsoString(date)];
  }
}
