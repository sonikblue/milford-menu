import type { Menu } from "@/types/menu";
import type { MenuService } from "./menuService";

const fixedMenu = {
  mains: [
    {
      description: "Pasta bolognese",
    },
    {
      description: "Jacket potato with cheese, beans or tuna",
    },
    {
      description: "Cheese & ham panini",
    },
    {
      description: "Veggie pasta bolognese",
    },
  ],
  desserts: [
    {
      description: "Cinnamon roll",
    },
  ],
};

export class FixedMenuService implements MenuService {
  public todaysMenu(): Menu {
    return fixedMenu;
  }

  public menuFor(): Menu {
    return fixedMenu;
  }
}
