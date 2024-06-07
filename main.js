const form = document.getElementById('formHead');
const contatos = [];
const telefones = [];

let novosContatos = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();
    adicionaContato();
    atualizaTabela();
});

function adicionaContato() {
    const inpNome = document.getElementById('nomeContato');
    const inpTelefone = document.getElementById('telContato');

    if (contatos.includes(inpNome.value)) {
        alert(`O nome de contato ${inpNome.value} já existe na lista.`);
    } else if (telefones.includes(inpTelefone.value)) {
        alert(`O telefone ${inpTelefone.value} já existe na lista.`);
    } else {
        contatos.push(inpNome.value);
        telefones.push(inpTelefone.value);

        let linha = '<tr>';
        linha += `<td>${inpNome.value}</td>`;
        linha += `<td>${inpTelefone.value}</td>`;
        linha += '</tr>';

        novosContatos += linha;

        inpNome.value = '';
        inpTelefone.value = '';
    }
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = novosContatos;
}
