async function navbar(){
    let navbar = document.getElementById("navbar")
    let html = ''

    html += `<nav class="navbar navbar-expand-lg">
    <div class="container">
    <!-- Login Button -->
    <a class="button-style btn btn-info btn-sm px-1 mr-2" href="createAccount.html" role="button">Login</a>
    <i class="fa fa-sign-in" aria-hidden="true"></i>
    <!-- User Icon -->
    <nav class="navbar navbar-light">
        <a class="navbar-brand" href="profile.html">
        <i class="fa fa-user-circle-o" aria-hidden="true"></i>
        </a>
    </nav>
    <a class="navbar-brand" href="index.html">Cheese</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
            <a class="nav-item nav-link active" href="#">Home <span class="sr-only">(current)</span></a>
            <a class="nav-item nav-link" href="people.html">People</a>
            <a class="nav-item nav-link" href="#">School</a>
            <a class="nav-item nav-link" href="#">Hobbies</a>
        </div>
    </div>
    <!-- Help Button -->
    <button type="button" class="button-style btn btn-info px-2" data-toggle="tooltip" data-placement="bottom" title="Click for help" onclick="alert('Welcome to Cheese! The site to help people connect during COVID. Create a User profile by selecting the user icon in the top left. To post a block click on the new block button. The main page displays recent and popular blocks from other students. The navigation bar links will help you navigate through different categories on the site. Thank you for becoming apart of the cheese family!')">
    <i class="fa fa-question-circle" aria-hidden="true"></i>
    </button>
    <!-- Settings Button -->
    <a class="button-style btn btn-info ml-2 px-2" href="settings.html" role="button"><i class="fa fa-cog" aria-hidden="true"></i></a>
    </div>
</nav>
    <p id="status"><p>`

    navbar.innerHTML = html
}

export default navbar