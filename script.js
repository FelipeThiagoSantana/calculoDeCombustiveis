function clicando() {
      //validando os campos
      let precoA = document.getElementById('alcool').value
      let precoG = document.getElementById('gasolina').value

      if (precoA != ""){

        if (precoG != ""){


        let result = precoA/precoG
        if (result >= 0.7){

         
          document.getElementById('resultado').innerHTML = "É melhor usar  Gasolina"
          

        }else{
          
          document.getElementById('resultado').innerHTML = "É melhor usar Alcool"
          
        }

        }else{
          alert("Por favor preencha o valor da Gasolina")
        }

       
      } else{
        alert("Por favor preencha o valor do Alcool")
      }
     }

      function formatarMoeda() {
        var elemento = document.getElementById('alcool');
        var valor = elemento.value;
        

        valor = valor + '';
        valor = parseInt(valor.replace(/[\D]+/g, ''));
        valor = valor + '';
        valor = valor.replace(/([0-9]{2})$/g, ",$1");

        if (valor.length > 6) {
            valor = valor.replace(/([0-9]{3}),([0-9]{2}$)/g, ".$1,$2");
        }

        elemento.value = valor;
        if(valor == 'NaN') elemento.value = '';
        
    }