import { navigateTo } from "../../../Router";
import styles from "../challenges/display_challenge.css";
import asteroid from "../../../assets/imagenes/challenges/asteroide1.png"
import planetLife from "../../../assets/imagenes/moduloHTML/planetaHabitable.png";

export function ChallengeDisplayScene() {
    let pageContent = `
    <div class=${styles.title}>
        <h2>HTML</h2>
    </div>
    <div class=${styles.container} >
        <div class="${styles.forms_container}">
            <h3>Reto HTML: forms</h3>
            <div>
                <form id="challenge_forms" class="${styles.challenge_forms}">
                    <div>
                        <label>Para que sirve el siguiente elemento HTML: <span>&lt;textarea&gt</span>;</label>
                        <select name="question_one" class="${styles.question}" id="question_one">
                            <option value="option0" selected disabled >Choose an option</option>
                            <option value="opcion1">Añade un cajon de texto</option>
                            <option value="opcion2">Añade un cajon de texto multi-linea</option>
                            <option value="opcion3">Añade un formulario de seleccion multiple</option>
                        </select>
                    </div>
                    <div>
                        <label>Para que sirve el siguiente elemento HTML: <span>&lt;button&gt</span>;</label>
                        <select name="question_one" class="${styles.question}" id="question_two">
                            <option value="option0" selected disabled >Choose an option</option>
                            <option value="opcion1">Crea un boton</option>
                            <option value="opcion2">Añade un cajon de texto multi-linea</option>
                            <option value="opcion3">Crea un campoque recibe solo numeros</option>
                        </select>
                    </div>
                    <div>
                        <label>Para que sirve el siguiente elemento HTML: <span>&lt;label&gt</span>;</label>
                        <select name="question_one" class="${styles.question}" id="question_three">
                            <option value="option0" selected disabled >Choose an option</option>
                            <option value="opcion1">Se usa como etiqueta descriptiva</option>
                            <option value="opcion2">Crea checkbox </option>
                            <option value="opcion3">Añade un formulario de seleccion multiple</option>
                        </select>
                    </div>
                </form>
            </div>
        </div>
        <div>
            <img src="${asteroid}" id="${styles["asteroid"]}">
            <img src="${planetLife}" id=${styles["planetLife"]}>
        </div>
    </div>
        `;

    let logic = async () => {
        /* Boton Blanco en el sideBar */
        const $whiteButton = document.getElementById("/dashboard/challenges");
        $whiteButton.style = "background-color:white";

        
    }
    return {
        pageContent,
        logic,
    };
}