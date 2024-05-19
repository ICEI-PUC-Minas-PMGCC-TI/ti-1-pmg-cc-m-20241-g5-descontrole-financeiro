document.addEventListener('DOMContentLoaded', function() {
    const continuarBtn = document.querySelector('.btn_continuar');
    const options = document.querySelectorAll('.perg input[type="radio"]');
    const respostaDiv = document.getElementById('resposta');
    const respostaCorreta = document.getElementById('respostaCorreta');

    continuarBtn.disabled = true;
    continuarBtn.classList.add('botao-inativo');

    options.forEach(option => {
        option.addEventListener('change', function() {
            continuarBtn.disabled = false;
            continuarBtn.classList.remove('botao-inativo');
        });
    });

    continuarBtn.addEventListener('click', function() {
        const respostaSelecionada = document.querySelector('.perg input[type="radio"]:checked');
        if (respostaSelecionada) {
            const isCorreta = respostaSelecionada.parentElement.classList.contains('resposta-correta');
            if (isCorreta) {
                respostaCorreta.textContent = "correta";
                respostaDiv.style.color = 'green';
            } else {
                respostaCorreta.textContent = "incorreta";
                respostaDiv.style.color = 'red';
            }
            respostaDiv.style.display = 'block';
            continuarBtn.disabled = true;
            continuarBtn.classList.add('botao-inativo');
        }
    });
});
