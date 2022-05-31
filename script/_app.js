const articles = [...document.getElementById("timeLine").children]

let observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      console.log(entry)

      entry.target.classList.toggle("active", entry.isIntersecting)
    })
  },
  {
    threshold: 0.25,
  }
)

articles.forEach((current) => {
  observer.observe(current)
})
