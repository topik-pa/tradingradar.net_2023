export const target = {
  init: async () => {
    console.log('Target')
    const css = await import('./target.css', {assert: { type: 'css' }})
    document.adoptedStyleSheets = [css.default]
  }
}
