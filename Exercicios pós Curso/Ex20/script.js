function enviar() {
   let ano = window.document.querySelector("#ano")
   let Ano = Number(ano.value)
   let resp = window.document.querySelector("#res")
   let agora = new Date()
   let AnoAtual = agora.getFullYear()
   let idade = AnoAtual - Ano
   if (idade < 17) {
      resp.innerHTML = `Em ${AnoAtual}, Você ainda não pode se alistar, pois ainda lhe falta ${18 - idade} anos para ter a idade suficiente para o alistamento militar`
   } else if (idade == 18) {
      resp.innerHTML = `Você está na idade certa para o alistamento`
   } else if (idade > 19) {
      resp.innerHTML = `Já se passaram ${idade - 18} anos para o alistamento militar`
   } else if (idade == 19) {
      resp.innerHTML = `Já se passaram ${idade - 18} ano para o alistamento militar`
   } else if (idade == 17) {
      resp.innerHTML = `Em ${AnoAtual}, Você ainda não pode se alistar, pois ainda lhe falta ${18 - idade} ano para ter a idade suficiente para o alistamento militar`
   }
   
}