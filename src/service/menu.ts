import type { Menu } from "@/types/menu";

export type MenuFile = {
  [key: string]: Menu;
};

export const menu: MenuFile = {
  "2024-07-01": {
    mains: [
      {
        description: "Pasta bolognese",
      },
      {
        description: "Jacket potato with cheese, beans or tuna",
      },
    ],
    desserts: [
      {
        description: "Cinnamon roll",
      },
    ],
  },
  "2024-07-02": {
    mains: [
      {
        description: "Chicken Korma",
      },
    ],
    desserts: [
      {
        description: "Cake and Custard",
      },
    ],
  },
};
