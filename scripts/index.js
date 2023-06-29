import mainMenu from '../components/shared/header/main-menu/main-menu.js'
import cookieLayer from '../components/shared/cookie_layer/cookie_layer.js'
import gotoTop from '../components/shared/goto_top/goto_top.js'
import header from '../components/shared/header/header.js'

mainMenu.toggleMobileMenu()
cookieLayer.init()
gotoTop.init()
header.init()

// Go to the url hash element if present
function goToHash () {
  if (location.hash) {
    const $target = document.getElementById(location.hash.replace('#', ''))
    if ($target) {
      setTimeout(() => {
        $target.scrollIntoView({ behavior: 'smooth' })
      }, 500)
    }
  }
}
goToHash()

// Go to the relative hash section
function goToSection () {
  const $anchors = document.querySelectorAll('a[data-target]')

  for (const anchor of $anchors) {
    anchor.addEventListener('click', (e) => {
      if (e.target.href) return
      e.preventDefault()
      const $target = document.getElementById(anchor.dataset.target)
      if ($target) $target.scrollIntoView({ behavior: 'smooth' })
    })
  }
}
goToSection()

if (document.querySelector('body#home')) {
  import('../views/home.js').then((module) => {
    module.home.init()
  })
}
if (document.querySelector('body#titoli')) {
  import('../views/titoli/titoli.js').then((module) => {
    module.titoli.init()
  })
}
if (document.querySelector('body#target')) {
  import('../views/target/target.js').then((module) => {
    module.target.init()
  })
}
if (document.querySelector('body#dividendi')) {
  import('../views/dividendi/dividendi.js').then((module) => {
    module.dividendi.init()
  })
}
if (document.querySelector('body#perf-month-view')) {
  import('../views/landing/mensili.js').then((module) => {
    module.perfMonthView.init()
  })
}
if (document.querySelector('body#perf-year-view')) {
  import('../views/landing/annuali.js').then((module) => {
    module.perfYearView.init()
  })
}
if (document.querySelector('body#uptrend-view')) {
  import('../views/landing/rialziste.js').then((module) => {
    module.upTrendsView.init()
  })
}
if (document.querySelector('body#privacy')) {
  import('../views/privacy/privacy.js').then((module) => {
    module.privacy.init()
  })
}
if (document.querySelector('body#err404')) {
  import('../views/404/404.js').then((module) => {
    module.err404.init()
  })
}

