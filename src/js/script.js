document.addEventListener('DOMContentLoaded', () => {
  const shrinkBtn = document.getElementById('shrink-btn')
  const sliderContainer = document.querySelector('.slider')
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
      slider = new Swiper(document.querySelector('.slider'), {
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

  // Mainscreen shrinking button for the partners slider
  shrinkBtn.addEventListener('click', () => {
    sliderContainer.classList.toggle('slider--minimized')
    if (shrinkBtn.querySelector('span').textContent === 'Показать всё') {
      shrinkBtn.querySelector('span').textContent = 'Скрыть'
      shrinkBtn.classList.add('brands__link--open')
    } else {
      shrinkBtn.querySelector('span').textContent = 'Показать всё'
      shrinkBtn.classList.remove('brands__link--open')
    }
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
