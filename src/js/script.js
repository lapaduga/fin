document.addEventListener('DOMContentLoaded', () => {
  const shrinkBtns = document.querySelectorAll('.brands__link')
  const main = document.querySelector('.main')
  const menu = document.querySelector('.menu')
  const menuHeader = document.querySelector('.menu__header')
  const burger = document.querySelector('.header__burger')
  const menuCover = document.querySelector('.menu__cover')
  const menuBurger = document.querySelector('.menu__burger')

  let slider

  // Swiper slider
  function mobileSlider() {
    if (window.innerWidth <= 767) {
      slider = new Swiper('.slider', {
        spaceBetween: 16,
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        breakpoints: {
          320: {
            slidesPerView: 1.2
          },
          425: {
            slidesPerView: 1.5
          },
          600: {
            slidesPerView: 2.2
          }
        }
      })
    } else {
      if (slider !== undefined) {
        slider.destroy()
      }
    }
  }

  // Applying LEFT coordinate for aside menu
  function positionAsideMenu() {
    let menuLeftCoord = main.getBoundingClientRect().left
    if (window.innerWidth >= 1120) {
      menu.style.left = menuLeftCoord + 'px'
      menuHeader.style.left = menuLeftCoord + 'px'
    } else {
      menu.style.left = null
      menuHeader.style.left = null
    }
  }

  positionAsideMenu()
  mobileSlider()

  window.addEventListener('resize', () => {
    mobileSlider()
    positionAsideMenu()
  })

  // Sliders shrinking buttons
	shrinkBtns.forEach(el => {
		el.addEventListener('click', () => {
			el.previousElementSibling.classList.toggle('slider--minimized')
			if (el.querySelector('span').textContent === 'Показать всё') {
				el.querySelector('span').textContent = 'Скрыть'
				el.classList.add('brands__link--open')
			} else {
				el.querySelector('span').textContent = 'Показать всё'
				el.classList.remove('brands__link--open')
			}
		})
	})

  // Menu opening & closing on mobile devices
  burger.addEventListener('click', () => {
		menu.classList.add('menu--open')
		document.body.classList.add('_lock')
	})

	menuCover.addEventListener('click', () => {
		menu.classList.remove('menu--open')
		document.body.classList.remove('_lock')
	})

	menuBurger.addEventListener('click', () => {
		menu.classList.remove('menu--open')
		document.body.classList.remove('_lock')
	})
})
