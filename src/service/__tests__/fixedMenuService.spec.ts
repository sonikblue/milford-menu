import { describe, expect, it } from "vitest";
import { FixedMenuService } from "../fixedMenuService";
import type { MenuService } from "../menuService";

describe("FixedMenuService", () => {
  it("Should return a fixed value for today's menu", () => {
    const fixedMenuService: MenuService = new FixedMenuService();

    const menu = fixedMenuService.todaysMenu();

    expect(menu).toMatchSnapshot();
  });

  it("Should return a fixed value for any menu date", () => {
    const fixedMenuService: MenuService = new FixedMenuService();

    const menu = fixedMenuService.menuFor(new Date("2020-03-07"));

    expect(menu).toMatchSnapshot();
  });
});
