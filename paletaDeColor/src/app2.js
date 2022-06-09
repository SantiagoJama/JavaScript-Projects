

const colorsByName = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const $body = document.querySelector('body'),
    $changeColorBtn = document.getElementById('cambiar-color'),
    $h1NombreColor = document.querySelector('.nombre-color');



$changeColorBtn.addEventListener('click',()=>{
    let color ="#";
    for(let i = 0; i<6; i++){
        let randomNumber = Math.floor(Math.random() * 16);
        color += colorsByName[randomNumber];
    }
    $h1NombreColor.textContent = color;
    $body.setAttribute('style',`background-color: ${color}`);

})
