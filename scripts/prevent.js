var stopPropOn = function (e) {
	var $el = e.target;
	e.stopPropagation();
	$el.style.backgroundColor = 'yellow';
	alert('CLICK!');
}
box1.onclick = stopPropOn;
box2.onclick = stopPropOn;
box3.onclick = stopPropOn;

var stopPropOf = function (e) {
	var $el = e.target;
	$el.style.backgroundColor = 'yellow';
	alert('CLICK!');
}
box4.onclick = stopPropOf;
box5.onclick = stopPropOf;
box6.onclick = stopPropOf;

var preventDefOn = function (e) {
	var $el = e.target;
	e.preventDefault();
}
button1.onclick = preventDefOn;

var preventDefOf = function (e) {
	var $el = e.target;
}
button2.onclick = preventDefOf;

