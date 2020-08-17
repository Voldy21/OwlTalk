import postHTML from './scripts/getPosts.js'
import {getCookie, setCookie, deleteCookie} from './scripts/cookies.js'
import navbar from './scripts/navbar.js'



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

async function fillPosts(){
    let root = document.getElementById("root");
    let postText = await postHTML()
    root.innerHTML = postText
}

if(window.location.pathname == '/vanilla/index.html'){
    fillPosts();
}

function status(){
    let status = document.getElementById("status")
    let token = getCookie("token")
    if(token){
        status.innerHTML = "logged in"
    }else{
        status.innerHTML = "logged out"
    }
}

navbar()
status()
