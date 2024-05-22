import { fetchApi } from "../../../helpers/fetch-api";
import { QuillDeltaToHtmlConverter } from "quill-delta-to-html";

export function ModulesByIdScene(id) {
  let pageContent = `
        <h1 id="modules-title"></h1>
        <div id="editor"></div>
    `;

  let logic = async () => {
    // make server request
    try {
      const resp = await fetchApi(
        `http://localhost:4000/api/challenges/${id}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      console.log(resp);
      document.getElementById("module-title").innerText = resp.title;

      const converter = new QuillDeltaToHtmlConverter(
        JSON.parse(resp.content).ops,
        {}
      );
      const htmlContent = converter.convert();

      const editor = document.getElementById("editor");
      console.log(htmlContent);
      editor.innerHTML = htmlContent;
    } catch (error) {
      console.error(error, "from ModuleByIdScene");
    }
  };
  return {
    pageContent,
    logic,
  };
}
