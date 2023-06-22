import perfMonth from '../components/home/perf-month/perf-month.js'
import perfYear from '../components/home/perf-year/perf-year.js'
import style from './home.css' assert { type: 'css' };
import style2 from '../components/home/perf-month/perf-month.css' assert { type: 'css' };
import style3 from '../components/home/perf-year/perf-year.css' assert { type: 'css' };

export const home = {
  init: async () => {
    console.log('Home page')
    document.adoptedStyleSheets = [style, style2, style3];
    // shadowRoot.adoptedStyleSheets = [style, style2, style3];
    perfMonth.init()
    perfYear.init()
  }
}
