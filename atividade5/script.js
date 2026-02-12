let tarefas = [];

function adicionarTarefa() {
    let input = document.getElementById("tarefa");
    let texto = input.value;

    if (texto === "") {
        alert("Digite uma tarefa!");
        return;
    }

    tarefas.push(texto);
    input.value = "";
    atualizarLista();
}

function removerTarefa(indice) {
    tarefas.splice(indice, 1);
    atualizarLista();
}

function atualizarLista() {
    let lista = document.getElementById("lista");
    lista.innerHTML = "";

    for (let i = 0; i < tarefas.length; i++) {
        let item = document.createElement("li");
        item.textContent = tarefas[i];

        let botao = document.createElement("button");
        botao.textContent = "Remover";
        botao.onclick = function () {
            removerTarefa(i);
        };

        item.appendChild(botao);
        lista.appendChild(item);
    }
}