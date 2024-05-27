import styles from "./juego.css";
import asteroide from "../../../assets/imagenes/challenges/asteroide_central.png";
import spaceBase from "../../../assets/imagenes/moduloHTML/spaceBase.png";
import planetLife from "../../../assets/imagenes/moduloHTML/planetaHabitable.png";
import spaceship1 from "../../../assets/imagenes/moduloHTML/spaceship1.png";

export function juegoScene() {
  const pageContent = `
    <h2>Juego de Prueba: salvanos del asteroide con flexbox</h2>
    <p>Misión: usa los controles para alejar el asteroide a la zona objetivo</p>
    <div class=${styles["game-container"]}>
        <div class=${styles["controls"]}>
            <label for="justifyContent">justify-content:</label>
            <select id="justifyContent">
                <option value="flex-start">flex-start</option>
                <option value="center">center</option>
                <option value="flex-end">flex-end</option>
            </select>
            <label for="alignItems">align-items:</label>
            <select id="alignItems">
                <option value="flex-start">flex-start</option>
                <option value="center">center</option>
                <option value="flex-end">flex-end</option>
            </select>
        </div>
        <div class=${styles["image-container"]} id="image-container">
            <img src="${asteroide}" class=${styles["target-image"]}>
            <img src="${spaceBase}" id=${styles["spaceBase"]}>
            <img src="${planetLife}" id=${styles["planetLife"]}>
            <img src="${spaceship1}" id=${styles["spaceShip"]}>
            <div id="modal" class=${styles["modal"]}></div>
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
    const $modal = document.getElementById("modal");

    // Función para actualizar los estilos de la imagen
    const updateStyles = () => {
      imageContainer.style.display = "flex";
      imageContainer.style.justifyContent = justifyContentSelect.value;
      imageContainer.style.alignItems = alignItemsSelect.value;
      //controladores
      if (
        justifyContentSelect.value === "center" &&
        (alignItemsSelect.value === "center" ||
          alignItemsSelect.value === "flex-end")
      ) {
        $planetLife.classList.add(`${styles["vibrate"]}`);
        $modal.innerHTML = `<div>
        <h2>Destruiste el planeta!</h2>
      </div>;`;
      $planetLife.classList.add(`${styles["vibrate"]}`);
      } else {
        $planetLife.classList.remove(`${styles["vibrate"]}`);
        $modal.innerHTML = ``;
      }
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
