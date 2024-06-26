import { navigateTo } from "../../../Router";
import styles from "./forum.css";
import crown_icon from "../../../assets/logos/king.png";
import medal_icon from "../../../assets/logos/medals.png";

export function ForumScene() {
  const params = new URLSearchParams(window.location.search);
  let pageContent = `
    <h1 class="${styles["title-forum"]}">FORUM</h1>
    <div class="${styles.flexWrapper}">

      <div id="posts" class="${styles.posts}"></div>      
    </div>
    `;

  let logic = async () => {
    /* Boton Blanco en el sideBar */
    const $whiteButton = document.getElementById("/dashboard/forum");
    $whiteButton.style = "background-color:white";

    const respUsers = await fetch("http://localhost:4000/api/users");
    const respPosts = await fetch("https://jsonplaceholder.typicode.com/posts");
    const respImages = await fetch("https://jsonplaceholder.typicode.com/photos");
    const users = await respUsers.json();
    const usersPosts = await respPosts.json();
    const usersImages = await respImages.json();
    const posts = document.getElementById("posts");
    const tableRanking = document.getElementById("rankingTable");
    const ranking = users.sort((a,b) => b.points - a.points);
    const podium = ranking.slice(0, 4);
    

    posts.innerHTML = `
                <div class="${styles.allTable}">
                  <div class="${styles.tableWrapper}">
                    <div class="${styles.tableScroll}">
                      <table class="${styles.tableForum}">
                          <thead>
                            <tr class="${styles.tdUser}">
                              <th colspan='2'>Topics</th>
                              <th>Ans.</th>
                              <th>Last Answer</th>
                            </tr>
                          </thead>
                          <tbody id="cuerpoTabla">
                            ${users
                              .map((user) => {
                                const $userFound = usersImages.find((image) => user.id === image.id);
                                const $postFound = usersPosts.find((post) => user.id === post.id);
                                
                
                                return `<tr class="${styles.filaTable}" id="${user.id}"> 
                                            <td class="${styles.tdUser}" text-align="left">
                                              <img src="${$userFound.url}" class="${styles.imageTable}">
                                              <div>${user.name}</div>
                                            </td>
                                            <td class="${styles.tdUser}" text-align="left">
                                              <h4>${$postFound.title}</h4><div>Publicado el 30 de marzo de 2023</div>
                                            </td>  
                                            <td class="${styles.tdUser}" text-align="center">2</td>
                                            <td class="${styles.tdUser}">3 de marzo de 2024</td>
                                        </tr>`;
                              })
                              .join("")}
                          </tbody>
                      </table>
                      
                    </div>
                    <div>
                        <button id="publicarPost" class="${styles.publishInForum}">Publica tu post</button>
                    </div>
                </div>
                    <dialog id="modal" class="${styles.modalPost}">
                      <form id="mandarForoNuevo">
                           <div class="${styles.tituloPost}">
                            <label for="titlePost">Ingresa el titulo de tu post</label>
                            <input id="titlePost" name="titlePost"></input> 
                           </div>
                           <div class="${styles.content}">
                            <label for="contentPost">Ingresa el contenido de tu post</label>
                            <textarea name="contentPost" id="contentPost" cols="25" rows="10"></textarea> 
                           </div>
                           <button type="button" id="closeArea" class="${styles.closer}">Salir</button>
                           <button type="submit" id="publicarPost" name="publicarPost" class="${styles.publisher}">Publicar</button>
                      </form>
                    </dialog>
                  </div>
      `;
    document.getElementById('publicarPost').addEventListener('click', (e) => {
      e.preventDefault();
      document.getElementById('modal').showModal();
    });    
    
    document.getElementById('closeArea').addEventListener('click', (e) => {
      e.preventDefault();
      document.getElementById('modal').close();
    })

    document.getElementById('mandarForoNuevo').addEventListener('submit', async (e) => {
      const tableBody = document.getElementById('cuerpoTabla');
      const welcomeUser = localStorage.getItem("welcomeUser");
      const user = users.find((us) => us.id === welcomeUser);
      tableBody.innerHTML = `
            <tr>
                <td class="" text-align="left">
                  <img src="${$userFound.url}" class="${styles.imageTable}">
                  <div>${user.name}</div>
                </td>
                <td class="${styles.tdUser}" text-align="left">
                  <h4>${$postFound.title}</h4><div>Publicado el 30 de marzo de 2023</div>
                </td>  
                <td class="${styles.tdUser}" text-align="center">2</td>
                <td class="${styles.tdUser}">3 de marzo de 2024</td>
            </tr>
      `
    })
    document.querySelectorAll(`.${styles["filaTable"]}`).forEach((tr) => {
      tr.addEventListener(
        "click",
        (e) => {
          e.stopPropagation();
          const targetTr = e.target.closest("tr");
          navigateTo(`/dashboard/forum?id=${targetTr.id}`);
        },
        true
      );
    });
};


  if (params.get("id")) {
    const idUser = params.get("id");

    function getRandomUser1(idUser) {
      let randomNumber;
      do {
        randomNumber = Math.floor(Math.random() * 10) + 1;
      } while(randomNumber == idUser);
      return randomNumber;
    }
    
    function getRandomUser2(idUser, randomUser1) {
      let randomNumber;
      do {
        randomNumber = Math.floor(Math.random() * 10) + 1;
      }while(randomNumber == idUser || randomNumber == randomUser1);
      return randomNumber;
    }

    const randomUser1 = getRandomUser1(idUser);
    const randomUser2 = getRandomUser2(idUser, randomUser1);
    console.log(idUser, randomUser1, randomUser2);
    
    pageContent = `
        <div class="${styles.postUser}" id="userPost"></div>
     `;

    logic = async () => {
      const $whiteButton = document.getElementById("/dashboard/forum");
      $whiteButton.style = "background-color:white";


      const respUser = await fetch(`https://jsonplaceholder.typicode.com/users/${randomUser1}`);
      const respUser1 = await fetch(`https://jsonplaceholder.typicode.com/users/${randomUser1}`);
      const respUser2 = await fetch(`https://jsonplaceholder.typicode.com/users/${randomUser2}`);
      const respPosts = await fetch("https://jsonplaceholder.typicode.com/posts");
      const respImages = await fetch("https://jsonplaceholder.typicode.com/photos");
      const user = await respUser.json();
      const user1 = await respUser1.json();
      const user2 = await respUser2.json();
      const usersPosts = await respPosts.json();
      const usersImages = await respImages.json();
      const postFound = usersPosts.find((e) => randomUser1 == e.userId);
      const imageFound = usersImages.find((e) => idUser == e.id);


      const postUser = document.getElementById("userPost");

      postUser.innerHTML = `
          <div class="${styles.allPost}">
                <div>
                  <div class="${styles.postUsers}" id="usersPosts">
                  <h1>POSTS</h1>

                  <div class="${styles.eachPost}">
                    <div class="${styles.postHeader}">
                      <div class="${styles.postUserImage}">
                        <img src="${imageFound.url}" class="${styles.imageUserPost}">
                        <p>${user.name}</p>
                      </div>
                      <div class = "${styles.boxTitle}">
                        <h2 class="${styles.titlePost}">${postFound.title}</h2>
                      </div>
                    </div>

                    <div class="${styles.postBody}">
                      ${postFound.body}
                    </div>
                  </div>
                  
                  <h2>Answers</h2>
                  <br>

                  <div class="${styles.eachPost}">
                    <div class="${styles.postHeader}">
                      <div class="${styles.postUserImageResponses}">
                        <img src="${imageFound.url}" class="${styles.imageUserPost}">
                        <p>${user1.name}</p>
                      </div>
                      <div class="${styles.postAnswers}">
                        ${postFound.body}
                      </div>
                    </div>
                  </div>

                  <div class="${styles.eachPost}">
                    <div class="${styles.postHeader}">
                      <div class="${styles.postUserImageResponses}">
                        <img src="${imageFound.url}" class="${styles.imageUserPost}">
                        <p>${user2.name}</p>
                      </div>
                      <div class="${styles.postAnswers}">
                        ${postFound.body}
                      </div>
                    </div> 
                  </div>


                  <div class="${styles.eachPost}">
                    <div class="${styles.postHeader}">
                      <div class="${styles.postUserImageResponses}">
                        <img src="${imageFound.url}" class="${styles.imageUserPost}">
                        <p>${user2.name}</p>
                      </div>
                      <div class="${styles.postAnswers}">
                        ${postFound.body}
                      </div>
                    </div>
                  </div> 
                </div>

              <div class="${styles.publish}">
                  <div class="${styles.divPublishPost}" id="divpublish">
                    <input type="text" class="${styles.inputPost}" id="inputMessage">
                    <span id="spanPublish">Publish Discussion</span>
                  </div>
                  <button class="${styles.buttonPublish}" id="publishButton">Publish</button>
              </div>

            </div>
          </div>
          
        `;
        document.getElementById('divpublish').addEventListener('click',() => {
          document.getElementById('spanPublish').style.display = 'none';
          const inputPublicar = document.getElementById('inputMessage');
          inputPublicar.style.display = 'block';
          inputPublicar.focus();
        });

        document.getElementById('publishButton').addEventListener('click',() => {
          if(document.getElementById('inputMessage').value){
            const currentPosts = document.getElementById('usersPosts');
            const morePosts = document.getElementById('inputMessage').value;
            currentPosts.innerHTML +=  `
                <div class="${styles.eachPost}">
                  <div class="${styles.postHeader}">
                    <div class="${styles.postUserImageResponses}">
                      <img src="${imageFound.url}" class="${styles.imageUserPost}">
                      <p>${user2.name}</p>
                    </div>
                    <div class="${styles.postAnswers}">
                      ${morePosts}
                    </div>
                  </div>
                </div>
            `
          } else {
            alert("Llena todos los campos");
          }
        });
    };
  }

  return {
    pageContent,
    logic
  };
}
