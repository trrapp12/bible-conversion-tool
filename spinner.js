(() => {
  console.log('entered spinner.js')

  const spinner = document.getElementById('input-spin');

  function addSpin (el) {
    el.style.animationName = 'spin'
    el.style.animationDuration = '3s';
    console.log('spinner added')
  }

  function removeSpin (el) {
    el.style.animationName = ''
    el.style.animationDuration = '';
    console.log('spinner removed')
  }

  window.addEventListener('keydown', () => {
    console.log('key down')
    addSpin(spinner); 
    setTimeout(() => { removeSpin(spinner)}, 3000)
  })
})();