const menu_content = document.getElementById('menu-content-hamburger');  


function hamburgerMenu(){

    if(menu_content.style.marginTop === "-11rem"){
        menu_content.style.marginTop = "0rem"

    } else {
        menu_content.style.marginTop = "-11rem"

    }
}