import styles from "./challenges.css";
export function ChallengesScene() {
  const pageContent = `
        <h2>Challenges</h2>
    `;
  const logic = () => {
    /* Boton Blanco en el sideBar */
    const $whiteButton = document.getElementById("/dashboard/challenges");
    $whiteButton.style="background-color:white";
  };
  return {
    pageContent,
    logic,
  };
}
