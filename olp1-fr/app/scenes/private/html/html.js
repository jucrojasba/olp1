import styles from "./html.css";

export function HtmlScene() {
  let pageContent = `
    
    `;
  let logic = async () => {
    /* Boton Blanco en el sideBar */
    const $whiteButton = document.getElementById("/dashboard/html");
    $whiteButton.style = "background-color:white";
  };
  return {
    pageContent,
    logic,
  };
}
