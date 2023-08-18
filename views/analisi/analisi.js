import stockInfo from '../../components/analisi/stock_info/stock_info.js'
import stockAlerts from '../../components/analisi/stock_alerts/stock_alerts.js'
// import follow from '../../components/shared/follow/follow.js'

export const analisi = {
  init: async () => {
    const stockInfoData = await stockInfo.init()
    await stockAlerts.init(stockInfoData)
    // follow.init()
  }
}
