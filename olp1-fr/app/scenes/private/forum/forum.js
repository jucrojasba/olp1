import styles from "./forum.css";

export function ForumScene() {
  const pageContent = `
    <h1 class="${styles['title-forum']}">FORUM</h1>
    <div class="${styles.flexWrapper}">

      <div id="posts" class="${styles.posts}"></div>

      <div class="${styles.discussions}">
        <h2>Other Discussions</h2>
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
      
    </div>
    `;

  const logic = async () => {
    /* Boton Blanco en el sideBar */
    const $whiteButton = document.getElementById("/dashboard/forum");
    $whiteButton.style = "background-color:white";

    const respUsers = await fetch("https://jsonplaceholder.typicode.com/users");
    const respPosts = await fetch("https://jsonplaceholder.typicode.com/posts");
    const respImages = await fetch(
      "https://jsonplaceholder.typicode.com/photos"
    );
    const users = await respUsers.json();
    console.log(users);
    const usersPosts = await respPosts.json();
    const usersImages = await respImages.json();
    const posts = document.getElementById("posts");

    posts.innerHTML = `<table class="${styles.tableForum}">
          <thead>
            <tr class="${styles.tdUser}">
              <th colspan='2'>Topics</th>
              <th>Ans.</th>
              <th>Last Answer</th>
            </tr>
          </thead>
          <tbody>
            ${users.map((user) => {
              const $userFound = usersImages.find(
                (image) => user.id === image.id
              );
              const $postFound = usersPosts.find(
                (post) => user.id === post.id
              );
              console.log($postFound)
              return `<tr>
                    <td class="${styles.tdUser}" text-align="left">
                      <img src="${$userFound.url}" class="${styles.imageTable}"><div>${user.name}</div>
                    </td>
                    <td class="${styles.tdUser}" text-align="left">
                      <h4>${$postFound.title}</h4><div>Publicado el 30 de marzo de 2023</div>
                    </td>  
                    <td class="${styles.tdUser}">2</td>
                    <td class="${styles.tdUser}">3 de marzo de 2024</td>
              </tr>`;
            }).join('')}
            <tr>
              <td align="center" colspan="3">
                <div class="${styles.publish}">
                  <span>Publish Discussion</span><button>Publish</button>
                </div>
              </td>
            </tr>
          </tbody>
      </table>
      `;
  };

  return {
    pageContent,
    logic
  };
}
