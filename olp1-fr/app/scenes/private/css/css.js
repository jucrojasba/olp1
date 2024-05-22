import styles from "./css.css"
export function CssScene(){
    const pageContent = `
        <h2>CSS Language</h2>
    `;
    const logic = () => {
        /* Boton Blanco en el sideBar */
        const $whiteButton = document.getElementById("/dashboard/css");
        $whiteButton.style="background-color:white";
    };
    return {
        pageContent,
        logic,
    };
}