var slide = document.getElementById('slide');
window.onmousemove = function(w){
	var d = w.clientX;
	slide.style.left = d +"px";
}






var can = document.getElementById('can');
var cant = document.getElementById('cant');
var music = document.getElementById('music');
can.addEventListener('mouseover', function(){
	music.style.color = "#FF31FD";
}, false);

can.addEventListener('mouseout', function(){
	music.style.color = "white";
}, false);
cant.addEventListener('mouseover', function(){
	music.style.color = "#FF31FD";
}, false);

cant.addEventListener('mouseout', function(){
	music.style.color = "white";
}, false);
var ex = document.getElementById("x");
var way = document.getElementById("y");

ex.textContent = (event.clientX);
way.textContent = (event.clientY);
