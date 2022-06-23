const btnUpdate = document.querySelector(".btn-main")
const btnHide = document.querySelector("#btn-toggle")


btnUpdate.addEventListener("click", () => {
  const headline = document.getElementById('headline')
  const input = document.querySelector('.input-main')
  btnUpdate.style.backgroundColor = "#1bc44b"
  btnUpdate.textContent = "Updated"
  headline.textContent = input.value
  input.value = ''
})

btnHide.addEventListener('click', () => {
  btnHide.style.backgroundColor = "#E4E3E5"
  btnHide.style.color = 'grey'
  btnHide.textContent = "Hidden"
})



