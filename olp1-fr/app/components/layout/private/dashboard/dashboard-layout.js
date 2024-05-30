import { navigateTo } from "../../../../Router";
import { logOut } from "../../../../helpers";
import { NavigationBar } from "../../../navigation-bar/navigation-bar";
import { SidebarMenu } from "../../../sidebar-menu/sidebar-menu";
import { Footer } from "../../../footer/footer";
import styles from "./dashboard-layout.css";

export function DashboardLayout(
  pageContent,
  logic,
  footer,
  navbarData,
  sidebarData
) {
  // hace la peticion al backend.

  const root = document.getElementById("root");

  sidebarData = [
    { href: "/dashboard", name: "Home" },
    { href: "/dashboard/forum", name: "Forum" },
    { href: "/dashboard/profile", name: "Profile" },
    { href: "/dashboard/learning-path", name: "Learning Path" },
    { href: "/dashboard/html", name: "HTML" },
    { href: "/dashboard/css", name: "CSS" },
    { href: "/dashboard/javascript", name: "Javascript" },
    { href: "/dashboard/challenges", name: "Challenges" },
    { href: "/dashboard/users", name: "Users" },
    { href: "/dashboard/rank", name: "Rank" }
  ];

  root.innerHTML = `
  <div class="${styles.container}">
    <div class="${styles.sidebar}">
      ${SidebarMenu(sidebarData)}
    </div>
    <div class="${styles.navbar}">
      ${NavigationBar()}
    </div>
    <div class="${styles.main}">
      ${pageContent}
    </div>
    <div class="${styles.footer}">
    ${Footer()}
    </div>
  </div>
  `;

  logic();

  sidebarData.forEach(({ href, icon, label }) => {
    document.getElementById(href).addEventListener("click", () => {
      navigateTo(href);
    });
  });

  document.getElementById("logout").addEventListener("click", logOut);
}
