import styles from "./rank.css";

export function RankingTableScene() {
    let pageContent = `
        <h1 class="${styles.Titulo}">Ranking table</h1>
    `

    let logic =  () => {
        alert('Estas en la pagina de Ranking');
    }

    return {
        pageContent,
        logic
    };
}