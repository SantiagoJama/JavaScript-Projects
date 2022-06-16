
const $currentNumber = document.getElementById('current-number'),
      $spanWarning = document.getElementById('warning'),
      $divBtnContainer = document.getElementById('button-container');

let currentNumber = 0;
$currentNumber.textContent = String(currentNumber);

const decreaseCounter= () =>{
   if(currentNumber === 0){
       $currentNumber.textContent = String(currentNumber);
       $spanWarning.textContent = "¡No puede decrementar un número menor e igual a 0!"
       $spanWarning.classList.add('show','warning');
   }else{
       $currentNumber.textContent = String(currentNumber--);
   }
}

const resetCounter = () =>{
    $spanWarning.textContent = ""
    $spanWarning.classList.replace('show','hidden');
   $currentNumber.textContent = String(currentNumber = 0);
}

const increaseCounter = () =>{
    $spanWarning.textContent = ""
    $spanWarning.classList.replace('show','hidden');
    currentNumber++;
    $currentNumber.textContent = String(currentNumber);
}

//event handler
$divBtnContainer.addEventListener('click', ( e )=>{
    if( e.target.id === 'decrease' ) decreaseCounter();

    else if ( e.target.id === 'reset') resetCounter();

    else increaseCounter();
})



