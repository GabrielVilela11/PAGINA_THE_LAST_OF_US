/*quando clicarmos em algum botao, deve mostrar a imagem referente ao botão

PASSO 1 - PEGAR OS ELEMENTOS HTML DOS BOTOES
PASSO 2 - IDENTIFICAR O CLIQUE DO USUÁRIO
PASSO 3 - DESMARCAR O BOTÃO QUE NÃO ESTA MAIS SELECIONADO
PASSO 4 - MARCAR O BOTÃO QUE FOI CLICADO
PASSO 5 - ESCONDER A IMAGEM DE FUNDO
PASSO 6 - MOSTRAR A IMAGEM REFERENTE AO BOTÃO
*/

// PASSO 1 - PEGAR OS ELEMENTOS HTML DOS BOTOES
const botoesCarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem')


// PASSO 2 - IDENTIFICAR O CLIQUE DO USUÁRIO
botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {
        console.log(indice);
        // PASSO 3 - DESMARCAR O BOTÃO QUE NÃO ESTA MAIS SELECIONADO
        desativarBotaoSelecionado();

        // PASSO 4 - MARCAR O BOTÃO QUE FOI CLICADO
        botao.classList.add('selecionado')

        // PASSO 5 - ESCONDER A IMAGEM DE FUNDO
        esconderImagemAtiva();

        // PASSO 6 - MOSTRAR A IMAGEM REFERENTE AO BOTÃO
        imagens[indice].classList.add('ativa')
    })
})

function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');
}

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}
