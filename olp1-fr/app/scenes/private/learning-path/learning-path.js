import styles from "./learning-path.css";
export function LearningPathScene() {
  const pageContent = `
    <h2>Learning Path</h2>
    `;

  const logic = () => {
    /* Boton Blanco en el sideBar */
    const $whiteButton = document.getElementById("/dashboard/learning-path");
    $whiteButton.style="background-color:white";
  };
  return {
    pageContent,
    logic,
  };
}
