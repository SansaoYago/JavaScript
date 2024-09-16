function enviar() {
    let num = window.prompt("Quantas pessoas vão participar? ")
    let c = 1
    let Nome = []
    let resp = document.querySelector("h2")
    
    while (c <= num) {
        Nome[c] = window.prompt(`${c}° Nome: `)
        c++
    }

    resp.innerHTML = `${Nome[1]} <br> ${Nome[2]}`
}
