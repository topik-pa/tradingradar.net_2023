import proxyFetch from '../../../scripts/proxyFetch.js'
let $root; let statuses; const url = 'api/stocks/perf1M/?order=desc'

async function callTheApi () {
  try {
    const response = await proxyFetch(url)
    updateUI(statuses[2])
    printData(response.body.slice(0, 10), 'ul.up')
    printData(response.body.reverse().slice(0, 10), 'ul.down')
  } catch (error) {
    console.error(error)
    updateUI(statuses[3])
  }
}

function updateUI (status) {
  $root.classList.remove(...statuses)
  $root.classList.add(status)
}

function printData (stocks, target) {
  const $ul = $root.querySelector(target)
  for (let i = 0; i < stocks.length; i++) {
    const a = stocks[i]
    const $li = document.createElement('li')
    const $a = document.createElement('a')
    $a.innerText = a.name
    $a.title = a.name
    $a.href = `/analisi/${encodeURI(a.name?.toLowerCase().replace(/ /g, '-'))}?isin=${a.isin}`
    const $span = document.createElement('span')
    $span.innerText = a.perf1M.value || ''
    $li.appendChild($a)
    $li.appendChild($span)
    $ul.appendChild($li)
  }
}

const perfMonth = {
  init: () => {
    console.log('perf-month')
    $root = document.getElementById('perf-month')
    statuses = ['idle', 'loading', 'success', 'error']
    updateUI(statuses[1])
    callTheApi()
  }
}

export default perfMonth
