
const $decrease = document.getElementById('decrease'),
      $reset = document.getElementById('reset'),
      $increase = document.getElementById('increase'),
      $currentNumber = document.getElementById('current-number'),
      $spanWarning = document.getElementById('warning');

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
$increase.addEventListener('click',increaseCounter);
$decrease.addEventListener('click',decreaseCounter);
$reset.addEventListener('click',resetCounter)
