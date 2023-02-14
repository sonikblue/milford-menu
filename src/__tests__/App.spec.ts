import App from "@/App.vue";
import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

describe("App", () => {
  it("renders properly", () => {
    const wrapper = mount(App);

    expect(wrapper.find("h1").text()).toBe("Milford Menu");
  });
});
