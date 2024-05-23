document.addEventListener('DOMContentLoaded', () => {
    //Resposta Correta do Quiz
    const correctAnswer = "1";

    //Função para quando o usuário enviar o Quiz
    window.submitQuiz = function() {
        const quizForm = document.getElementById('quizForm');
        const formData = new FormData(quizForm);
        const selectedOption = formData.get('option');

        //Verificar a resposta
        if (selectedOption === correctAnswer) {
            //Atualizar o contador (Acertos consecutivos)
            let acertos = parseInt(localStorage.getItem('Ac'), 10);
            acertos += 1;
            localStorage.setItem('Ac', acertos.toString());

            //Reseta o contador (Erros consecutivos)
            localStorage.setItem('Ae', '0');
        } else {
            //Atualizar o contador (Erros Consecutivos)
            let erros = parseInt(localStorage.getItem('Ae'), 10);
            erros += 1;
            localStorage.setItem('Ae', erros.toString());

            //Reseta o contador (Acertos consecutivos)
            localStorage.setItem('Ac', '0');
        }

        //Atualiza e salva os resultados
        const result = {
            answer: selectedOption,
            status: selectedOption === correctAnswer ? "correct" : "incorrect"
        };
        const resultsJson = JSON.stringify(result);
        console.log(resultsJson);
    };
});