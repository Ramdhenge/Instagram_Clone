let h = document.getElementsByClassName("like")
for (let i = 0; i < h.length; i++) {
    h[i].addEventListener("click", () => {
        h[i].classList.toggle("fa-solid")
        h[i].classList.toggle("red")
    })
}

let s = document.getElementsByClassName("save")
for (let i = 0; i < s.length; i++) {
    s[i].addEventListener("click", () => {
        s[i].classList.toggle("fa-solid")
    })
}