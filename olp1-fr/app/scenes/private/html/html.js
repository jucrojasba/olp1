import styles from "./html.css";
import spaceship1 from "../../../assets/imagenes/moduloHTML/spaceship1.png";
import spaceship2 from "../../../assets/imagenes/moduloHTML/spaceship2.png";
import planet1 from "../../../assets/imagenes/Home/planet1.png";
import logohtml from "../../../assets/imagenes/Home/w3_html5-icon.svg";

export function HtmlScene() {
  let pageContent = `
    <header>
      <h2>HTML<div class="${styles.lenguaje}"> <img src="${logohtml}"></div> </h2>
      <button id="create-module">Crear</button>
    </header>
    <div class="${styles.contenido}">
    <div class="${styles.planet}">
    <img src="${planet1}"></div>
    <section class="${styles.container}" id="modulos"></section>
    <section class="${styles.container}" id="modulosModales"></section>
    <section class="${styles["container-crear"]}" id="crear-modulo"></section>
    </div>
    `;

  let logic = async () => {
    /* Boton Blanco en el sideBar */
    const $whiteButton = document.getElementById("/dashboard/html");
    $whiteButton.style = "background-color:white";

    /* Mostrar Modulos */
    const $modulos = document.getElementById("modulos");
    const $modulosModales = document.getElementById("modulosModales");
    const responseVerModulos = await fetch("http://localhost:4000/api/modules/2");
    if (!responseVerModulos.ok) {
      const errorMessage = await responseVerModulos.text();
      throw new Error(`Error ${responseVerModulos.status}: ${errorMessage}`);
    }
    const modulosdb = await responseVerModulos.json();
    $modulos.innerHTML = `
    ${modulosdb
      .map(
        (modulo) => `
        <div class="${styles.modulo}" id="modulo${modulo.id}">
        <div class="${styles["image-container"]}"><img src="${
          modulo.id % 2 == 0 ? spaceship1 : spaceship2
        }"></div>  
        <h3>${modulo.name}</h3>
        </div>
    `
      )
      .join("")}
    `;

    /* Movimiento Aleatorio de los modulos */
    function getRandomValue(max) {
      return Math.floor(Math.random() * max) + 'px';
    }
    
    const mainElement = document.querySelector(`.${styles.contenido}`);
    const mainRect = mainElement.getBoundingClientRect();
    
    // Genera coordenadas aleatorias de inicio y final
    let startCoordX = getRandomValue(mainRect.width);
    let startCoordY = getRandomValue(mainRect.height);
    let endCoordX = getRandomValue(mainRect.width);
    let endCoordY = getRandomValue(mainRect.height);
    
    // Selecciona correctamente los elementos generados dinámicamente
    document.querySelectorAll(`.${styles.modulo}`).forEach(e => {
    startCoordX = getRandomValue(mainRect.width);
    startCoordY = getRandomValue(mainRect.height);
    endCoordX = getRandomValue(mainRect.width);
    endCoordY = getRandomValue(mainRect.height);
      e.style.setProperty('--start-x', startCoordX);
      e.style.setProperty('--start-y', startCoordY);
      e.style.setProperty('--end-x', endCoordX);
      e.style.setProperty('--end-y', endCoordY);
    });
  };

  return {
    pageContent,
    logic,
  };
}
