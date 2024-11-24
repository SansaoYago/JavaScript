const fmr = document.querySelector("form")
const resp = document.querySelector("h3")

fmr.addEventListener("submit", (e) => {
    e.preventDefault()

    //Dados de Entrada
    const A = Number(fmr.ladoA.value)
    const B = Number(fmr.ladoB.value)
    const C = Number(fmr.ladoC.value)
    let tipo

    //Processamento
    if (A == B && B == C) {
        tipo = "Equilatero"
    } else if (A == B && A != C || A == C && A != B || B == C && B != A) {
        tipo = "Isósceles"
    } else if (A != B && B != C && C != A) {
        tipo = "Escaleno"
    }
    //Dados de Saída
    if (A > B + C || B > A + C || C > A + B) {
        resp.innerText = "Não pode formar um Triângulo!"
    } else {
        resp.innerText = `Pode formar um Triângulo ${tipo}`
    }
    
})