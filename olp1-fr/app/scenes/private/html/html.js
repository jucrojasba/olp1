import { navigateTo } from "../../../Router";
import styles from "./html.css";
import { ModulesByIdScene } from "./";
import { fetchApi } from "../../../helpers/fetch-api";

export function HtmlScene(params) {
  let pageContent = `
    <section class="${styles["header-challenges"]}">
        <h2>HTML</h2>
        <button id="create-challenge">Crear</button>
    </section>  

    <section class="${styles.container}" id="challenges"></section>
    `;
  let logic = async () => {
    /* Boton Blanco en el sideBar */
    const $whiteButton = document.getElementById("/dashboard/html");
    $whiteButton.style = "background-color:white";

    /* Craer Modulos*/
    const challenges = document.getElementById("modules");
    const createChallenge = document.getElementById("create-module");

    const response = await fetchApi("http://localhost:4000/api/challenges", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
    console.log(response);
    challenges.innerHTML = `
        ${response
          .map(
            (challenge) => `
            <div class="${styles["challenge-card"]}">
                <h2>${challenge.title}</h2>
                <p>${challenge.description.substring(0, 60)}</p>
                <button id="challenge-${challenge.id}">Ver</button>
            </div>
        `
          )
          .join("")}
       `;

    response.forEach((challenge) => {
      const button = document.getElementById(`challenge-${challenge.id}`);
      button.addEventListener("click", () => {
        navigateTo(`/dashboard/html?id=${challenge.id}`);
      });
    });

    createChallenge.addEventListener("click", () => {
      navigateTo("/dashboard/challenges/create");
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
