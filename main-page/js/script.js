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

  //Reset fade effect
  box.classList.remove('slide');
  void box.offsetWidth;
  box.classList.add('slide');

  box.style.backgroundImage = 'url(' + slides[start++ % slides.length].
    getElementsByTagName('img')[0].getAttribute('src') + ')';

  setTimeout(slideShow, 2500, boxId, start);
}

$(document).ready(function() {
  $('.bg-tabs').click(function() {
    var $tabId = $(this).attr('id');

    if ($(this).hasClass('inactive')) {
      $('.bg-tabs').addClass('inactive');
      $(this).removeClass('inactive');
      $('.tabcontent').hide();
      $('#' + $tabId + 'c').fadeIn('slow');
    }
  });
});