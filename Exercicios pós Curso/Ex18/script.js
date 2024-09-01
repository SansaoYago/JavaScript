function enviar() {
   let num = window.document.querySelector("#num")
   let Num = Number(num.value)
   let resp = window.document.querySelector("#res")
   if (Num % 2 == 0) {
      resp.innerHTML = `O número ${Num} é par`
   } else { resp.innerHTML = `O número ${Num} é Impar`}
}