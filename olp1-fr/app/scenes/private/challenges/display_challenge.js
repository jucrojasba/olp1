import { navigateTo } from "../../../Router";
import styles from "../challenges/display_challenge.css";
import asteroid from "../../../assets/imagenes/challenges/asteroide1.png"
import planetLife from "../../../assets/imagenes/moduloHTML/planetaHabitable.png";

export function ChallengeDisplayScene() {
    let pageContent = `
    <div class="${styles.title}">
        <h2>HTML</h2>
    </div>
    <div class="${styles.container}">
        <div id="modal" class="${styles.modal}">
            <div class="${styles.modalContent}">
                <h2>Bienvenido</h2>
                <p>Presiona el botón para comenzar la animación</p>
                <button id="startButton">Start</button>
            </div>
        </div>
        <div class="${styles.forms_container}">
            <h3>Reto HTML: forms</h3>
            <div>
                <form id="challenge_forms" class="${styles.challenge_forms}">
                    <div>
                        <label>Para que sirve el siguiente elemento HTML: <span>&lt;textarea&gt</span>;</label>
                        <select name="question_one" class="${styles.question}" id="question_one">
                            <option value="option0" selected disabled>Choose an option</option>
                            <option value="opcion1">Añade un cajon de texto</option>
                            <option value="correctOption">Añade un cajon de texto multi-linea</option>
                            <option value="opcion3">Añade un formulario de seleccion multiple</option>
                        </select>
                    </div>
                    <div>
                        <label>Para que sirve el siguiente elemento HTML: <span>&lt;button&gt</span>;</label>
                        <select name="question_two" class="${styles.question}" id="question_two">
                            <option value="option0" selected disabled>Choose an option</option>
                            <option value="correctOption">Crea un boton</option>
                            <option value="opcion2">Añade un cajon de texto multi-linea</option>
                            <option value="opcion3">Crea un campo que recibe solo numeros</option>
                        </select>
                    </div>
                    <div>
                        <label>Para que sirve el siguiente elemento HTML: <span>&lt;label&gt</span>;</label>
                        <select name="question_three" class="${styles.question}" id="question_three">
                            <option value="option0" selected disabled>Choose an option</option>
                            <option value="correctOption">Se usa como etiqueta descriptiva</option>
                            <option value="opcion2">Crea checkbox</option>
                            <option value="opcion3">Añade un formulario de seleccion multiple</option>
                        </select>
                    </div>
                    <div class="${styles.challengeFinish}">
                        <button type="button" id="challengeFinish">Enviar</button>
                    </div>
                </form>
            </div>
        </div>
        <div>
            <div class="${styles.titleTime}"
                <h3>Tiempo hasta que se destruya el planeta:</h3>
            </div>
            <img src="${asteroid}" id="${styles["asteroid"]}">
            <img src="${planetLife}" id="${styles["planetLife"]}">
        </div>
    </div>
    `;

    let logic = async () => {
        // Botón Blanco en el sideBar
        const $whiteButton = document.getElementById("/dashboard/challenges");
        $whiteButton.style.backgroundColor = "white";

        const $planetLife = document.getElementById(styles["planetLife"]);
        const $asteroid = document.getElementById(styles["asteroid"]);
        const questionOne = document.getElementById("question_one");
        const questionTwo = document.getElementById("question_two");
        const questionThree = document.getElementById("question_three");

        // Evento de inicio de reto
        const startButton = confirm('Dale Start para empezar el reto.\na partir del momento que des Start contaras con 30 segundos para completar el reto');
        if (startButton == true) {
            const modal = document.getElementById('modal');
            modal.style.display = 'none';
            $asteroid.style.display = 'block';
            $asteroid.classList.add(`${styles.asteroidAnimation}`);

            // Usar setTimeout para simular animationend
            const animationTimeout = setTimeout(() => {
                alert('El planeta fue destruido');
                navigateTo('/dashboard/challenges');
            }, 30000); // 30000ms es la duración de la animación

            document.addEventListener("click", (event) => {
                if (event.target && event.target.id === "challengeFinish") {
                    if (questionOne.value === "correctOption" && questionTwo.value === "correctOption" && questionThree.value === "correctOption") {
                        clearTimeout(animationTimeout); // Cancelar la promesa
                        alert("Felicidades salvaste el planeta");
                        navigateTo('/dashboard/challenges');
                    } else if(questionOne.value !== "correctOption" || questionTwo.value !== "correctOption" || questionThree.value !== "correctOption"){
                        clearTimeout(animationTimeout); // Cancelar la promesa
                        alert('La misión ha terminado');
                        navigateTo('/dashboard/challenges');
                    }
                }
            });
        }
    };

    return {
        pageContent,
        logic,
    };
}