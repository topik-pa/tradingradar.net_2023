export const dividendi = {
  init: async () => {
    console.log('Dividendi')
    const css = await import('./dividendi.css', {assert: { type: 'css' }})
    document.adoptedStyleSheets = [css.default]
  }
}
