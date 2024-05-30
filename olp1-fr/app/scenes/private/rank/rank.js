import styles from "./rank.css";

export function RankingTableScene() {
    let pageContent = `
        <div class="${styles.container}" id="containerRanking">
            
        </div>>
    `

    let logic = async () => {
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
                <th>Profile Img</th>
                <th>Name</th>
                <th>Points</th>
                <th>Position</th>
                <th>Progress</th>
            </tr>
        </thead>
        <tbody>
            ${ranking.map((user, index) => {
                return `
                    <tr class="${styles.eachPerson}">
                        <td>
                            <img class="${styles.imgRanking}" src="https://randomuser.me/api/portraits/men/75.jpg">
                        </td>
                        <td>
                            ${ranking[index].name}
                        </td>
                        <td>
                            ${ranking[index].points}
                        </td>
                        <td>
                            ${index + 1}
                        </td>
                        <td class="${styles.progress}">
                            <div class="${styles.complete1}">
                                <span class="${styles.progressSpace}">Progreso...</span><span class="${styles.percentageSpace}">50%</span>
                            </div>
                        </td>
                    </tr>
                `;
            }).join("")}
        </tbody>
    </table>
        `;
    }

    return {
        pageContent,
        logic
    };
}