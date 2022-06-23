const btnCreate = document.querySelector('.btn-main')
const btnToggle = document.querySelector('.btn-toggle')


btnCreate.addEventListener("click", () => {
  const input = document.querySelector(".input-main")
  const list = document.querySelector('ul')
  const item = document.createElement('li')
  
  item.textContent = input.value
  input.value = ""
  list.prepend(item)
})

btnToggle.addEventListener("click", () => {
  const listContainer = document.querySelector('.list-container')

  if (listContainer.style.display === 'none') {
    btnToggle.textContent = 'Hide List'
    listContainer.removeAttribute('style')
  } else {
    btnToggle.textContent = "Show List"
    listContainer.style.display = 'none'
  }
})
