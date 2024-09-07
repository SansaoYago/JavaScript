function enviar() {
   let nome = document.querySelector("#nome")
   let resp = document.querySelector("#res")
   let preço = document.querySelector("#pre")
   let des = ''
   
   if (nome.value.length == 0 || preço.value.length == 0) {
      window.alert("[ERRO] Faltam dados para concluir o processo!")
   } else {
      let sexo = document.getElementsByName("sexo")
      let genero = ''
      let img = document.createElement('img')
      img.setAttribute('id', 'foto')
      if (sexo[0].checked) {
         let des = (5 / 100) * preço.value
         let preçoFinal = preço.value - des
         genero = 'Homem'
         img.setAttribute('src', 'imagens/homem.png')
         resp.innerHTML = `Para ${genero} será aplicado o desconto de 5% <br> O cliente ${nome.value} vai pagar ${preçoFinal.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})} <br>`
      } else if (sexo[1].checked) { 
         let des = (13 / 100) * preço.value
         let preçoFinal = preço.value - des
         genero = 'Mulher'
         img.setAttribute('src', 'imagens/mulher.png')
         resp.innerHTML = `Para ${genero} será aplicado o desconto de 13% <br> A cliente ${nome.value} vai pagar ${preçoFinal.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})} <br>`
      }
      resp.style.textAlign = 'center'
      resp.appendChild(img)
      
   }
   
   
}