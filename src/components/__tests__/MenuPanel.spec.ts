import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import MenuPanel from "../MenuPanel.vue";

describe("Menu", () => {
  it("renders properly", () => {
    const wrapper = mount(MenuPanel, { props: { menu: "Hello menu" } });

    expect(wrapper.text()).toContain("Hello menu");
  });
});
