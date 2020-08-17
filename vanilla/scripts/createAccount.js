import error from './error.js'

let form = document.getElementById("create-account-form")
form.addEventListener('click', createAccount)

async function createAccount(event){
    error("passwords do not match")
    form = event.currentTarget;
    console.log(form)
    if(event.target.name === "submit"){
        if(form.password1.value == form.password2.value){
            let data = {
                username: form.username.value,
                email: form.email.value,
                password: form.password1.value
            }
            let post = await fetch("http://localhost:5000/api/users", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            post = await post.json()
            console.log(post);
            if(post.errors){
                error(post.errors[0].msg);
            }
        }else{
            error("passwords do not match")
        }
    }
    
}

