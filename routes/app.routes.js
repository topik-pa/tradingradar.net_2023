const https = require('https')
let stocks = []

function getStocksList () {
  const options = {
    method: 'GET',
    hostname: 'tradingradar.p.rapidapi.com',
    port: null,
    path: '/api/stocks',
    headers: {
      'x-rapidapi-host': 'tradingradar.p.rapidapi.com',
      'x-rapidapi-key': process.env.X_RAPIDAPI_KEY,
      useQueryString: true
    }
  }
  const request = https.request(options, function (response) {
    const chunks = []
    response.on('data', function (chunk) {
      chunks.push(chunk)
    })
    response.on('end', function () {
      const body = Buffer.concat(chunks).toString()
      try {
        stocks = JSON.parse(body)
      } catch (error) {
        console.error(error)
      }
    })
  })
  request.end()
  request.on('error', error => {
    console.error(error)
  })
}
getStocksList()

function hasIsin (req, res, next) {
  if (req.query.isin) return next()
  res.render('404/404', { id: 'err404', title: 'Error 404' })
}

function getStockNameFromIsin (isin) {
  if (!stocks.length) return
  for (const stock of stocks) {
    if (stock.isin === isin) {
      return stock.name
    }
  }
}
function getStockCodeFromIsin (isin) {
  if (!stocks.length) return
  for (const stock of stocks) {
    if (stock.isin === isin) {
      return stock.code
    }
  }
}

module.exports = app => {
  app.get('/', (req, res) => {
    res.render('home', { id: 'home', title: 'Home', url: req.url })
  })
  app.get('/titoli', (req, res) => {
    res.locals.stocks = stocks
    const breadcrumbs = [
      {
        name: 'Titoli'
      }
    ]
    res.render('titoli/titoli', { id: 'titoli', title: 'Titoli', url: req.url, breadcrumbs })
  })
  app.get('/target-price-raccomandazioni', (req, res) => {
    const breadcrumbs = [
      {
        name: 'Target Price e Raccomandazioni'
      }
    ]
    res.render('target/target', { id: 'target', title: 'Target Price e Raccomandazioni', url: req.url, breadcrumbs })
  })
  app.get('/dividendi', (req, res) => {
    const breadcrumbs = [
      {
        name: 'Dividendi'
      }
    ]
    res.render('dividendi/dividendi', { id: 'dividendi', title: 'Dividendi', url: req.url, breadcrumbs })
  })

  app.get('/analisi/:stock', hasIsin, (req, res) => {
    const code = getStockCodeFromIsin(req.query.isin)
    if (!code) {
      res.render('404/404', { id: 'err404', title: 'Error 404' })
      return
    }
    const name = getStockNameFromIsin(req.query.isin) || ''
    const stock = {
      isin: req.query.isin,
      name: name,
      encodedName: req.params.stock,
      code: code
    }
    const breadcrumbs = [
      {
        name: 'Titoli',
        url: '/titoli'
      },
      {
        name: name
      }
    ]
    res.render('analisi/analisi', { id: 'analysis', title: 'Analisi titolo ' + name, url: req.url, stock, breadcrumbs })
  })

  app.get('/performance-mensili', (req, res) => {
    const breadcrumbs = [
      {
        name: 'Performance mensili'
      }
    ]
    res.render('landing/mensili', { id: 'perf-month-view', title: 'Performance mensili', url: req.url, breadcrumbs })
  })
  app.get('/performance-annuali', (req, res) => {
    const breadcrumbs = [
      {
        name: 'Performance annuali'
      }
    ]
    res.render('landing/annuali', { id: 'perf-year-view', title: 'Performance annuali', url: req.url, breadcrumbs })
  })
  app.get('/azioni-italiane-rialziste', (req, res) => {
    const breadcrumbs = [
      {
        name: 'Titoli azionari in trend rialzista'
      }
    ]
    res.render('landing/rialziste', { id: 'uptrend-view', title: 'Titoli azionari in trend rialzista', url: req.url, breadcrumbs })
  })
  app.get('/azioni-italiane-ribassiste', (req, res) => {
    const breadcrumbs = [
      {
        name: 'Titoli azionari in trend ribassista'
      }
    ]
    res.render('landing/ribassiste', { id: 'downtrend-view', title: 'Titoli azionari in trend ribassista', url: req.url, breadcrumbs })
  })
  app.get('/azioni-inversione-rialzista', (req, res) => {
    const breadcrumbs = [
      {
        name: 'Titoli azionari in inversione rialzista'
      }
    ]
    res.render('landing/inver-rialzista', { id: 'upinversion-view', title: 'Titoli azionari in inversione rialzista', url: req.url, breadcrumbs })
  })
  app.get('/azioni-inversione-ribassista', (req, res) => {
    const breadcrumbs = [
      {
        name: 'Titoli azionari in inversione ribassista'
      }
    ]
    res.render('landing/inver-ribassista', { id: 'downinversion-view', title: 'Titoli azionari in inversione ribassista', url: req.url, breadcrumbs })
  })
  app.get('/privacy', (req, res) => {
    const breadcrumbs = [
      {
        name: 'privacy'
      }
    ]
    res.render('privacy/privacy', { id: 'privacy', title: 'Privacy', url: req.url, breadcrumbs })
  })
}
