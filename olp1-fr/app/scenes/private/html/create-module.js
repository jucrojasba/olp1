import spacialBase from "../../../assets/imagenes/moduloHTML/ovni.png";
import styles from "./create-modules.css";
import spaceship1 from "../../../assets/imagenes/moduloHTML/spaceship2.png";
import spaceship2 from "../../../assets/imagenes/moduloHTML/spaceship1.png";
import logohtml from "../../../assets/imagenes/Home/w3_html5-icon.svg";
import { navigateTo } from "../../../Router";

export function CreateModuloScene() {
    const pageContent = `
        <div class=${styles.contenido}>
            <div class=${styles.animacion}>
                <div class=${styles.title}>
                    <img src="${spaceship1}">
                    <h3>Aquí puedes crear un nuevo módulo</h3>
                </div>
                <div class=${styles.starship}>
                    <img src="${spacialBase}">
                    <a href="/dashboard/html">
                        <img src="${logohtml}">HTML
                    </a>
                </div>
            </div>
            <form id="create-module-form" class=${styles["create-module-form"]}>
                <div class=${styles["container-input"]}>
                    <label for="name">Nombre de la nave espacial:</label>
                    <input type="text" name="name" id="name" placeholder="Ingresa un nombre de modulo" required>
                </div> 
                <div class=${styles["container-input"]}>
                    <label for="description">Misión:</label>
                    <textarea name="description" id="description" placeholder="Ingresa una breve descripción del contenido del modulo" required cols="45" rows="4"></textarea>
                </div>
                <div class=${styles["container-input"]}>
                    <label for="content">Tripulación:</label>
                    <textarea name="content" id="content" placeholder="Ingresa el contenido del modulo" required cols="45" rows="13"></textarea>
                </div>
                <div class=${styles["actionButton"]}>
                    <div class="${styles["progreso"]}">
                        <div class="${styles["loader"]}">
                            <h4>Nave Espacial en construcciòn </h4>
                        </div>
                    </div>
                    <button type="submit" class="${styles["button-publicar"]}">Publicar</button>
                </div>
            </form>
        </div>
        <img src="${spaceship2}" id="${styles.lastship}">
    `;
    const logic = () => {
        /* Boton Blanco en el sideBar */
        const $whiteButton = document.getElementById("/dashboard/html");
        $whiteButton.style = "background-color:white";
        
        /*Crear modulo*/
        // Listener para enviar info a base de datos
        document.getElementById('create-module-form').addEventListener('submit', async(e)=>{
            e.preventDefault();
            const titleValue = document.getElementById('name').value;
            const descriptionValue = document.getElementById('description').value;
            const contentValue = document.getElementById('content').value;

            //Obtener el ultimo ID
            const responseVerModulos = await fetch("http://localhost:4000/api/modules/1");
            if (!responseVerModulos.ok) {
            const errorMessage = await responseVerModulos.text();
            throw new Error(`Error ${responseVerModulos.status}: ${errorMessage}`);
            }
            const modulosdb = await responseVerModulos.json();
            const ids = modulosdb.reduce(function(maxId, diccionario) {
                return Math.max(maxId, diccionario.id);
            }, 0);
            let id = parseFloat(ids)+1;
            //Crear la informacion que se enviara a base de datos
            const modulo = {
                id,
                language_id: 2,
                name: titleValue,
                description: descriptionValue,
                content: contentValue
            }
            if (confirm("¿Estás seguro de que deseas publicar el modulo?")) {
                // Aquí va la lógica para enviar el contenido a la base de datos
                try {
                    const response = await fetch('http://localhost:4000/api/modules/1', {
                        method: 'POST',
                        body: JSON.stringify(modulo),
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': `Bearer ${localStorage.getItem('token')}`
                        }
                    });
                    console.log(response);
                    alert('Modulo publicado con éxito');
                    document.querySelector('#create-module-form').reset(); // Resetea el formulario
                    navigateTo('/dashboard/html');
                } catch (error) {
                    alert('Ha ocurrido un error al publicar el reto. Por favor, inténtalo de nuevo más tarde.');
                    console.error('Error al publicar el reto:', error);
                }
            }
        });

        

    };
    return {
        pageContent,
        logic,
    };
}