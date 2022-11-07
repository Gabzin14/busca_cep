function retornaValores(conteudo) {
    if(!("erro" in conteudo)) {
   document.getElementById('rua').value=(conteudo.logradouro)
 document.getElementById('bairro').value=(conteudo.bairro)
 document.getElementById('localidade').value=(conteudo.localidade) }else{
    alert("CEP não encontrado")
    }
}

function buscaCep(valor) {
    var cep = valor.replace(/\D/g, '')
    if(cep != "") {
        var validarCEP = /^[0-9]{8}$/
        if(validarCEP.test(cep)) {
            document.getElementById ('rua').value = "..."
            document.getElementById ('bairro').value = "..."
            document.getElementById ('localidade').value = "..."
            var script = document.createElement ('script')
            script.src = `https://viacep.com.br/ws/${cep}/json/?callback=retornavalores`
            document.body.appendChild(script)
          }else{
              alert("Formato CEP Inválido")
          }
    }
}
