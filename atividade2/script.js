function criarTabuada(){
    let input =
document.getElementById("numero");
    let numero =
Number(input.value);
    let resultado =
document.getElementById("resultado");
    resultado.innerHTML = "";
    if(input.value === " "|| isNaN(numero)) {
        return;
    }
    for (let i = 1;i<=10;i++){
        let linha =
document.createElement("p");
         linha.textContent = numero + "x" + i + "=" + (numero *i);
resultado.append(linha);
    }
}