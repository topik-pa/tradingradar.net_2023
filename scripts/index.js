import mainMenu from '../components/shared/header/main-menu/main-menu.js'
import cookieLayer from '../components/shared/cookie_layer/cookie_layer.js'
import gotoTop from '../components/shared/goto_top/goto_top.js'
import header from '../components/shared/header/header.js'
import banner from '../components/home/main-banner/main-banner.js'

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
      const $target = document.getElementById(anchor.dataset.target)
      if ($target) {
        e.preventDefault()
        $target.scrollIntoView({ behavior: 'smooth' })
      }
    })
  }
}
goToSection()

if (document.querySelector('body#home')) {
  import('../views/home.js').then((module) => {
    module.home.init()
    banner.init()
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
if (document.querySelector('body#downtrend-view')) {
  import('../views/landing/ribassiste.js').then((module) => {
    module.downTrendsView.init()
  })
}
if (document.querySelector('body#upinversion-view')) {
  import('../views/landing/inver-rialzista.js').then((module) => {
    module.upInversionView.init()
  })
}
if (document.querySelector('body#downinversion-view')) {
  import('../views/landing/inver-ribassista.js').then((module) => {
    module.downInversionView.init()
  })
}
if (document.querySelector('body#contatti')) {
  import('../views/contatti/contatti.js').then((module) => {
    module.contatti.init()
  })
}
if (document.querySelector('body#privacy')) {
  import('../views/privacy/privacy.js').then((module) => {
    module.privacy.init()
  })
}
if (document.querySelector('body#analysis')) {
  import('../views/analisi/analisi.js').then((module) => {
    module.analisi.init()
  })
}
if (document.querySelector('body#err404')) {
  import('../views/404/404.js').then((module) => {
    module.err404.init()
  })
}
