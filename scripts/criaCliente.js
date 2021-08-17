let tabela = document.getElementById('table');

let nome = document.getElementById('inputNome');

let nascimento = document.getElementById('inputNascimento');

let telefone = document.getElementById('inputTelefone');

/*
Ao clicar no submit:
Pegar o valor do input nome.
Criar uma tr.
criar uma td.
Colocar o valor do input nome dentro da td.
Colocar a td dentro da tr.
*/

function criaCliente() {
    let celNome = document.createElement('td').innerHTML = nome.value;
    let novaLinha = document.createElement('tr').appendChild(celNome);
    tabela.innerHTML += tabela.appendChild(novaLinha);
}

export {criaCliente}