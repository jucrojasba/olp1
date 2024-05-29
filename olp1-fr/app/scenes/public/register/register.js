import { navigateTo } from "../../../Router";
import style from "./register.css";

export async function RegisterPage() {
    const root = document.getElementById('root');
    
    root.innerHTML = `
            <div class="${style.container}">
                <form id="registerForm" class="${style["form-register"]}">
                    <h2>Register</h2>
                    <label for="nombre" class="${style.label}">Nombre: </label>
                    <input type="text" id="nombre" name="nombre" autocomplete="nombre" class="${style["input-email"]}">
                    <label for="email" class="${style.label}">Email:</label>
                    <input type="text" id="email" name="email" autocomplete="email" class="${style["input-email"]}">
                    <label for="password" class="${style.label}">Password:</label>
                    <input type="password" id="password" name="password" autocomplete="current-password" class="${style["input-password"]}">
                    <button type="submit" class="${style["button-register"]}">Register</button>
                </form>
            </div>
    `;
    const userEmail= document.getElementById('email');
    const userPassword = document.getElementById('password');
    const userNombre = document.getElementById('nombre');
    register(userNombre,userEmail,userPassword)    
    }
    
    

async function register(nombre, mail, passworduser) {
    
    document.getElementById("registerForm").addEventListener("submit", async(e)=>{
        e.preventDefault();
        const $name = nombre.value;
        const $mail = mail.value;
        const $password = passworduser.value;
        if(nombre && mail && passworduser){
            const user = {
                name: $name,
                password: $password,
                email: $mail,
                points: 0
            }
            try{
                await fetch('http://localhost:4000/api/auth/register', {
                    method: 'POST',
                    body: JSON.stringify(user),
                    headers: {
                        'Content-Type':'application/json'
                    }
                })
                alert('Te registraste exitosamente');
                document.getElementById('registerForm').reset();
                navigateTo('/login')
            } catch (error){
                alert('Ha ocurrido un error al registrarte. Por favor, inténtalo de nuevo más tarde.');
                console.error('Error al tratar de registrarte:', error);
            }
        } else {
            alert('Por favor, llena todos los campos');
        }
        
    })
    
}