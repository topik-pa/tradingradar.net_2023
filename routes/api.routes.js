module.exports = app => {
  const api = require('../controllers/api.controller.js')
  const router = require('express').Router()

  const GET = [
    '/stocks/perf1M',
    '/stocks/perf1Y',
    '/stocks/lastJudgment',
    '/stocks/lastDivDate',
    '/stocks/divYield',
    '/custom',
    '/info/:isin',
    '/analysis/:isin',
    '/news/:isin'
  ]

  // GET
  router.get(GET, api.get)

  app.use('/api', router)
}
