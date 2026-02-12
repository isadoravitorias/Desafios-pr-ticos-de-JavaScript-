function contarVogais(){
    let frase=
document.getElementById("frase").value.toLowerCase();
   let resultado =
document.getElementById("resultado");
   if(frase ==="") {
    alert("Digite uma frase");
    return;
   }
   let contador = 0;
   let vogais = "aeiou";
   for (let i=0;i<frase.lenght;i++){
    if
(vogais.includes(frase[i])){
         contador++;
}
   }
   resultado.textContent = "Total de vogais:" + contador;
}