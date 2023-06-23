import perfMonth from '../components/home/perf-month/perf-month.js'
import perfYear from '../components/home/perf-year/perf-year.js'
import upTrends from '../components/home/uptrends/uptrends.js'
import downTrends from '../components/home/downtrends/downtrends.js'
import upInversion from '../components/home/upinversion/upinversion.js'
import downInversion from '../components/home/downinversion/downinversion.js'
import style from './home.css' assert { type: 'css' }
import style2 from '../components/home/perf-month/perf-month.css' assert { type: 'css' }
import style3 from '../components/home/perf-year/perf-year.css' assert { type: 'css' }
import style4 from '../components/home/uptrends/uptrends.css' assert { type: 'css' }
import style5 from '../components/home/downtrends/downtrends.css' assert { type: 'css' }
import style6 from '../components/home/socials/socials.css' assert { type: 'css' }
import style7 from '../components/home/upinversion/upinversion.css' assert { type: 'css' }
import style8 from '../components/home/downinversion/downinversion.css' assert { type: 'css' }

export const home = {
  init: async () => {
    console.log('Home page')
    document.adoptedStyleSheets = [style, style2, style3, style4, style5, style6, style7, style8];
    // shadowRoot.adoptedStyleSheets = [style, style2, style3];
    //perfMonth.init()
    //perfYear.init()
    //upTrends.init()
    //downTrends.init()
    //upInversion.init()
    downInversion.init()
  }
}
