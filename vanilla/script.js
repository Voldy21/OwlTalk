import postHTML from './scripts/getPosts.js'
import {getCookie, setCookie, deleteCookie} from './scripts/cookies.js'
import navbar from './scripts/navbar.js'

setupNavbar()

async function fillPosts(){
    let root = document.getElementById("root");
    let postText = await postHTML()
    root.innerHTML = postText
}


function setupNavbar(){
    let token = getCookie("token")
    if(token){
        navbar(true)
    }else{
        navbar(false)
    }
}

function logout(){
    deleteCookie("token")
    location.reload()
}

//logout button
let logoutButton = document.getElementById("logout")
if(logoutButton){
    logoutButton.addEventListener("click", logout);
}

//Get posts if in index.html
if(window.location.pathname == '/vanilla/index.html'){
    fillPosts();
}

