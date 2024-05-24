import styles from "./html.css";

export function HtmlScene() {
  let pageContent = `
    <h2><span>H</span>yper<span>T</span>ext <span>M</span>arkup <span>L</span>anguage </h2>
    <button id="create-module">Crear</button>
    <section class="${styles.container}" id="modulos"></section>
    `;
  let logic = async () => {
    /* Boton Blanco en el sideBar */
    const $whiteButton = document.getElementById("/dashboard/html");
    $whiteButton.style = "background-color:white";
    /* Mostrar Modulos */
    const $modulos = document.getElementById("modulos");
    const responseVerModulos = await fetch(
      "http://localhost:4000/api/modules/1"
    );
    if (!response.ok) {
      const errorMessage = await response.text();
      throw new Error(`Error ${response.status}: ${errorMessage}`);
    }
    const modulosdb = await response.json();
  };
  return {
    pageContent,
    logic,
  };
}
