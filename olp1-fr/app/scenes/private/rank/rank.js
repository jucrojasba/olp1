import styles from "./rank.css";

export function RankingTableScene() {
    let pageContent = `
        <div class="${styles.container}" id="containerRanking">
            
        </div>>
    `

    let logic = async () => {
        const $whiteButton = document.getElementById("/dashboard/rank");
        $whiteButton.style = "background-color:white";

        const respUsers = await fetch("http://localhost:4000/api/users");
        const users = await respUsers.json();
        const contUsers = document.getElementById("containerRanking");
        const ranking = users.sort((a,b) => b.points - a.points);
        console.log(ranking);
        contUsers.innerHTML = `
        <h1 class="${styles.Titulo}">Ranking table</h1>
        <table class="${styles.tableRanking}">
            <thead>
                <tr>
                    <th class="${styles.th}">User</th>
                    <th class="${styles.th}">Points</th>
                    <th class="${styles.th}">Position</th>
                    <th class="${styles.th}">Progress</th>
                </tr>
            </thead>
            <tbody>
                ${ranking.map((user, index) => {
                    return `
                        <tr class="${styles.eachPerson}">
                            <td class="${styles.td}">
                                <div class="${styles.userHeader}">
                                    <img class="${styles.imgRanking}" src="https://randomuser.me/api/portraits/men/75.jpg">
                                    <span>${ranking[index].name}</span>
                                </div>
                            </td>
                            <td class="${styles.td}">
                                ${ranking[index].points}
                            </td>
                            <td class="${styles.td}">
                                ${index + 1}
                            </td>
                            <td class="${styles.td}">
                                <div class="${styles.progress}">
                                    <div class="${styles.complete1}">
                                        <span class="${styles.progressSpace}">Progreso...</span><span class="${styles.percentageSpace}">50%</span>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    `;
                }).join("")}
            </tbody>
        </table>
        ${ranking.map(user =>{
            `<dialog>

            </dialog>`
        })}
    `;
    }

    return {
        pageContent,
        logic
    };
}