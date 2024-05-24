import styles from "./html.css";
import spaceship1 from "../../../assets/imagenes/moduloHTML/spaceship1.png";
import spaceship2 from "../../../assets/imagenes/moduloHTML/spaceship2.png";
export function HtmlScene() {
  let pageContent = `
    <header>
      <h2><span>H</span>yper<span>T</span>ext <span>M</span>arkup <span>L</span>anguage </h2>
      <button id="create-module">Crear</button>
    </header>
    <section class="${styles.container}" id="modulos"></section>
    <section class="${styles.container}" id="modulosModales"></section>
    <section class="${styles["container-crear"]}" id="crear-modulo"></section>
    `;
  let logic = async () => {
    /* Boton Blanco en el sideBar */
    const $whiteButton = document.getElementById("/dashboard/html");
    $whiteButton.style = "background-color:white";

    /* Mostrar Modulos */
    const $modulos = document.getElementById("modulos");
    const $modulosModales = document.getElementById("modulosModales");
    const responseVerModulos = await fetch(
      "http://localhost:4000/api/modules/2"
    );
    if (!responseVerModulos.ok) {
      const errorMessage = await responseVerModulos.text();
      throw new Error(`Error ${responseVerModulos.status}: ${errorMessage}`);
    }
    const modulosdb = await responseVerModulos.json();
    $modulos.innerHTML = `
    ${modulosdb
      .map(
        (modulo) => `
        <div class="${styles.modulo} id="modulo${modulo.id}">
          <h3>${modulo.name}</h3>
          <div class=${styles["image-container"]}><img src="${
          modulo.id % 2 == 0 ? spaceship1 : spaceship2
        }"></div>
        </div>
    `
      )
      .join("")}
    `;

    /*Crear Modulo*/
    const $crearModulo = document.getElementById("create-module");
    $crearModulo.addEventListener("click", () => {
      navigateTo();
    });
  };
  return {
    pageContent,
    logic,
  };
}
