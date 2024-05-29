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

      <div id="rankingTable" class="${styles.discussions}">
        
      </div>
      
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
                          <tbody>
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
                  </div>
      `;

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

    tableRanking.innerHTML = `<h2>Ranking Table</h2>
                              <br><br>
                              
                              <table>
                                ${podium.map((user,index) => {
                                  const $userFound = usersImages.find((image) => user.id === image.id);
                                  if(index == 0){
                                      return `<tr class="${styles.discussionsFlex}">
                                                <td><img class="${styles.imgDiscussion}" url="${$userFound.url}"></td>
                                                <td><img src="${crown_icon}" class="${styles.imageTable}"></td>
                                                <td><strong>${user.name}</strong></td>
                                                <td><span>${user.points} points</span></td>
                                              </tr>`
                                  } else {
                                    return `<tr class="${styles.discussionsFlex}">
                                              <td><img class="${styles.imgDiscussion}" url="${$userFound.url}"></td>
                                              <td><img src="${medal_icon}" class="${styles.imageTable}"></td>
                                              <td><strong>${user.name}</strong></td>
                                              <td><span>${user.points} points</span></td>
                                            </tr>`
                        }
                                  }
                                ).join('')}
                              </table>

    `;
};


  if (params.get("id")) {
    const idUser = params.get("id");
    console.log(idUser);
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
    console.log(randomUser1);
    const randomUser2 = getRandomUser2(idUser, randomUser1);
    console.log(randomUser2);
    
    pageContent = `
        <div class="${styles.postUser}" id="userPost"></div>
     `;

    logic = async () => {
      const $whiteButton = document.getElementById("/dashboard/forum");
      $whiteButton.style = "background-color:white";

      const respUser = await fetch(`https://jsonplaceholder.typicode.com/users/${idUser}`);
      const respUser1 = await fetch(`https://jsonplaceholder.typicode.com/users/${randomUser1}`);
      const respUser2 = await fetch(`https://jsonplaceholder.typicode.com/users/${randomUser2}`);
      const respPosts = await fetch("https://jsonplaceholder.typicode.com/posts");
      const respImages = await fetch("https://jsonplaceholder.typicode.com/photos");
      const user = await respUser.json();
      const user1 = await respUser1.json();
      const user2 = await respUser2.json();
      const usersPosts = await respPosts.json();
      const usersImages = await respImages.json();
      const postFound = usersPosts.find((e) => idUser == e.userId);
      const imageFound = usersImages.find((e) => idUser == e.id);

      const postUser = document.getElementById("userPost");

      postUser.innerHTML = `
      <div class="${styles.postUsers}">
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
              <div class="${styles.postUserImage}">
                <img src="${imageFound.url}" class="${styles.imageUserPost}">
                <p>${user1.name}</p>
              </div>
              <div class="${styles.postAnswers}">
                ${postFound.body}
              </div>
            </div>
          </div>
        

          <br><br>

          <div class="${styles.eachPost}">
            <div class="${styles.postHeader}">
              <div class="${styles.postUserImage}">
                <img src="${imageFound.url}" class="${styles.imageUserPost}">
                <p>${user2.name}</p>
              </div>
              <div class="${styles.postAnswers}">
                ${postFound.body}
              </div>
            </div>
            
          </div>

          <br><br>

          <div class="${styles.eachPost}">
            <div class="${styles.postHeader}">
              <div class="${styles.postUserImage}">
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
          <span>Publish Discussion</span><button>Publish</button>
      </div>
            
      <aside class="${styles.tableRankings}">
        <div class="">
          <h2>Discussions</h2>
          <br><br>
          <div class="${styles.discussionsFlex}">
            <div class="${styles.imgDiscussion}"></div>
            <strong>Lorem ipsum?</strong>
            <span>04/03/2024</span>
          </div>
          <br>
          <div class="${styles.discussionsFlex}">
            <div class="${styles.imgDiscussion}"></div>
            <strong>Lorem ipsum?</strong>
            <span>04/03/2024</span>
          </div>
          <br>
          <div class="${styles.discussionsFlex}">
            <div class="${styles.imgDiscussion}"></div>
            <strong>Lorem ipsum?</strong>
            <span>04/03/2024</span>
          </div>
          <br>
          <div class="${styles.discussionsFlex}">
            <div class="${styles.imgDiscussion}"></div>
            <strong>Lorem ipsum?</strong>
            <span>04/03/2024</span>
          </div>
        </div>
      </aside>
        `;
    };
  }

  return {
    pageContent,
    logic,
  };
}