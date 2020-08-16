let body = {
    text: "Fuck you"
}

async function post(){
    let message = await fetch("http://localhost:5000/api/posts", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    })
    message = await message.json()
    console.log(message)
}

async function get(){
    let message = await fetch("http://localhost:5000/api/posts")
    message = await message.json()
    console.log(message)
}