const btnUpdate = document.querySelector(".btn-main")
const btnHide = document.querySelector("#btn-toggle")
const items = document.querySelectorAll('li')


btnUpdate.addEventListener("click", () => {
  btnUpdate.style.backgroundColor = "#1bc44b"
  btnUpdate.textContent = "Updated"
})

btnHide.addEventListener('click', () => {
  btnHide.style.backgroundColor = "#E4E3E5"
  btnHide.style.color = 'grey'
  btnHide.textContent = "Hidden"
})

for (let i=0; i < items.length; i++) {
  items[i].style.color = 'lime'
}



