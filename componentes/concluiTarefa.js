
const BotaoConcluir = () => {  // componentes começão com a letra maiuscula

    const botaoConcluir = document.createElement ('button');
    botaoConcluir.classList.add('check-button');
    botaoConcluir.innerText ='Concluir';
    botaoConcluir.addEventListener('click',concluirTarefa);
 
    return botaoConcluir;
 }

 const concluirTarefa = (evento) => {

    const botaoConcluir = evento.target; // pega apenas o botao que foi clicado
    const tarefaCompleta = botaoConcluir.parentElement; //pega o Pai 
    tarefaCompleta.classList.toggle('done');
}

export default BotaoConcluir;
