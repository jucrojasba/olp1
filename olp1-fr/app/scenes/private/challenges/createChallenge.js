import { navigateTo } from "../../../Router";
import asteroid1 from "../../../assets/imagenes/challenges/asteroide1.png";
import asteroid2 from "../../../assets/imagenes/challenges/asteroide2.png";
import styles from '../challenges/createChallenge.css';
import centralPlanet from '../../../assets/imagenes/moduloHTML/planetaHabitable.png'

export function CreateChallengesScene() {
    const pageContent = `
        <div class=${styles.contenido}>
            <div class=${styles.animacion}>
                <div class=${styles.title}>
                    <img src="${asteroid1}">
                    <h3>Aquí puedes crear un nuevo reto</h3>
                </div>
                <div class=${styles.starship}>
                    <img src="${centralPlanet}">
                    <a href="/dashboard/challenges">
                        <img src="${asteroid2}">Challenges
                    </a>
                </div>
            </div>
            <form id="create-challenges-form" class=${styles["create-challenges-form"]}>
                <div class=${styles["container-input"]}>
                    <label for="name">Nombre del nuevo Asteroide:</label>
                    <input type="text" name="name" id="name" placeholder="Ingresa un nombre del reto" required>
                </div> 
                <div class=${styles["container-input"]}>
                    <label for="points_to_give">Puntos de destruccion:</label>
                    <textarea name="points_to_give" id="points_to_give" placeholder="Ingresa la cantidad de puntos que se gana por este reto" required cols="45" rows="4"></textarea>
                </div>
                <div class=${styles["container-input"]}>
                    <label for="content">Mision:</label>
                    <textarea name="content" id="content" placeholder="Ingresa las instrucciones del reto" required cols="45" rows="13"></textarea>
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
        <img src="${asteroid2}" id="${styles.lastship}">
    `;
    const logic = () => {
        /* Boton Blanco en el sideBar */
        const $whiteButton = document.getElementById("/dashboard/challenges");
        $whiteButton.style = "background-color:white";
        
        /*Crear REto*/
        // Listener para enviar info a base de datos
        document.getElementById('create-challenges-form').addEventListener('submit', async(e)=>{
            e.preventDefault();
            const titleValue = document.getElementById('name').value;
            const pointsValue = document.getElementById('points_to_give').value;
            const contentValue = document.getElementById('content').value;

            //Obtener el ultimo ID
            const responseVerRetos = await fetch("http://localhost:4000/api/challenges");
            if (!responseVerRetos.ok) {
            const errorMessage = await responseVerRetos.text();
            throw new Error(`Error ${responseVerRetos.status}: ${errorMessage}`);
            }
            const retosdb = await responseVerRetos.json();
            const ids = retosdb.reduce(function(maxId, diccionario) {
                return Math.max(maxId, diccionario.id);
            }, 0);
            let id = parseFloat(ids)+1;
            //Crear la informacion que se enviara a base de datos
            const reto = {
                id,
                name: titleValue,
                points_to_give:pointsValue,
                content: contentValue
            }
            if (confirm("¿Estás seguro de que deseas publicar el reto?")) {
                // Aquí va la lógica para enviar el contenido a la base de datos
                try {
                    const response = await fetch('http://localhost:4000/api/challenges', {
                        method: 'POST',
                        body: JSON.stringify(reto),
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': `Bearer ${localStorage.getItem('token')}`
                        }
                    });
                    console.log(response);
                    alert('Reto publicado con éxito');
                    document.querySelector('#create-challenges-form').reset(); // Resetea el formulario
                    navigateTo('/dashboard/challenges');
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