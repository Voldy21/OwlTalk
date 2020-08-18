import {getCookie, setCookie, deleteCookie} from './cookies.js'
import error from './error.js'

let form = document.getElementById("login")
form.addEventListener("click", login)

async function login(event){
    let form = event.currentTarget
    if(event.target.name == "submit"){
        if(form.password.value && form.email.value){
            let data = {
                email: form.email.value,
                password: form.password.value
            }
            let message = await fetch("http://localhost:5000/api/auth", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            message = await message.json()
            setCookie('token', message.token, 2);
            if(message.errors){
                error(message.errors[0].msg)
            }else{
                window.location.href= `index.html`
            }
        }else{
            error("fields empty")
        }
    }
}