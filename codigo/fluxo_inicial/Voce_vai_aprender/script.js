function exibirDivPerguntas() {
    const topicoSelecionado = JSON.parse(localStorage.getItem('dbmock'));
    if (topicoSelecionado !== null) {
        if (topicoSelecionado.id === "1") {
            document.querySelector('.perguntasI').style.display = 'block';
            document.querySelector('.perguntasR').style.display = 'none';
            document.querySelector('.perguntasS').style.display = 'none';
            document.querySelector('.perguntasE').style.display = 'none';
        } else if (topicoSelecionado.id === "2") {
            document.querySelector('.perguntasI').style.display = 'none';
            document.querySelector('.perguntasR').style.display = 'block';
            document.querySelector('.perguntasS').style.display = 'none';
            document.querySelector('.perguntasE').style.display = 'none';
        } else if (topicoSelecionado.id === "3") {
            document.querySelector('.perguntasI').style.display = 'none';
            document.querySelector('.perguntasR').style.display = 'none';
            document.querySelector('.perguntasS').style.display = 'block';
            document.querySelector('.perguntasE').style.display = 'none';
        } else if (topicoSelecionado.id === "4") {
            document.querySelector('.perguntasI').style.display = 'none';
            document.querySelector('.perguntasR').style.display = 'none';
            document.querySelector('.perguntasS').style.display = 'none';
            document.querySelector('.perguntasE').style.display = 'block';
        }
    } else {
        // Trate o caso em que não há dados salvos
    }
}

// Chame a função para exibir as perguntas ao carregar a página
document.addEventListener('DOMContentLoaded', exibirDivPerguntas);