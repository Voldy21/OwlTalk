
async function createAccount(form){
    console.log(form)
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
    }
}

