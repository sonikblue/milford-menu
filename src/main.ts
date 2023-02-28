import { createApp } from "vue";
import App from "./App.vue";
import { FixedMenuService } from "./service/fixedMenuService";
import type { MenuService } from "./service/menuService";

const menuService: MenuService = new FixedMenuService();

createApp(App, { menuService }).mount("#app");
