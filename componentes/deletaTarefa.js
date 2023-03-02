const BotaoDeleta = () => {   // componentes começão com a letra maiuscula

    const botaoDeletar = document.createElement('button');
    botaoDeletar.classList.add('delete-button');
    botaoDeletar.innerHTML = ('Deletar');
    botaoDeletar.addEventListener('click', deletarTarefa);

    return botaoDeletar

}

const deletarTarefa = (evento) => {

    const botaoDeleta = evento.target;
    const tarefaCompleta = botaoDeleta.parentElement;
    
    tarefaCompleta.remove();
    return botaoDeleta;
}

export default BotaoDeleta;
