window.addEventListener('scroll', function() {
    const menu_user = document.getElementById("menu_user");
    if (window. screen.width > 768) {
        if (window.scrollY > 330) {
            menu_user.classList.add("fixed-top");
        } else {
            menu_user.classList.remove("fixed-top");
        }
    } else if (window. screen.width > 425) {
        if (window.scrollY > 160) {
            menu_user.classList.add("fixed-top");
        } else {
            menu_user.classList.remove("fixed-top");
        }
    } else {
        if (window.scrollY > 88) {
            menu_user.classList.add("fixed-top");
        } else {
            menu_user.classList.remove("fixed-top");
        }
}});