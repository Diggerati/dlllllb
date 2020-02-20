var menuBtn = document.getElementById('menu-button');
var homeMenu = document.getElementById('menu-container');
var opts = document.getElementById('my-menu');
var exitMenu = document.getElementById('exit-menu');
menuBtn.addEventListener('click', function () {
    homeMenu.style.width = "110%";
    homeMenu.style.display = "block";
    homeMenu.style.transition = "0.7s";
    opts.style.width = "100%";

});

exitMenu.addEventListener('click', function () {
    homeMenu.style.width = "0px";
    homeMenu.style.display = "block";
    homeMenu.style.transition = "0.7s";
    opts.style.width = "0px";
    opts.style.overflow = "hidden";
});
