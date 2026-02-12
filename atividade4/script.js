let idades = [];
function digiteIdade(){
    let input =
document.getElementById("idade");
    let idade = Number(input.value);
    if (input.value === " " || idade <=0){
        alert("Digite uma idade ");
        return
    }
    idades.push(idade);
    input.value ="";
    let lista =
document.getElementById("listaIdades");
    lista.innerHTML ="";
    let soma = 0;
    for (let i = 0;i<idades.length;i++){
        let item =
document.createElement("li");
    item.textContent = idades [i];
    }
    let media = soma / idades.length;
    document.getElementById("media").textContent = "Média das idades: " + media.toFixed(1);
}