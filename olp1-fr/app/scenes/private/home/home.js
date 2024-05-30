import logojavascript from "../../../assets/imagenes/Home/javascript-vertical.svg";
import planet1 from "../../../assets/imagenes/Home/planet1.png";
import planet2 from "../../../assets/imagenes/Home/planet2.png";
import planet3 from "../../../assets/imagenes/Home/planet3.png";
import sun from "../../../assets/imagenes/Home/sun.png";
import logocss from "../../../assets/imagenes/Home/w3_css-icon.svg";
import logohtml from "../../../assets/imagenes/Home/w3_html5-icon.svg";
import styles from "./home.css";

export function HomeScene() {
  const pageContent = `
    <div class="${styles["container"]}">
    <!-- Lista desordenada de planetas del sistema solar -->
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
              <img src="${planet2}">
            <div class="${styles["shadow"]}">
              <img src="${logocss}">
            </div>
          </div>
        </div>
        <div class="${styles["javascript"]}">
          <div class="${styles["planet"]}">
              <img src="${planet3}">
            <div class="${styles["shadow"]}">
              <img src="${logojavascript}">
            </div>
          </div>
        </div>
      </ul>
    </div>
    <!-- Ventanas Modales con informacion de cada planeta lenguaje -->
    <!-- Ventan Modal con informacion del lenguaje HTML -->
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
    <!-- Ventan Modal con informacion del lenguaje CSS -->
    <div class="${styles["modal"]}" id="modalCss" style="display:none;">
      <div class="${styles["imageContainer"]}">
        <img src="${planet2}">
      </div>
      <div class="${styles["info"]}">
        <h2>CSS</h2>
        <p>Modulo: <span>test module</span></p>
        <div class="${styles["progreso"]}">
          <div class="${styles["loader"]}">
            <p>Progreso</p>
          </div>
        </div>
        <div class="${styles["botones"]}">
          <a href="/dashboard/css">
            <button id="lenguaje" type="button">
              <img src="${logocss}">CSS
            </button>
          </a>
          <button id="cerrarCss" type="button">Cerrar</button>
        </div>
      </div>
    </div>
    <!-- Ventan Modal con informacion del lenguaje Javascript -->
    <div class="${styles["modal"]}" id="modalJavascript" style="display:none;">
      <div class="${styles["imageContainer"]}">
        <img src="${planet3}" id="${styles["exceptionJavascript"]}">
      </div>
      <div class="${styles["info"]}">
        <h2>JAVASCRIPT</h2>
        <p>Modulo: <span>test module</span></p>
        <div class="${styles["progreso"]}">
          <div class="${styles["loader"]}">
            <p>Progreso</p>
          </div>
        </div>
        <div class="${styles["botones"]}">
          <a href="/dashboard/javascript">
            <button id="lenguaje" type="button">
              <img src="${logojavascript}">JAVASCRIPT
            </button>
          </a>
          <button id="cerrarJavascript" type="button">Cerrar</button>
        </div>
      </div>
    </div>
    <div id="${styles["saludo"]}">
      <h1>Bienvenido <span id="userNameWelcome"></span></h1>
      <p>¿Preparado para vivir esta aventura?</p>
    </div>
  `;

  const logic = async () => {
    /*Traer el nombre del usuario de la base de datos */
    const welcomeUser = localStorage.getItem("welcomeUser");
    const response = await fetch(
      `http://localhost:4000/api/users/${welcomeUser}`
    );
    if (!response.ok) {
      const errorMessage = await response.text();
      throw new Error(`Error ${response.status}: ${errorMessage}`);
    }
    const data = await response.json();
    const $user = document.getElementById("userNameWelcome");
    /*Insertar el nombre de usuario de la base de datos a la etiqueta con id = userNameWelcome*/
    $user.textContent = `${data.name.charAt(0).toUpperCase()}${data.name
      .substr(1)
      .toLowerCase()}`;

    /* Boton Blanco en el sideBar Home*/
    const $whiteButton = document.getElementById("/dashboard");
    $whiteButton.style = "background-color:white";

    /* Ventana Modal HTML*/
    const $htmlPlanet = document.querySelector(`.${styles["htmlPlanet"]}`);
    const $modalHtml = document.getElementById("modalHtml");
    const $cerrarHtml = document.getElementById("cerrarHtml");
    /*Abrir ventana modal al hacer click sobre el planeta HTML*/
    $htmlPlanet.addEventListener("click", () => {
      $modalHtml.style.display = "flex";
    });
    /*Cerrar ventana modal al hacer click sobre el boton cerrar*/
    $cerrarHtml.addEventListener("click", () => {
      $modalHtml.style.display = "none";
    });
    /*Cerrar ventana modal al hacer click fuera de la ventana modal*/
    document.addEventListener("click", (event) => {
      if (
        $modalHtml.style.display === "flex" &&
        !$modalHtml.contains(event.target) &&
        !$htmlPlanet.contains(event.target)
      ) {
        $modalHtml.style.display = "none";
      }
    });

    /* Ventana Modal CSS*/
    const $cssPlanet = document.querySelector(`.${styles["css"]}`);
    const $modalCss = document.getElementById("modalCss");
    const $cerrarCss = document.getElementById("cerrarCss");
    /*Abrir ventana modal al hacer click sobre el planeta CSS*/
    $cssPlanet.addEventListener("click", () => {
      $modalCss.style.display = "flex";
    });
    /*Cerrar ventana modal al hacer click sobre el boton cerrar*/
    $cerrarCss.addEventListener("click", () => {
      $modalCss.style.display = "none";
    });
    /*Cerrar ventana modal al hacer click fuera de la ventana modal*/
    document.addEventListener("click", (event) => {
      if (
        $modalCss.style.display === "flex" &&
        !$modalCss.contains(event.target) &&
        !$cssPlanet.contains(event.target)
      ) {
        $modalCss.style.display = "none";
      }
    });
    /* Ventana Modal JAVASCRIPT*/
    const $javascriptPlanet = document.querySelector(
      `.${styles["javascript"]}`
    );
    const $modalJavascript = document.getElementById("modalJavascript");
    const $cerrarJavascript = document.getElementById("cerrarJavascript");
    /*Abrir ventana modal al hacer click sobre el planeta Javascript*/
    $javascriptPlanet.addEventListener("click", () => {
      $modalJavascript.style.display = "flex";
    });
    /*Cerrar ventana modal al hacer click sobre el boton cerrar*/
    $cerrarJavascript.addEventListener("click", () => {
      $modalJavascript.style.display = "none";
    });
    /*Cerrar ventana modal al hacer click fuera de la ventana modal*/
    document.addEventListener("click", (event) => {
      if (
        $modalJavascript.style.display === "flex" &&
        !$modalJavascript.contains(event.target) &&
        !$javascriptPlanet.contains(event.target)
      ) {
        $modalJavascript.style.display = "none";
      }
    });
  };

  return {
    pageContent,
    logic,
  };
}
