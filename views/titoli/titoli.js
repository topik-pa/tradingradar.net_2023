export const titoli = {
  init: async () => {
    console.log('Titoli')
    const css = await import('./titoli.css', {assert: { type: 'css' }})
    document.adoptedStyleSheets = [css.default]
  }
}
