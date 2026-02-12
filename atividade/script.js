let nomes=[]
function colocarNome(){
    let input = 
document.getElementById("nome").value;
    let nome = trim();

    if (nome === ""){
        alert ("Escreva um nome:");
        return;
    }
    nomes.push(nome);
    input.value = "";

    let ul =
document.getElementById("listaNomes");
    ul.innerHTML = "";
    for (let i = 0;i < nomes.length;i++) {
        let li =
document.createElement("li");
    li.textContent = nomes[i];
    ul.appendChild(li);

    }

}