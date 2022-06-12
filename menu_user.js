// if ((window).scroll(function(e){ 
//     const menu_user = document.getElementById("menu_user"); 
//     const isPositionFixed = menu_user.css('position') == 'fixed';
//     if ($(this).scrollTop() > 300 && !isPositionFixed){ 
//       menu_user.setAttribute("position", "fixed");
//       menu_user.setAttribute("top", "0px");
//     }
//     if ($(this).scrollTop() < 300 && isPositionFixed){
//       menu_user.setAttribute("position", "static");
//       menu_user.setAttribute("top", "0px");
//     } 
//   }));

console.log("hello")
window.addEventListener('scroll', function() {
    console.log("launch")
    const menu_user = document.getElementById("menu_user");
    if (window. screen.width > 768) {
        if (window.scrollY > 300) {
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