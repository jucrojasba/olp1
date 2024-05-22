import styles from "./javascript.css"
export function JavascriptScene(){
    const pageContent = `
        <h2>Javascript Language</h2>
    `;
    const logic = () => {
        /* Boton Blanco en el sideBar */
        const $whiteButton = document.getElementById("/dashboard/javascript");
        $whiteButton.style="background-color:white";
    };
    return {
        pageContent,
        logic,
    };
}