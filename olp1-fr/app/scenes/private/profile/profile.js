import styles from "./profile.css";
import img_javascript from "../../../assets/imagenes/Home/planet3.png";
import img_css from "../../../assets/imagenes/Home/planet2.png";
import img_html from "../../../assets/imagenes/Home/planet1.png";


export function ProfileScene() {
  const pageContent = `
    <div class="${styles.container}">
      <div class="${styles.profile}">
        <img class="${styles["profile-picture"]}" src="https://randomuser.me/api/portraits/men/75.jpg">
        <br><br><br><br>
        <table>
         <tr>
          <td>Name:</td>
          <td>Nicolas Picon</td>
          <td class="${styles.expand}">></td>
         </tr>
         <tr>
          <td>Username:</td>
          <td>@username</td>
          <td class="${styles.expand}">></td>
         </tr>
         <tr>
          <td>Email:</td>
          <td>@username.com</td>
          <td class="${styles.expand}">></td>
         </tr>
         <tr>
          <td>Rol:</td>
          <td>Frontend</td>
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
    
  `;


  const logic = () => {};
  return {
    pageContent,
    logic,
  };
}
