//(() => {
import BotaoConcluir from "./componentes/concluiTarefa.js";
import BotaoDeleta from "./componentes/deletaTaref.js";

const criarTarefa = (evento) => {

    evento.preventDefault(); // não carrega a pagina, previni o comportamento da página de enviar os dados pra algum lugar
    
    const lista = document.querySelector('[data-list');
    const input = document.querySelector ('[data-form-input]');     
    const valor = input.value;

    const tarefa = document.createElement ('li');
    tarefa.classList.add('task');

    const conteudo = `<p class="conteudo">${valor}</p>`

    lista.appendChild(tarefa);
    tarefa.innerHTML = conteudo;
    tarefa.appendChild(BotaoConcluir());
    tarefa.appendChild(BotaoDeleta());

    input.value = " ";
}

const novaTarefa = document.querySelector('[data-form-button]');
novaTarefa.addEventListener('click', criarTarefa);

//}) ()

