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
        <div class="${styles["html"]}">
          <div class="${styles["planet"]}"><a href="/dashboard/html"><img src="${planet1}"></a><div class="${styles["shadow"]}"><img src="${logohtml}"></div></div>
        </div>
        <div class="${styles["css"]}">
          <div class="${styles["planet"]}"><a href="/dashboard/css"><img src="${planet2}"></a><div class="${styles["shadow"]}"><img src="${logocss}"></div></div>
        </div>
        <div class="${styles["javascript"]}">
          <div class="${styles["planet"]}"><a href="/dashboard/javascript"><img src="${planet3}"></a><div class="${styles["shadow"]}"><img src="${logojavascript}"></div></div>
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
