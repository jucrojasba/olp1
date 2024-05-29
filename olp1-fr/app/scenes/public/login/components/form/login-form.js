import { navigateTo } from "../../../../../Router.js";
import { formValidator } from "../../../../../helpers";
import style from "./login-form.css";

export async function LoginFormComponent() {
  const root = document.getElementById("root");

  root.innerHTML = `
      <div class="${style.container}">
        <form id="loginForm" class="${style.form}">
        <h2>Login</h2>
        <label for="email" class="${style.label}">Email:</label>
        <input type="text" id="email" name="email" autocomplete="email" class="${style["input-email"]}">
        <label for="password" class="${style.label}">Password:</label>
        <input type="password" id="password" name="password" autocomplete="current-password" class="${style["input-password"]}">
        <div class="${style.flexButtons}">
            <button type="submit" class="${style["button-send"]}">Login</button>
            <button type="button" class="${style["register-button"]}" id="registerButton">Register</button>
          </div>
        </form>
      </div>
    `;

  const form = document.getElementById("loginForm");
  form.addEventListener("submit", async (event) => {
    event.preventDefault(); // previene el comportamiento por default que es, recargar la pagina
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (!formValidator(email, password)) {
      alert("Please fill in all fields");
      return;
    }
    try{
      const data = await login(email, password);
      const token = data.token;
      if (token) {   
        const welcomeUser = data.user.id;
        localStorage.setItem("token", token);
        localStorage.setItem("welcomeUser", welcomeUser);
        navigateTo("/dashboard");
      };
    }catch(error){
      alert("Invalid credentials");
    }
  });
  /*Acceder a la escena de registro de usuario */
  const registerButton = document.getElementById("registerButton");
  registerButton.addEventListener("click", () => {
    navigateTo("/register");
  });
}

async function login(email, password) {
  try {
    const response = await fetch("http://localhost:4000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      const errorMessage = await response.text();
      throw new Error(`Error ${response.status}: ${errorMessage}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Login failed:", error);
    return null;
  }
}
