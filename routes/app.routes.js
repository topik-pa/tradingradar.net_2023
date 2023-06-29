module.exports = app => {
  app.get('/', (req, res) => {
    res.render('home', { id: 'home', title: 'Home', url: req.url })
  })
  app.get('/titoli', (req, res) => {
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
