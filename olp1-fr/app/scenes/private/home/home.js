import styles from "./home.css";

export function HomeScene() {
  const pageContent = `
    <div id="${styles["container"]}">
        <ul class="${styles["wrapper"]}">
        <div class="${styles["sun"]}">
          <div class="${styles["star"]}"></div>
        </div>
        <div class="${styles["mercury"]}">
          <div class="${styles["planet"]}">
            <div class="${styles["shadow"]}"></div>
          </div>
        </div>
        <div class="${styles["venus"]}">
          <div class="${styles["planet"]}">
            <div class="${styles["shadow"]}"></div>
          </div>
        </div>
        <div class="${styles["earth"]}">
          <div class="${styles["planet"]}"><div class="${styles["shadow"]}"></div></div>
        </div>
        <div class="${styles["mars"]}">
          <div class="${styles["planet"]}"><div class="${styles["shadow"]}"></div></div>
        </div>
        <div class="${styles["jupiter"]}">
          <div class="${styles["planet"]}"><div class="${styles["shadow"]}"></div></div>
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
