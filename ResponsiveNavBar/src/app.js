
const $btnToggle = document.getElementById('btn-toggle'),
      $navLinks = document.querySelector('.nav-links'),
     $socialLinks = document.querySelector('.social-container'),
    $toggle = document.querySelector('.bi-list')

$btnToggle.addEventListener('click',function(e){
     if($toggle.classList.contains(('bi-list'))){
         $toggle.classList.remove('bi-list')
         $toggle.classList.add('bi-x-circle')
     }else{
         $toggle.classList.remove('bi-x-circle')
         $toggle.classList.add('bi-list')
     }
    if( $navLinks.classList.contains('show-links') && $socialLinks.classList.contains('show-links')){
        $navLinks.classList.replace('show-links','hidde');
        $socialLinks.classList.replace('show-links','hidde')
    }else{
        $navLinks.classList.remove('hidde');
        $socialLinks.classList.remove('hidde')
        $navLinks.classList.add('show-links');
        $socialLinks.classList.add('show-links')
    }
})
