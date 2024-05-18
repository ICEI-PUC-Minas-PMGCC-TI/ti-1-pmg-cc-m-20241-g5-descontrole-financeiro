document.addEventListener('DOMContentLoaded', function() {
    const botaoContinuar = document.getElementById('continuar');
    botaoContinuar.addEventListener('click', function(event) {
        const opcaoEscolhida = document.querySelector('input[name="resposta"]:checked');
        if (opcaoEscolhida) {
            const respostaCorreta = opcaoEscolhida.classList.contains('opcao-correta');
            sessionStorage.setItem('resposta', respostaCorreta ? 'correta' : 'incorreta');
            // Redirecionar para a próxima página
            window.location.href = 'RespostaQuiz.html';
        } else {
            event.preventDefault();
            alert('Por favor, escolha uma opção antes de continuar.');
        }
    });
});