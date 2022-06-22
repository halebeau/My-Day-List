const btnUpdate = document.getElementById("btn-main")
const btnHide = document.getElementById("btn-toggle")

btnUpdate.addEventListener("click", () => {
  btnUpdate.style.backgroundColor = "green"
  btnUpdate.textContent = "Updated"
})

btnHide.addEventListener('click', () => {
  btnHide.style.backgroundColor = "#E4E3E5"
  btnHide.style.color = 'grey'
  btnHide.textContent = "Hidden"
})




