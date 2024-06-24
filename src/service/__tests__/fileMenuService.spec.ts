import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { FileMenuService } from "../fileMenuService";
import type { MenuService } from "../menuService";

const TEST_MENU_FILE_NAME = "src/service/__tests__/test-menu.json";
const BAD_MENU_FILE_NAME = "src/service/__tests__/bad-test-menu.json";

describe("FileMenuService", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it("Should return the expected value for today's menu", () => {
    vi.setSystemTime(new Date("2020-03-06"));
    const fileMenuService: MenuService = new FileMenuService(
      TEST_MENU_FILE_NAME,
    );

    const menu = fileMenuService.todaysMenu();

    expect(menu).toMatchInlineSnapshot(`
      {
        "desserts": [
          {
            "description": "Cinnamon roll",
          },
        ],
        "mains": [
          {
            "description": "Pasta bolognese",
          },
          {
            "description": "Jacket potato with cheese, beans or tuna",
          },
        ],
      }
    `);
  });

  it("Should return the expected value for a given menu date", () => {
    const fileMenuService: MenuService = new FileMenuService(
      TEST_MENU_FILE_NAME,
    );

    const menu = fileMenuService.menuFor(new Date("2020-03-07"));

    expect(menu).toMatchInlineSnapshot(`
      {
        "desserts": [
          {
            "description": "Cake and Custard",
          },
        ],
        "mains": [
          {
            "description": "Cheese & ham panini",
          },
          {
            "description": "Veggie pasta bolognese",
          },
        ],
      }
    `);
  });

  it("should throw an error if the menu file cannot be found", () => {
    expect(() => new FileMenuService("unknown-file.json")).toThrowError();
  });

  it("should throw an error if the menu file is not the correct shape", () => {
    expect(() => new FileMenuService(BAD_MENU_FILE_NAME)).toThrowError();
  });
});

describe("isFileMenu", () => {
  it.todo("should fail if a bad type is passed");

  // TODO: Work out test cases!
});
