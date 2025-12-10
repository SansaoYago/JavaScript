const frm = document.querySelector("form")
const resp1 = document.getElementById("resp1")
const resp2 = document.getElementById("resp2")

frm.addEventListener("submit", (e)=> {
    e.preventDefault()

    const A = Number(frm.inLadoA.value)
    const B = Number(frm.inLadoB.value)
    const C = Number(frm.inLadoC.value)
    let tipo

    const Lados = A > (B + C) || B > (A + C) || C > (A + B) ? "Não pode formar um Triângulo" : "Pode Formar um Triâgulo"

    

    if (Lados === "Pode Formar um Triâgulo") {
        if (A == B && B == C) {
            tipo = "Equilátero"
        } else if ((A == B && A != C) || (A == C && A != B) || (B == C && B != A)) {
            tipo = "Isósceles"
        } else {
            tipo = "Escaleno"
        }
        resp1.textContent = Lados
        resp2.textContent = `Tipo: ${tipo}`
    } else {
        resp1.textContent = Lados
        resp2.textContent = ``
    }
    
})