async function postHTML(){
    let posts = await fetch("http://localhost:5000/api/posts")
    posts = await posts.json()

    let html = ''

    posts.map(post => {
        html += 
        `<article class="block text-left mb-3 shadow">
            <div class="row">
                <div class="col-sm-3">
                    <img class="img-fluid rounded-circle" style="width:150px" alt="" src="assets/3.jpg">
                    <p class="text-center" style="font-weight: bold;">${post.user.username}</p>
                </div>

                <div class="col-sm-9" id="blockPosted1">
                    <h3> ${post.title}</h3>
                    <p>${post.text}
                    </p>
                    <!-- Comment -->
                    
                    <!--BUTTONS-->
                    <div class="button-container">
                        <div class="user-likes flex">
                            <a class="button-style btn btn-info btn-sm" href="post.html">
                                <i class="fa fa-comment-o" aria-hidden="true"></i>
                            </a>
                            
                        
                            
                            <button class="button-style btn btn-info btn-sm" >
                                <i class="fa fa-caret-square-o-up" aria-hidden="true"></i>
                            </button>
                            
                            <div class="value"> 0 </div>

                            <button class="button-style btn btn-info btn-sm" >
                                <i class="fa fa-caret-square-o-down" aria-hidden="true"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </article>`
    })
    return html
}

export default postHTML