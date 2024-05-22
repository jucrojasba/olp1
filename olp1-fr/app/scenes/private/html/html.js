import styles from "./html.css"
export function HtmlScene(){
    const pageContent = `
        <h2>HTML Language</h2>
    `;
    const logic = () => {
        /* Boton Blanco en el sideBar */
        const $whiteButton = document.getElementById("/dashboard/html");
        $whiteButton.style="background-color:white";
    };
    return {
        pageContent,
        logic,
    };
}