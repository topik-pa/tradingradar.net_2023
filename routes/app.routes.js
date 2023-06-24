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
  app.get('/privacy', (req, res) => {
    const breadcrumbs = [
      {
        name: 'privacy'
      }
    ]
    res.render('privacy/privacy', { id: 'privacy', title: 'Privacy', url: req.url, breadcrumbs })
  })
}
