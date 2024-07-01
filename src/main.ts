import { createApp } from "vue";
import App from "./App.vue";
import { FileMenuService } from "./service/fileMenuService";
import { menu } from "./service/menu";
import type { MenuService } from "./service/menuService";

const menuService: MenuService = new FileMenuService(menu);

createApp(App, { menuService }).mount("#app");
