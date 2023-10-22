import { sidebar } from "vuepress-theme-hope";
import { onNewSidebar } from './serves/appUilts';
const sidebarList = onNewSidebar();
export default sidebar({
  "/": sidebarList
});
