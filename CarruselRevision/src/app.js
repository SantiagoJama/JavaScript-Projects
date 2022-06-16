const imgResource = "https://source.unsplash.com/category/people",
      bioResource = "https://jsonplaceholder.typicode.com/comments",
      namesResource = "https://jsonplaceholder.typicode.com/users";

const jobPositions = ["Developer", "Web Developer", "Business", "DevOps", "Networking", "Cloud Engineer"]

const $pUserName = document.querySelector('.user-name'),
     $imgUser = document.getElementById('user-img'),
     $currentJob = document.querySelector('.current-job'),
     $btnHandler = document.getElementById('btn-handler'),
     $userBio = document.querySelector('.bio')


const userNameRequest = () =>{
    let randomNumber = Math.floor(Math.random() * 10);
    fetch(namesResource)
        .then(response => response.json())
        .then(data =>{
            $pUserName.textContent = data[randomNumber].name;
            $currentJob.textContent = jobPositions[randomNumber]
        })
}

const userImgRequest = () =>{
     fetch(imgResource)
         .then( response => {
             $imgUser.setAttribute('src',`${response.url}`);
             $imgUser.setAttribute('alt','User')
         })


}

const userBioRequest = () =>{
    let randomNumber = Math.floor(Math.random() * 10);
    fetch(bioResource)
        .then(response => response.json())
        .then(data =>{
            $userBio.textContent = data[randomNumber].body;
        })
}

window.addEventListener('load', ()=>{
    userNameRequest();
    userImgRequest();
    userBioRequest();
    $btnHandler.addEventListener('click', (e)=>{
        if ( e.target.type ==='submit') {
            userNameRequest();
            userImgRequest();
            userBioRequest();
        }
    })
})