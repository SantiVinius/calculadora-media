function calculaMedia(){
  var n1 = Number(document.getElementById('n1').value);
  var n2 = Number(document.getElementById('n2').value);
  var n3 = Number(document.getElementById('n3').value);
  var n4 = Number(document.getElementById('n4').value);

  var media = (n1 + n2 + n3 + n4) / 4;

  document.getElementById('resultMedia').innerHTML = "Vínius, sua nota final é: " + media.toFixed(1);

media >= 6 
        ?document.getElementById('resultFinal').innerHTML = "Você foi aprovado!" 
        :document.getElementById('resultFinal').innerHTML = "Você foi reprovado!";
}