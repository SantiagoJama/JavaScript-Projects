const colorsByName = ['yellow', 'blue', 'red', 'gray', 'black'];

const $body = document.querySelector('body'),
      $changeColorBtn = document.getElementById('cambiar-color'),
      $h1NombreColor = document.querySelector('.nombre-color');



$changeColorBtn.addEventListener('click',()=>{
   let randomNumber = Math.floor(Math.random() * 5);
    $h1NombreColor.textContent = colorsByName[randomNumber]
    $body.setAttribute('style',`background-color: ${colorsByName[randomNumber]}`);

})
