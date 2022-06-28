const btnCreate = document.querySelector('.btn-main')
const btnToggle = document.querySelector('.btn-toggle')
const btnRemove = document.querySelector('.btn-remove')
const taskList = document.querySelector('.list-container ul')
const listItems = taskList.children


function attachRemoveButton(li) {
  let remove = document.createElement('button')
  remove.className = 'remove'
  remove.textContent = "Remove"
  li.appendChild(remove)
}
for( let i = 0; i < listItems.length; i++ ) {
  attachRemoveButton(listItems[i])
}

  // taskList.addEventListener('mouseover', (event) => {
  //   if( event.target.tagName === 'LI' ) {
  //     event.target.textContent = event.target.textContent.toUpperCase()      
  //   }
  // })

btnToggle.addEventListener("click", () => {
  const listContainer = document.querySelector(".list-container")
  if (listContainer.style.display === "none") {
    btnToggle.textContent = "Hide List"
    listContainer.removeAttribute("style")
  } else {
    btnToggle.textContent = "Show List"
    listContainer.style.display = "none"
  }
})

btnCreate.addEventListener("click", () => {
  let ul = document.getElementsByTagName("ul")[0]
  const input = document.querySelector(".input-main")
  let li = document.createElement("li")
  li.textContent = input.value
  attachRemoveButton(li)
  ul.appendChild(li)
  input.value = ""
})

btnRemove.addEventListener('click', () => {
  const lastItem = document.querySelector('li:last-child')
  lastItem.remove()
})