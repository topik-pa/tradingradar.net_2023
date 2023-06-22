module.exports = app => {
  const api = require('../controllers/api.controller.js')
  const router = require('express').Router()

  // GET
  router.get('/stocks/perf1M', api.get)
  router.get('/stocks/perf1Y', api.get)
  router.get('/custom', api.get)

  app.use('/api', router)
}
