import asteroide from "../../../assets/imagenes/challenges/asteroide_central.png";
import planetLife from "../../../assets/imagenes/moduloHTML/planetaHabitable.png";
import spaceBase from "../../../assets/imagenes/moduloHTML/spaceBase.png";
import spaceship1 from "../../../assets/imagenes/moduloHTML/spaceship1.png";
import styles from "./juego.css";

export function juegoScene() {
  const pageContent = `
    <div class=${styles["game-title"]}>
      <h2>Juego de Prueba: salvanos del ovni con el asteroide flexbox</h2>
      <p>Misión: Destruye <span>el ovni</span> usando los controles para mover el <span>asteroide</span></p>
    </div>
    <div class=${styles["game-container"]}>
        <div class=${styles["panel-control"]}>
          <h3>Controles</h3>
          <div class=${styles["controls"]}>
            <div class=${styles["info-game"]}>
              <label for="justifyContent">justify-content</label>
            <select id="justifyContent">
                <option value="flex-start">flex-start</option>
                <option value="center">center</option>
                <option value="flex-end">flex-end</option>
            </select>
            </div>
            <div class=${styles["info-game"]}>
              <label for="alignItems">align-items</label>
            <select id="alignItems">
                <option value="flex-start">flex-start</option>
                <option value="center">center</option>
                <option value="flex-end">flex-end</option>
            </select>
          </div>
        </div>
        </div>
        <div class=${styles["image-container"]} id="image-container">
            <div id="modalBase" class=${styles["modal"]}></div>
            <img src="${asteroide}" class=${styles["target-image"]} id="asteroide">
            <img src="${spaceBase}" id=${styles["spaceBase"]}>
            <img src="${planetLife}" id=${styles["planetLife"]}>
            <img src="${spaceship1}" id=${styles["spaceShip"]}>
            <div id="modal" class=${styles["modal"]}></div>
            <div id="modalNave" class=${styles["modal"]}></div>
            
        </div>
    </div>
    `;
  const logic = () => {
    /* Boton Blanco en el sideBar */
    const $whiteButton = document.getElementById("/dashboard/html");
    $whiteButton.style = "background-color:white";
    const justifyContentSelect = document.getElementById("justifyContent");
    const alignItemsSelect = document.getElementById("alignItems");
    const imageContainer = document.getElementById("image-container");
    const $planetLife = document.getElementById(`${styles["planetLife"]}`);
    const $spaceShip = document.getElementById(`${styles["spaceShip"]}`);
    const $spaceBase = document.getElementById(`${styles["spaceBase"]}`);
    const $modal = document.getElementById("modal");
    const $modalNave = document.getElementById("modalNave");
    const $modalBase = document.getElementById("modalBase");
    const $asteroide = document.getElementById("asteroide");


    // Función para actualizar los estilos de la imagen
    const updateStyles = () => {
      imageContainer.style.display = "flex";
      imageContainer.style.justifyContent = justifyContentSelect.value;
      imageContainer.style.alignItems = alignItemsSelect.value;
      //controladores
      if (justifyContentSelect.value === "flex-start" &&
        alignItemsSelect.value === "center"
      ) {
        $spaceShip.classList.add(`${styles["fly-away"]}`);
        $modalNave.innerHTML = `<div>
        <h2>Destruiste la nave!</h2>
      </div>;`;
      } else {
        $spaceShip.classList.remove(`${styles["fly-away"]}`);
        $modalNave.innerHTML = ``;
      };
      if (justifyContentSelect.value === "flex-end" &&
        alignItemsSelect.value === "flex-end"
      ) {
        $spaceBase.classList.add(`${styles["vibrate"]}`);
        $modalBase.innerHTML = `<div>
        <h2>Destruiste la base!</h2>
      </div>;`;
      } else {
        $spaceBase.classList.remove(`${styles["vibrate"]}`);
        $modalBase.innerHTML = ``;
      };
      if (
        justifyContentSelect.value === "center" &&
        (alignItemsSelect.value === "center" ||
          alignItemsSelect.value === "flex-end")
      ) {
        $planetLife.classList.add(`${styles["vibrate"]}`);
        $modal.innerHTML = `<div>
        <h2>Destruiste el planeta!</h2>
      </div>;`;
      $asteroide.classList.add(`${styles["vibrate-asteroide"]}`);
      } else {
        $planetLife.classList.remove(`${styles["vibrate"]}`);
        $asteroide.classList.remove(`${styles["vibrate-asteroide"]}`);
        $modal.innerHTML = ``;
      };
    };

    // Añadir event listeners a los selectores
    justifyContentSelect.addEventListener("change", updateStyles);
    alignItemsSelect.addEventListener("change", updateStyles);

    // Inicializar estilos
    updateStyles();
  };
  return {
    pageContent,
    logic,
  };
}
