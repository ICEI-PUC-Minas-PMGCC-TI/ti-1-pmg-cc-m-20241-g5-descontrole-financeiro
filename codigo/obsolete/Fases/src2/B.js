document.addEventListener('DOMContentLoaded', function() {
    const respostaArmazenada = sessionStorage.getItem('resposta');
    const feedbackResposta = document.getElementById('feedbackResposta');
    if (respostaArmazenada === 'correta') {
        feedbackResposta.textContent = 'correta';
        feedbackResposta.style.color = 'green';
    } else if (respostaArmazenada === 'incorreta') {
        feedbackResposta.textContent = 'incorreta';
        feedbackResposta.style.color = 'red';
    } else {
        feedbackResposta.textContent = 'Não foi possível determinar a resposta.';
    }
});