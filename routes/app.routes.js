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

function stockPageProxy (req, res, next) {
  if (!req.query.isin) res.render('404/404', { id: 'err404', title: 'Error 404' })
  const { name, code } = getStockNameAndCodeFromIsin(req.query.isin)
  if (!code) res.render('404/404', { id: 'err404', title: 'Error 404' })
  req.name = name
  req.code = code
  next()
}

function getStockNameAndCodeFromIsin (isin) {
  if (!stocks.length) return
  for (const stock of stocks) {
    if (stock.isin === isin) {
      return {
        name: stock.name,
        code: stock.code
      }
    }
  }
}

module.exports = app => {
  // Home
  app.get('/', (req, res) => {
    res.render('home', { id: 'home', title: 'Home', url: req.url })
  })
  // Titoli
  app.get('/titoli', (req, res) => {
    res.locals.stocks = stocks
    const breadcrumbs = [
      {
        name: 'Titoli'
      }
    ]
    res.render('titoli/titoli', { id: 'titoli', title: 'Titoli', url: req.url, breadcrumbs })
  })
  // Targets and Judgements
  app.get('/target-price-raccomandazioni', (req, res) => {
    const breadcrumbs = [
      {
        name: 'Target Price e Raccomandazioni'
      }
    ]
    res.render('target/target', { id: 'target', title: 'Target Price e Raccomandazioni', url: req.url, breadcrumbs })
  })
  // Dividends
  app.get('/dividendi', (req, res) => {
    const breadcrumbs = [
      {
        name: 'Dividendi'
      }
    ]
    res.render('dividendi/dividendi', { id: 'dividendi', title: 'Dividendi', url: req.url, breadcrumbs })
  })
  // Stock page
  app.get('/analisi/:stock', stockPageProxy, (req, res) => {
    const stock = {
      isin: req.query.isin,
      name: req.name,
      encodedName: req.params.stock,
      code: req.code
    }
    const breadcrumbs = [
      {
        name: 'Titoli',
        url: '/titoli'
      },
      {
        name: stock.name
      }
    ]
    res.render('analisi/analisi', { id: 'analysis', title: 'Analisi titolo ' + stock.name, url: req.url, stock, breadcrumbs })
  })
  // Landing: performance month
  app.get('/performance-mensili', (req, res) => {
    const breadcrumbs = [
      {
        name: 'Performance mensili'
      }
    ]
    res.render('landing/mensili', { id: 'perf-month-view', title: 'Performance mensili', url: req.url, breadcrumbs })
  })
  // Landing: performance year
  app.get('/performance-annuali', (req, res) => {
    const breadcrumbs = [
      {
        name: 'Performance annuali'
      }
    ]
    res.render('landing/annuali', { id: 'perf-year-view', title: 'Performance annuali', url: req.url, breadcrumbs })
  })
  // Landing: uptrends
  app.get('/azioni-italiane-rialziste', (req, res) => {
    const breadcrumbs = [
      {
        name: 'Titoli azionari in trend rialzista'
      }
    ]
    res.render('landing/rialziste', { id: 'uptrend-view', title: 'Titoli azionari in trend rialzista', url: req.url, breadcrumbs })
  })
  // Landing: downtrends
  app.get('/azioni-italiane-ribassiste', (req, res) => {
    const breadcrumbs = [
      {
        name: 'Titoli azionari in trend ribassista'
      }
    ]
    res.render('landing/ribassiste', { id: 'downtrend-view', title: 'Titoli azionari in trend ribassista', url: req.url, breadcrumbs })
  })
  // Landing: trend inv up
  app.get('/azioni-inversione-rialzista', (req, res) => {
    const breadcrumbs = [
      {
        name: 'Titoli azionari in inversione rialzista'
      }
    ]
    res.render('landing/inver-rialzista', { id: 'upinversion-view', title: 'Titoli azionari in inversione rialzista', url: req.url, breadcrumbs })
  })
  // Landing: trend inv down
  app.get('/azioni-inversione-ribassista', (req, res) => {
    const breadcrumbs = [
      {
        name: 'Titoli azionari in inversione ribassista'
      }
    ]
    res.render('landing/inver-ribassista', { id: 'downinversion-view', title: 'Titoli azionari in inversione ribassista', url: req.url, breadcrumbs })
  })
  // Privacy
  app.get('/privacy', (req, res) => {
    const breadcrumbs = [
      {
        name: 'privacy'
      }
    ]
    res.render('privacy/privacy', { id: 'privacy', title: 'Privacy', url: req.url, breadcrumbs })
  })
}
