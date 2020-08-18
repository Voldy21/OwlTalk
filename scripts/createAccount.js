import error from './error.js'
import {getCookie, setCookie, deleteCookie} from './cookies.js'


let form = document.getElementById("create-account-form")
form.addEventListener('click', createAccount)

async function createAccount(event){
    form = event.currentTarget;
    if(event.target.name === "submit"){
        if(form.password1.value == form.password2.value){
            let data = {
                username: form.username.value,
                email: form.email.value,
                password: form.password1.value
            }
            let message = await fetch("http://localhost:5000/api/users", {
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
            error("passwords do not match")
        }
    }
    
}

