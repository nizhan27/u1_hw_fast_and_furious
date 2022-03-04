let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`
]

window.onload = function (event) {
  // Random quote of the day generator
  const randomQuote = function () {
    document.querySelector('#quote-of-the-day').textContent = `"${
      quotes[Math.floor(Math.random() * quotes.length)]
    }"`
  }
  randomQuote()

  // Do all of your work inside the window.onload function (in other words, here!)

  // Part 1
  document.querySelector('#main-title').innerText = 'Welcome to my homepage'

  // Part 2
  document.querySelector('body').style.background = 'white'
  // Part 3
  const list = document.querySelector('#favorite-things')
  list.removeChild(list.children[5])

  // Part 4
  document.querySelector('.special-title').style.fontSize = '2rem'
  document.querySelector('#dom-adventures', '.special-title').style.fontSize =
    '2rem'

  // Part 5
  const race = document.querySelector('#past-races')
  race.removeChild(race.children[3])
  // Part 6
  const node = document.createElement('li')
  node.textContent = 'Chengdu'
  document.querySelector('#past-races').appendChild(node)
  // Part 7
  const div = document.createElement('div')
  div.className = 'blog-post purple'
  document.querySelector('.main').appendChild(div)

  const header = document.createElement('h1')
  header.textContent = 'Chengdu'

  const para = document.createElement('p')
  para.textContent = 'I drove my car accross a river!'

  div.appendChild(header)
  div.appendChild(para)
}
