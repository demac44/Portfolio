const arrow = document.querySelector(".logo-drop2")
const arrow2 = document.querySelector(".logo-drop3")
const proj_titles = document.querySelectorAll(".proj-title")

document.querySelector('.contact-btn').addEventListener('click', ()=>window.scroll({left: 0, top: document.body.scrollHeight, behavior: "smooth"}))

// proj_titles.forEach(title => {
//     title.style.border = "2px solid " + "#" + ((1<<24)*Math.random() | 0).toString(16)
// })

setTimeout(() => {
    arrow.classList.remove("logo-drop2")
    arrow.classList.add("logo-drop3")
    arrow.addEventListener("click", () => {
        window.scroll({left:0, top: window.innerHeight, behavior: "smooth"})
    })
}, 2400)