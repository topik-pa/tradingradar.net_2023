export const home = {
  init: async () => {
    console.log('Home page')
    const css = await import('./home.css', {assert: { type: 'css' }})
    document.adoptedStyleSheets = [css.default]
  }
}
