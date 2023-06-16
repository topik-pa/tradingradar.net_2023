import perfMonth from '../components/home/perf-month/perf-month.js'

export const home = {
  init: async () => {
    console.log('Home page')
    const css = await import('./home.css', {assert: { type: 'css' }})
    document.adoptedStyleSheets = [css.default]
    const css2 = await import('../components/home/perf-month/perf-month.css', {assert: { type: 'css' }})
    document.adoptedStyleSheets = [css2.default]
    perfMonth.init()
  }
}
