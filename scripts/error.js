function error(message){
    let error = document.getElementById('error')
    error.innerHTML = message
    error.classList.toggle("hidden");
    setTimeout(() => error.classList.toggle("hidden"), 3000);
}

export default error