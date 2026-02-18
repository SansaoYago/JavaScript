const form = document.querySelector("form")
const out = document.querySelector("h3")

form.addEventListener("submit", (e) => {
    e.preventDefault()

    const nome = form.inNome.value.trim()

    out.textContent = nome

    if (!nome.includes(" ")) {
        alert("Informe o nome completo...")
        return
    }

    const priEsp = nome.indexOf(" ")
    const ultEsp = nome.lastIndexOf(" ")
    // Copia o nome e sobrenome usando parâmetros do substr()
    const cracha = nome.substr(0, priEsp) + nome.substr(ultEsp)

    out.textContent = cracha
})