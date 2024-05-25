import styles from "./sidebar-menu.css";
import home_icon from "../../assets/imagenes/Home/home_icon.png";
import forum_icon from "../../assets/imagenes/Home/icon_forum.png";
import challenges_icon from "../../assets/imagenes/Home/icon_challenge.png";
import html_icon from "../../assets/imagenes/Home/w3_html5-icon.svg";
import css_icon from "../../assets/imagenes/Home/w3_css-icon.svg";
import javascript_icon from "../../assets/imagenes/Home/javascript-vertical.svg";

export function SidebarMenu(data = []) {
  const path = window.location.pathname;

  // if path === href, add active class
  data.forEach((item) => {
    if (path === item.href) {
      item.active = true;
    }
  });

  return `
    <aside class="${styles["sidebar-menu"]}">
    <div id="${styles["usuario"]}">
    <a href="/dashboard/profile"><img src="https://randomuser.me/api/portraits/men/75.jpg"></a>
    <h3>Nicolas Picon</h3>
    </div>
    <div id="${styles["discover"]}">
    <h3>Discover</h3>
    <div class="${styles["container"]}">
    <button id="${"/dashboard"}" type="button"><img src="${home_icon}">Home</button>
    <button id="${"/dashboard/forum"}" type="button"><img src="${forum_icon}">Forum</button>
    <button id="${"/dashboard/challenges"}" type="button"><img src="${challenges_icon}">Challenges</button></div>
    </div>
    <div id="${styles["courses"]}">
    <h3>My Courses</h3>
    <div class="${styles["container"]}">
    <button id="${"/dashboard/html"}" type="button"><img src="${html_icon}">HTML</button>
    <button id="${"/dashboard/css"}" type="button"><img src="${css_icon}">CSS</button>
    <button id="${"/dashboard/javascript"}" type="button"><img src="${javascript_icon}">JAVASCRIPT</button>
    </div>
    </div>
    <div id="${styles["salida"]}">
    <div class="${styles["container"]}">
    <button id="${"/dashboard/users"}" type="button">Users</button>
    <button id="logout" type="button">Logout</button>
    </div>
    </div>

    <ul>
      ${data
        .map(
          (item) => `
        <li class="${item.active ? styles.active : ""}">
          <button id="${item.href}" type="button">${item.name}</button>
        </li>
      `
        )
        .join("")}
      <li></li>
    </ul>
    </aside>
  `;
}
