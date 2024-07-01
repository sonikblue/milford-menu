import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { FileMenuService } from "../fileMenuService";
import type { MenuService } from "../menuService";
import { testMenu } from "./testMenu";

describe("FileMenuService", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it("Should return the expected value for today's menu", () => {
    vi.setSystemTime(new Date("2017-06-30"));
    const fileMenuService: MenuService = new FileMenuService(testMenu);

    const menu = fileMenuService.todaysMenu();

    expect(menu).toMatchInlineSnapshot(`
      {
        "desserts": [
          {
            "description": "Baz Delight",
          },
        ],
        "mains": [
          {
            "description": "Foo Burger",
          },
          {
            "description": "Bar Salad",
          },
        ],
      }
    `);
  });

  it("Should return the expected value for a given menu date", () => {
    const fileMenuService: MenuService = new FileMenuService(testMenu);

    const menu = fileMenuService.menuFor(new Date("2020-03-07"));

    expect(menu).toMatchInlineSnapshot(`
      {
        "desserts": [
          {
            "description": "Buzz Salad",
          },
        ],
        "mains": [
          {
            "description": "Fizz Burger",
          },
        ],
      }
    `);
  });
});
