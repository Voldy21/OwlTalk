
async function createPost(form){
    let data = {
        title: form.title.value,
        body: form.body.value
    }
    let post = await fetch("http://localhost:5000/api/posts", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    data = await post.json()
    console.log(data);
}