const form = document.querySelector("form")
const resp = document.querySelector("span")

form.addEventListener("submit", (e) => {
    e.preventDefault()
    const fruta = form.inFruta.value.toUpperCase()

    let palavra = ""

    for (const letra of fruta) {
        if (letra == fruta.charAt(0)) {
            palavra += fruta.charAt(0)
        } else {
            palavra += "_"
        }
    }

    resp.innerText = palavra
    form.inFruta.value = "*".repeat(fruta.length)

})