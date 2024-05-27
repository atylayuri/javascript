function verificar() {
   var data = new Date()
   var ano = data.getFullYear()
   var fano = document.getElementById('txtano')
   var res = document.querySelector('div#res')
   if (fano.value == 0 || Number(fano.value > ano)) {
      window.alert('[ERRO] Verifique os dados e tente novamente!')
   } else {
      var fsex = document.getElementsByName('radsex')
      var idade = ano - Number(fano.value)
      var gênero = ''
      var img = document.createElement('img')
      img.setAttribute('id', 'foto')
      if (fsex[0].checked) {
         gênero = 'Masculino'
         if (idade >= 0 && idade < 10) {
            // Criança
            img.setAttribute('src', 'criança-M.png')
         } else if (idade < 21) {
            // Jovem
            img.setAttribute('src', 'adolescente-M.png')
         } else if (idade < 50) {
            // Adulto
            img.setAttribute('src', 'adulto-M.png')
         } else {
            // Idoso
            img.setAttribute('src', 'idoso-M.png')
         }
      } else if (fsex[1].checked) {
         gênero = 'Femenino'
         if (idade >= 0 && idade < 10) {
            // Criança
            img.setAttribute('src', 'criança-F.png')
         } else if (idade < 21) {
            // Jovem
            img.setAttribute('src', 'adolescente-F.png')
         } else if (idade < 50) {
            // Adulto
            img.setAttribute('src', 'adulto-F.png')
         } else {
            // Idoso
            img.setAttribute('src', 'idoso-F.png')
         }
      }
      res.style.textAlign = 'center'
      res.innerHTML = `Detectamos que é do gênero ${gênero} com ${idade} anos`
      res.appendChild(img)
   }
}