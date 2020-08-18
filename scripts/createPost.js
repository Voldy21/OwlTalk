import {getCookie, setCookie, deleteCookie} from './cookies.js'
import error from './error.js'

let form = document.getElementById('form-post')
form.addEventListener('click', createPost)

async function createPost(event){
    let form = event.currentTarget;
    if(event.target.name == 'submit'){
        if(form.title.value && form.body.value){
            let token = getCookie('token')

            let data = {
                title: form.title.value,
                body: form.body.value
            }
            let message = await fetch("http://localhost:5000/api/posts", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'x-auth-token': token
                },
                body: JSON.stringify(data)
            })
            message = await message.json()
            console.log(message);
            if(message.errors){
                error(message.errors)
            }else{
                window.location.href= `index.html`;
            }
        }else{
            error("Fields cannot be empty")
            console.log(window.location.port)
        }
    }
}

