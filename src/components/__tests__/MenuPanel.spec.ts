import type { MenuItem } from "@/types/menu";
import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import MenuPanel from "../MenuPanel.vue";
import MenuSection from "../MenuSection.vue";

describe("MenuPanel", () => {
  it("renders a MenuSection each for mains and desserts ", () => {
    const mains: MenuItem[] = [
      { description: "Main course one" },
      { description: "Main course two" },
    ];
    const desserts: MenuItem[] = [
      { description: "Dessert one" },
      { description: "Dessert two" },
    ];

    const wrapper = mount(MenuPanel, {
      props: { menu: { mains, desserts } },
    });

    const menuSections = wrapper.findAllComponents(MenuSection);
    expect(menuSections.length).toBe(2);
    expect(menuSections.at(0)?.props().items).toEqual(mains);
    expect(menuSections.at(1)?.props().items).toEqual(desserts);
  });
});
