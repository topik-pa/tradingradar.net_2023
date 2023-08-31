const banner = {
  init: () => {
    // eslint-disable-next-line no-new, no-undef
    const mySiema = new Siema({
      duration: 200,
      easing: 'ease-out',
      perPage: 1,
      startIndex: 0,
      draggable: true,
      loop: true
    })
    const interval = setInterval(() => {
      mySiema.next()
    }, 5000)
    const $root = document.getElementById('main-banner')
    $root.querySelector('.next').addEventListener('click', () => {
      clearInterval(interval)
      mySiema.next()
    })
    $root.querySelector('.prev').addEventListener('click', () => {
      clearInterval(interval)
      mySiema.prev()
    })
  }
}

export default banner
