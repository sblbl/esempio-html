const userTab = document.getElementById('user-pic-container')
const header = document.getElementsByTagName('header')[0] // there could be multiple elements with the same tag: we select the first since we know there's only one header

userTab.addEventListener('click', () => {
	//header.classList.toggle('yellow') //<--- this is the best way to toggle a class, but for explanation there's also a verbose version
	if (header.classList.contains('yellow')) { // look style.css header.yellow
		header.classList.remove('yellow')
	} else {
		header.classList.add('yellow')
	}
})