import styles from "./home.css";
import sun from "../../../assets/imagenes/Home/sun.png";
import planet1 from "../../../assets/imagenes/Home/planet1.png";
import planet2 from "../../../assets/imagenes/Home/planet2.png";
import planet3 from "../../../assets/imagenes/Home/planet3.png";
import logohtml from "../../../assets/imagenes/Home/w3_html5-icon.svg";
import logocss from "../../../assets/imagenes/Home/w3_css-icon.svg";
import logojavascript from "../../../assets/imagenes/Home/javascript-vertical.svg";

export function HomeScene() {
  const pageContent = `
    <div class="${styles["container"]}">
      <ul class="${styles["wrapper"]}">
        <div class="${styles["sun"]}">
          <div class="${styles["star"]}">
            <img src="${sun}">
          </div>
        </div>
        <div class="${styles["htmlPlanet"]}">
          <div class="${styles["planet"]}">
            <img src="${planet1}">
            <div class="${styles["shadow"]}">
              <img src="${logohtml}">
            </div>
          </div>
        </div>
        <div class="${styles["css"]}">
          <div class="${styles["planet"]}">
            <a href="/dashboard/css">
              <img src="${planet2}">
            </a>
            <div class="${styles["shadow"]}">
              <img src="${logocss}">
            </div>
          </div>
        </div>
        <div class="${styles["javascript"]}">
          <div class="${styles["planet"]}">
            <a href="/dashboard/javascript">
              <img src="${planet3}">
            </a>
            <div class="${styles["shadow"]}">
              <img src="${logojavascript}">
            </div>
          </div>
        </div>
      </ul>
    </div>
    <div class="${styles["modal"]}" id="modalHtml" style="display:none;">
      <div class="${styles["imageContainer"]}">
        <img src="${planet1}">
      </div>
      <div class="${styles["info"]}">
        <h2>HTML</h2>
        <p>Modulo: <span>test module</span></p>
        <div class="${styles["progreso"]}">
          <div class="${styles["loader"]}">
            <p>Progreso</p>
          </div>
        </div>
        <div class="${styles["botones"]}">
          <a href="/dashboard/html">
            <button id="lenguaje" type="button">
              <img src="${logohtml}">HTML
            </button>
          </a>
          <button id="cerrarHtml" type="button">Cerrar</button>
        </div>
      </div>
    </div>
  `;

  const logic = () => {
    const $htmlPlanet = document.querySelector(`.${styles["htmlPlanet"]}`);
    const $modalHtml = document.getElementById("modalHtml");
    const $cerrarHtml = document.getElementById("cerrarHtml");

    $htmlPlanet.addEventListener("click", () => {
      $modalHtml.style.display = "flex";
    });

    $cerrarHtml.addEventListener("click", () => {
      $modalHtml.style.display = "none";
    });
    document.addEventListener("click", (event) => {
      if (
        $modalHtml.style.display === "flex" &&
        !$modalHtml.contains(event.target) &&
        !$htmlPlanet.contains(event.target)
      ) {
        $modalHtml.style.display = "none";
      }
    });
  };

  return {
    pageContent,
    logic,
  };
}
