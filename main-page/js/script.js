function changeActive(tabName) {
	var tabContent = document.getElementsByClassName('tabcontent');
	for(var i = 0; i < tabContent.length; i++) {
		tabContent[i].style.display = 'none';
	}
	document.getElementById(tabName).style.display = 'block';
}

function slideShow(boxId, start) {
  var box = document.getElementById(boxId), 
    slides = document.getElementsByClassName('slide');

  box.classList.remove('slide');
  void box.offsetWidth;
  box.classList.add('slide');
  if (start == slides.length) { start = 0; }
  box.style.backgroundImage = 'url(' + slides[start++ % slides.length].
    getElementsByTagName('img')[0].getAttribute('src') + ')';
  box.style.backgroundSize = '100% auto';
  setTimeout(slideShow, 2500, boxId, start);

}