import { navigateTo } from "../../../Router";
import styles from "./html.css";
import { ModulesByIdScene } from "./";
import { fetchApi } from "../../../helpers/fetch-api";

export function HtmlScene(params) {
  let pageContent = `
    <section class="${styles["header-modules"]}">
        <h2>HTML</h2>
        <button id="create-modules">Crear</button>
    </section>  

    <section class="${styles.container}" id="modules"></section>
    `;
  let logic = async () => {
    /* Boton Blanco en el sideBar */
    const $whiteButton = document.getElementById("/dashboard/html");
    $whiteButton.style = "background-color:white";

    /* Craer Modulos*/
    const modules = document.getElementById("modules");
    const createModule = document.getElementById("create-modules");

    const response = await fetchApi("http://localhost:4000/api/challenges", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
    console.log(response);
    modules.innerHTML = `
        ${response
          .map(
            (module) => `
            <div class="${styles["module-card"]}">
                <h2>${module.title}</h2>
                <p>${module.description.substring(0, 60)}</p>
                <button id="module-${module.id}">Ver</button>
            </div>
        `
          )
          .join("")}
       `;

    response.forEach((module) => {
      const button = document.getElementById(`module-${module.id}`);
      button.addEventListener("click", () => {
        navigateTo(`/dashboard/html?id=${module.id}`);
      });
    });

    createModule.addEventListener("click", () => {
      navigateTo("/dashboard/html/create");
    });
  };

  if (params.get("id")) {
    const id = params.get("id");
    try {
      const { pageContent: pageContentById, logic: logicById } =
        ChallengeByIdScene(id);
      pageContent = pageContentById;
      logic = logicById;
    } catch (error) {
      console.error(error, "from ChallengeScene");
    }
  }
  return {
    pageContent,
    logic,
  };
}
