import starship from "../../../assets/imagenes/moduloHTML/ovni.png";
import styles from "./create-modules.css";

export function CreateModuloScene() {
    const pageContent = `
        <div class=${styles.contenido}>
            <div class="${styles["progreso"]}">
                <div class="${styles["loader"]}">
                    <h2>Nave Espacial en construcciòn </h2>
                </div>
            </div>
            <div class=${styles.starship}>
                <img src="${starship}">
            </div>
            <form id="create-module-form">
                
            </form>
        </div>
    `;
    const logic = () => {
        /* Boton Blanco en el sideBar */
        const $whiteButton = document.getElementById("/dashboard/html");
        $whiteButton.style = "background-color:white";

        /*Crear modulo*/
        // const modulo = {
        //     language_id: 1,
        //     name: titleValue,
        //     description: descriptionValue,
        //     content: cintentValue
        // }

    };
    return {
        pageContent,
        logic,
    };
}