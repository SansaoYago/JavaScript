function enviar() {
   let ano = window.document.getElementById("ano")
   let Ano = Number(ano.value)
   let agora = new Date()
   let Year = agora.getFullYear()
   let resp = window.document.getElementById("res")
   if (Ano > 365) {
      resp.innerHTML = `O ano ${Year} é um ano Bissexto!`
   } else {
      resp.innerHTML = `O ano ${Year} não é um ano Bissexto!`
   }
}