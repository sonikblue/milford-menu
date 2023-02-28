import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import MenuSection from "../MenuSection.vue";

describe("MenuSection", () => {
  it("renders slot content properly", () => {
    const slotText = "MenuSection Test";

    const wrapper = mount(MenuSection, {
      slots: { default: slotText },
      props: { items: [] },
    });

    expect(wrapper.find("h2").text()).toBe(slotText);
  });

  it("renders list items properly", () => {
    const itemOneText = "Item One";
    const itemTwoText = "Item Two";

    const wrapper = mount(MenuSection, {
      props: {
        items: [{ description: itemOneText }, { description: itemTwoText }],
      },
    });

    const listItems = wrapper.findAll("li");
    expect(listItems.length).toBe(2);
    expect(listItems[0]?.text()).toBe(itemOneText);
    expect(listItems[1]?.text()).toBe(itemTwoText);
  });

  it("renders properly with an empty list of items", () => {
    const wrapper = mount(MenuSection, {
      props: {
        items: [],
      },
    });

    expect(wrapper.find("li").exists()).toBe(false);
  });
});
