import styles from "./home.css";
import sun from "../../../assets/imagenes/Home/sun.png";
import planet1 from "../../../assets/imagenes/Home/planet1.png";
import planet2 from "../../../assets/imagenes/Home/planet2.png";
import planet3 from "../../../assets/imagenes/Home/planet3.png";

export function HomeScene() {
  const pageContent = `
    <div id="${styles["container"]}">
        <ul class="${styles["wrapper"]}">
        <div class="${styles["sun"]}">
          <div class="${styles["star"]}">
          <img src="${sun}">
          </div>
        </div>
        <div class="${styles["earth"]}">
          <div class="${styles["planet"]}"><img src="${planet1}"><div class="${styles["shadow"]}"></div></div>
        </div>
        <div class="${styles["mars"]}">
          <div class="${styles["planet"]}"><img src="${planet2}"><div class="${styles["shadow"]}"></div></div>
        </div>
        <div class="${styles["jupiter"]}">
          <div class="${styles["planet"]}"><img src="${planet3}"><div class="${styles["shadow"]}"></div></div>
        </div>
        </ul>
      </div>
  `;

  const logic = () => {
    const $whiteButtom = document.getElementById('/dashboard');
    $whiteButtom.style="background-color:white"
  };

  return {
    pageContent,
    logic,
  };
}
