var pins = document.querySelectorAll('.pin');
var infoPanel = document.querySelector('.info-panel-wrap');
var panels = document.querySelectorAll('.panel');

function showPanel(el) {
	pins.forEach(function(e) {
		e.classList.remove('js-active');
	});
	el.classList.add('js-active');

	infoPanel.classList.add('js-show');

	panels.forEach(function(e) {
		e.classList.remove('js-show');
	});

	var value = el.value;
	var exercise = document.querySelector(value);
	exercise.classList.add('js-show');

	var panelNum = document.querySelector('.info-panel-header .icon');
	var str = value.replace('#panel-', '');
	panelNum.innerHTML = str;
}

function closePanel() {
	pins.forEach(function(e) {
		e.classList.remove('js-active');
	});
	
	infoPanel.classList.remove('js-show');
}