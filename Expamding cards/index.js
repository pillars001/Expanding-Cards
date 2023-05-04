const enlarge = document.querySelectorAll(".panel")

enlarge.forEach((enl) => {
  enl.addEventListener("click", () => {
    removeClassList()
    enl.classList.add("active")
  })
})

function removeClassList() {
  enlarge.forEach((enl) => {
    enl.classList.remove("active")
  })
}
