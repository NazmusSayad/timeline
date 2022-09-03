const timelineContainer = document.getElementById('timeline')
const article = () => {
  const element = document.createElement('article')
  element.className = 'container'
  element.innerHTML = `<section class="item"></section>`
  timelineContainer.appendChild(element)
  return element
}

const articles = Array(300).fill(null).map(article)

let observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      console.log(entry)

      entry.target.classList.toggle('active', entry.isIntersecting)
    })
  },
  {
    threshold: 0.25,
  }
)

articles.forEach(current => {
  observer.observe(current)
})
