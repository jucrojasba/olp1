import img_html from "../../../assets/imagenes/Home/planet1.png";
import img_css from "../../../assets/imagenes/Home/planet2.png";
import img_javascript from "../../../assets/imagenes/Home/planet3.png";
import styles from "./profile.css";


export function ProfileScene() {
  const pageContent = `
    <div class="${styles.container}">
      <div class="${styles.profile}">
        <img class="${styles["profile-picture"]}" src="https://randomuser.me/api/portraits/men/75.jpg">
        <br><br><br><br>
        <table class="${styles.tableProfile}">
         <tr id="mostrar">
          <td>Name:</td>
          <td id="usernameprofile" class="tagUpdate"></td>
          <td class="${styles.expand}"></td>
         </tr>

         <tr id="mostrar">
          <td>Email:</td>
          <td class="tagUpdate">@username.com</td>
          <td class="${styles.expand}">></td>
         </tr>
         <tr id="mostrar">
          <td>Rol:</td>
          <td class="tagUpdate">Frontend</td>
          <td class="${styles.expand}">></td>
         </tr>
        </table>
      </div>
      <div class="${styles.challenges}">
        <div>
         <div class="${styles.planetAndInformation}">
          <a href="/dashboard/javascript"><img src="${img_javascript}" class="${styles.planets}"/></a>
          <div>
            <h4 class="${styles.titles}">JAVASCRIPT</h4>
            <br><br>
            <p>Modulo: (algo)</p>
            <p>Tema: (algo)</p>
          </div>
         </div>
         <div class="${styles.progress}">
           <div class="${styles.complete1}">
            <span class="${styles.progressSpace}">Progreso...</span><span class="${styles.percentageSpace}">50%</span>
           </div>
         </div>
        </div>

        <div>
          <div class="${styles.planetAndInformation}">
            <a href="/dashboard/css"><img src="${img_css}" class="${styles.planets}"/></a>
            <div>
              <h4 class="${styles.titles}">CSS</h4>
              <br><br>
              <p>Modulo: (algo)</p>
              <p>Tema: (algo)</p>
            </div>
          </div>
          <div class="${styles.progress}">
            <div class="${styles.complete2}">
              <span class="${styles.progressSpace}">Progreso...</span><span class="${styles.percentageSpace}">30%</span>
            </div>
          </div>
        </div>

        <div>
          <div class="${styles.planetAndInformation}">
            <a href="/dashboard/html"><img src="${img_html}" class="${styles.planets}"/></a>
            <div>
              <h4 class="${styles.titles}">HTML</h4>
              <br><br>
              <p>Modulo: (algo)</p>
              <p>Tema: (algo)</p>
            </div>
          </div>
          <div class="${styles.progress}">
            <div class="${styles.complete3}">
              <span class="${styles.progressSpace}">Progreso...</span><span class="${styles.percentageSpace}">90%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <dialog id="modal" class="${styles.modal}">
      <form class="${styles.form}">
        <div>
          <label for="name">Nuevo Nombre </label>
          <input type="text" id="name">
        </div>
        <div>
          <button id="cambiar">Cambiar</button>
          <button id="cerrarModal">Cerrar</button>
        </div> 
      </form>
    </dialog>


    <dialog id="modal" class="${styles.modal}">
      <form class="${styles.form}">
        <div>
          <label for="name">Nuevo Email </label>
          <input type="text" id="name">
        </div>
        <div>
          <button id="cambiar">Cambiar</button>
          <button id="cerrarModal">Cerrar</button>
        </div>
      </form>
    </dialog>

    <dialog id="modal" class="${styles.modal}">
      <form class="${styles.form}">
        <div>
          <label for="name">Cambiar Rol </label><br>
          <input type="radio" name="rol" id="radio1"><span>Frontend</span>
          <input type="radio" name="rol" id="radio2"><span>Backend</span>
        </div>
        <div>
          <button id="cambiar">Cambiar</button>
          <button id="cerrarModal">Cerrar</button>
        </div>
      </form>
      
    </dialog>
  `;


  const logic = async () => {
    const $valuesModal = Object.values(document.querySelectorAll('#modal'));
    const $valuesMostrar = Object.values(document.querySelectorAll('#mostrar'));
    const $valuesCerrar = Object.values(document.querySelectorAll('#cerrarModal'));
    const $valuesChange = Object.values(document.querySelectorAll('#cambiar'));
    const $valuesInput = Object.values(document.querySelectorAll('#name'));
    const $valuesUpdate = Object.values(document.querySelectorAll('.tagUpdate'));
     
    
      

    for (let i = 0; i < $valuesModal.length; i++) {
      $valuesMostrar[i].addEventListener('click', () =>
        $valuesModal[i].showModal()
      )
      $valuesCerrar[i].addEventListener('click', () => {
        $valuesModal[i].close()
      })
      $valuesChange[i].addEventListener('click', () => {
        if (i < 2) {
          if ($valuesInput[i].value === '') {
            alert('Tienes que rellenar el campo')
          } else {
            if (i == 0) {
              $valuesUpdate[i].innerHTML = $valuesInput[i].value
            } else {
              $valuesUpdate[i].innerHTML = $valuesInput[i].value
            }
          }
            
        } else {
          if (document.getElementById('radio1').checked) {
            $valuesUpdate[i].innerHTML = 'Frontend';
          } else if (document.getElementById('radio2').checked) {
            $valuesUpdate[i].innerHTML = 'Backend';
          }
        }
          
      })
    }
    
    /*Traer el nombre del usuario de la base de datos */
    const welcomeUser = localStorage.getItem("welcomeUser");
    const response = await fetch(
      `http://localhost:4000/api/users/${welcomeUser}`
    );
    if (!response.ok) {
      const errorMessage = await response.text();
      throw new Error(`Error ${response.status}: ${errorMessage}`);
    }
    const data = await response.json();
    const user = document.getElementById("usernameprofile");
    console.log(user)
    user.textContent = `${data.name.charAt(0).toUpperCase()}${data.name
      .substr(1)
      .toLowerCase()}`;
  
  };
  
  return {
    pageContent,
    logic
  };
}
