export interface MenuItem {
  description: string;
}

export interface Menu {
  mains: MenuItem[];

  desserts: MenuItem[];
}

// TODO: Unit tests!
export const isMenuItem = (menuItem: any): menuItem is MenuItem => {
  return typeof (menuItem as MenuItem).description === "string";
};

export const isMenu = (menu: any): menu is Menu => {
  const menuToCheck = menu as Menu;

  if (typeof menuToCheck.mains !== "object") return false;
  for (const main of menuToCheck.mains) {
    if (!isMenuItem(main)) {
      return false;
    }
  }

  if (typeof menuToCheck.desserts !== "object") return false;
  for (const main of menuToCheck.desserts) {
    if (!isMenuItem(main)) {
      return false;
    }
  }

  return true;
};
