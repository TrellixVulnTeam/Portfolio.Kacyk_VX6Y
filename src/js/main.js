const nav = document.querySelector('.nav')
const allNavItems = document.querySelectorAll('.nav__item')
const btn = document.querySelector('.scroll-to-top')
const navMobile = document.querySelector('.nav-mobile')
const navBtn = document.querySelector('.burger-btn')
const footerYear = document.querySelector('.footer__year')

const handleNavifin = () => {
	navMobile.classList.toggle('nav-mobile--active')
	
	allNavItems.forEach(item => {
		item.addEventListener('click', () => {
			navMobile.classList.remove('nav-mobile--active')
		})
	})

	handleNavItemsAnimation()
}

const handleNavItemsAnimation = () => {
	let delayTime = 0

	allNavItems.forEach(item => {
		item.classList.toggle('nav-items-animation')
		item.style.animationDelay = '.' + delayTime + 's'
		delayTime++
	})
}

const handleScrollBar = () => {
	const scroll = window.scrollY

	const leftToScroll = document.body.getBoundingClientRect().height - window.innerHeight

	const scrollBarWidth = Math.floor((scroll / leftToScroll) * 100)
	console.log(scrollBarWidth)

	if (scrollBarWidth > 25) {
		btn.classList.add('active')
	} else {
		btn.classList.remove('active')
	}

}

const scrollToTop = () => {
	window.scroll({
		top: 0,
		behavior: 'smooth',
	})
}

const handleNav = () => {
	if (nav.classList.toggle('shrink', window.scrollY > 60)) {
		nav.classList.remove('nav', window.scrollY > 60)
	} else {
		nav.classList.add('nav')
	}
}

function initMap() {
	const uluru = { lat: 50.327, lng: 18.784 }
	const map = new google.maps.Map(document.getElementById('map'), {
		zoom: 12,
		center: uluru,
	})
	const marker = new google.maps.Marker({
		position: uluru,
		map: map,
	})
}




const handleCurrentYear = () => {
	const year = new Date().getFullYear()
	footerYear.innerText = year
}

handleCurrentYear()
window.addEventListener('scroll', handleScrollBar)
window.addEventListener('scroll', handleNav)
btn.addEventListener('click', scrollToTop)
navBtn.addEventListener('click', handleNavifin)
