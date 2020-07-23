;(function () {
  const body = document.querySelector('body')
  const button = document.querySelector('button')
  const colors = [
    '#ffffdd',
    '#fccbcb',
    '#ffeadb',
    '#f7c5a8',
    '#ff9a76',
    '#e8505b',
    '#cbeaed',
    '#bbe1fa',
    '#d3dbff',
  ]

  function changeBackground() {
    const bodyColorIndex = parseInt(
      Math.random() * colors.length
    )
    const buttonColorIndex = parseInt(
      Math.random() * colors.length
    )
    body.style.backgroundColor = colors[bodyColorIndex]
    button.style.backgroundColor = colors[buttonColorIndex]
  }

  button.addEventListener('click', changeBackground)

  changeBackground()
})()
