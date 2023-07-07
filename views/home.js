import proxyFetch from '../../../scripts/proxyFetch.js'
import perfMonth from '../components/home/perf-month/perf-month.js'
import perfYear from '../components/home/perf-year/perf-year.js'
import upTrends from '../components/home/uptrends/uptrends.js'
import downTrends from '../components/home/downtrends/downtrends.js'
import upInversion from '../components/home/upinversion/upinversion.js'
import downInversion from '../components/home/downinversion/downinversion.js'

const statuses = ['idle', 'loading', 'success', 'error']
const custApiElements = document.querySelectorAll('#downinversion, #upinversion, #downtrends, #uptrends')

async function callCustomApi () {
  try {
    const res = await proxyFetch('/api/custom')
    updateUI(statuses[2])
    upTrends.init(res.body.uptrends)
    downTrends.init(res.body.downtrends)
    upInversion.init(res.body.tiup)
    downInversion.init(res.body.tidown)
  } catch (error) {
    console.error(error)
    updateUI(statuses[3])
  }
}

function updateUI (status) {
  for (const $elem of custApiElements) {
    $elem.classList.remove(...statuses)
    $elem.classList.add(status)
  }
}

export const home = {
  init: async () => {
    /*perfMonth.init()
    perfYear.init()
    callCustomApi()*/
  }
}
