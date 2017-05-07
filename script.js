function changeActive(tabName) {
	var tabContent = document.getElementsByClassName('tabcontent');
	for(var i = 0; i < tabContent.length; i++) {
		tabContent[i].style.display = 'none';
	}
	document.getElementById(tabName).style.display = 'block';
}