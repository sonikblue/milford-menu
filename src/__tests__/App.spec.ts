import App from "@/App.vue";
import MenuPanel from "@/components/MenuPanel.vue";
import { FixedMenuService } from "@/service/fixedMenuService";
import type { MenuService } from "@/service/menuService";
import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

describe("App", () => {
  it("shows the header as expected", () => {
    const menuService: MenuService = new FixedMenuService();

    const wrapper = mount(App, { props: { menuService } });

    expect(wrapper.find("h1").text()).toBe("Milford Menu");
  });

  it("shows the menu panel", () => {
    const menuService: MenuService = new FixedMenuService();

    const wrapper = mount(App, { props: { menuService } });

    expect(wrapper.findComponent(MenuPanel).props().menu).toBe(
      menuService.todaysMenu()
    );
  });
});
