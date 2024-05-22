import styles from './forum.css';

export function ForumScene(){
    const pageContent = `
    <h2>Forum</h2>
  `;

  const logic = () => {
    /* Boton Blanco en el sideBar */
    const $whiteButton = document.getElementById("/dashboard/forum");
    $whiteButton.style="background-color:white";
  };

  return {
    pageContent,
    logic
  }
}