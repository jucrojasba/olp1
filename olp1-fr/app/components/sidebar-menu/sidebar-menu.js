import styles from "./sidebar-menu.css";

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
    <div id="usuario">
    <a href="/dashboard/profile"><img src="https://randomuser.me/api/portraits/men/75.jpg"></a>
    <h3>Nicolas Picon</h3>
    </div>
    <div id="discover">
    <h3>Discover</h3>
    <button id="${"/dashboard"}" type="button">Home</button>
    <button id="${"/dashboard/forum"}" type="button">Forum</button>
    <button id="${"/dashboard/learning-path"}" type="button">Learning Path</button>
    <button id="${"/dashboard/challenges"}" type="button">Challenges</button>
    </div>
    <div id="courses">
    <h3>My Courses</h3>
    <button id="${"/dashboard/html"}" type="button">HTML</button>
    <button id="${"/dashboard/css"}" type="button">CSS</button>
    <button id="${"/dashboard/javascript"}" type="button">JAVASCRIPT</button>
    </div>
    <div id="salida">
    <button id="${"/dashboard/users"}" type="button">Users</button>
    <button id="logout" type="button">Logout</button>
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
