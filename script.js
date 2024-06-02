let menu_icon = document.querySelector(".menu");
let slide_menu = document.querySelector(".slide-menu");
menu_icon.addEventListener('click',()=>{
    if(slide_menu.classList.contains('hidden')){
        slide_menu.classList.remove('hidden')
        slide_menu.classList.add('display')
    }
    else{
        slide_menu.classList.remove('display')
        slide_menu.classList.add('hidden')

    }

    
})