import {getCookie, setCookie, deleteCookie} from './cookies.js'

async function logout(){
    deleteCookie("token");
}