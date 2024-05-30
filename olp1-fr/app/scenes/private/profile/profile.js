import img_html from "../../../assets/imagenes/Home/planet1.png";
import img_css from "../../../assets/imagenes/Home/planet2.png";
import img_javascript from "../../../assets/imagenes/Home/planet3.png";
import styles from "./profile.css";


export function ProfileScene() {
  const pageContent = `
    <div class="${styles.container}">
      <div class="${styles.profile}">
        <img class="${styles["profile-picture"]}" src="https://randomuser.me/api/portraits/men/75.jpg">
        <table class="${styles.tableProfile}">
         <tr id="mostrar">
          <td>Name:</td>
          <td id="usernameprofile" class="tagUpdateName"></td>
          <td style="text-align: center;" class="${styles.expand}">></td>
         </tr>

         <tr id="mostrar" text-align="center">
          <td>Email:</td>
          <td id ="useremail" class="tagUpdateEmail"></td>
          <td style="text-align: center;" class="${styles.expand}">></td>
         </tr>

         <tr id="mostrar">
          <td>Rol:</td>
          <td id="tagUpdateRol">Frontend</td>
          <td style="text-align: center;" class="${styles.expand}">></td>
         </tr>
        </table>

        <button type="button" class="${styles.cambiarPassword}">Cambiar contraseña</button>
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
      <form class="${styles.form}" id="form1">
        <div>
          <label for="name">Nuevo Nombre </label>
          <input type="text" id="name" name="name">
        </div>
        <div>
          <button type="submit" id="cambiar" name="cambiar">Cambiar</button>
          <button type="button" id="cerrarModal">Cerrar</button>
        </div> 
      </form>
    </dialog>


    <dialog id="modal" class="${styles.modal}">
      <form class="${styles.form}" id="form2">
        <div>
          <label for="name">Nuevo Email </label>
          <input type="text" id="email" name="email">
        </div>
        <div>
          <button type="submit" id="cambiar" name="cambiar">Cambiar</button>
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
          <button id="cambiarRol">Cambiar</button>
          <button id="cerrarModal">Cerrar</button>
        </div>
      </form>
      
    </dialog>
  `;


  const logic = async () => {
    const welcomeUser = localStorage.getItem("welcomeUser");
    const $valuesModal = Object.values(document.querySelectorAll('#modal'));
    const $valuesMostrar = Object.values(document.querySelectorAll('#mostrar'));
    const $valuesCerrar = Object.values(document.querySelectorAll('#cerrarModal'));
    const $form1 = document.getElementById("form1");
    const $form2 = document.getElementById("form2");
    const $buttonCambiarRol = document.getElementById("cambiarRol");
    const $updateTextRol = document.getElementById("tagUpdateRol");
   

    $form1.addEventListener('submit', async (e) => {
      e.preventDefault();
      const $name = document.getElementById("name").value;
      console.log(welcomeUser);
      if($name){
          const updateUserName = {
            key: "name",
            newValue: $name
          } 
          try{
            await fetch(`http://localhost:4000/api/users/${welcomeUser}`, {
                method: 'PATCH',
                body: JSON.stringify(updateUserName),
                headers: {
                    'Content-Type':'application/json'
                }
            })
            alert('Los cambios se hicieron correctamente');
            
          } catch (error){
              alert('Ha ocurrido un error al tratar de cambiar tu nombre usuario en el servidor');
              console.error('Error al tratar de actualizar el nombre de usuario:', error);
          }
      } else {
        alert('Tienes que rellenar el campo');
      }
    })

    $form2.addEventListener('submit', async (e) => {
      e.preventDefault();
      const $email = document.getElementById('email').value;
      if($email){
        const updateUserEmail = {
          key: "email",
          newValue: $email
        }
        
        try{
          await fetch(`http://localhost:4000/api/users/${welcomeUser}`, {
              method: 'PATCH',
              body: JSON.stringify(updateUserEmail),
              headers: {
                  'Content-Type':'application/json'
              }
          })
          alert('Los cambios se hicieron correctamente');
          
        } catch (error){
          alert('Ha ocurrido un error al tratar de cambiar tu email en el servidor');
          console.error('Error al tratar de actualizar el email del usuario:', error);
        }
      } else {
        alert('Tienes que rellenar el campo');
      }
    });  
      
    $buttonCambiarRol.addEventListener('click', (e) => {
      e.preventDefault();
      if(document.getElementById('radio1').checked){
        $updateTextRol.innerHTML = 'Frontend';
      } else if(document.getElementById('radio2').checked){
        $updateTextRol.innerHTML = 'Backend';
      }
    })

    for (let i = 0; i < $valuesModal.length; i++) {
      $valuesMostrar[i].addEventListener('click', (e) =>{
        e.preventDefault();
        $valuesModal[i].showModal()
      })
      $valuesCerrar[i].addEventListener('click', (e) => {
        e.preventDefault();
        $valuesModal[i].close()
      })
    }

    
    /*Traer el nombre del usuario de la base de datos */
    const response = await fetch(
      `http://localhost:4000/api/users/${welcomeUser}`
    );
    if (!response.ok) {
      const errorMessage = await response.text();
      throw new Error(`Error ${response.status}: ${errorMessage}`);
    }
    const data = await response.json();
    const user = document.getElementById("usernameprofile");
    const emailUser = document.getElementById("useremail");

    user.textContent = `${data.name.charAt(0).toUpperCase()}${data.name
      .substr(1)
      .toLowerCase()}`;
    
    emailUser.textContent = `${data.email}`;
  
  };
  
  return {
    pageContent,
    logic
  };
}