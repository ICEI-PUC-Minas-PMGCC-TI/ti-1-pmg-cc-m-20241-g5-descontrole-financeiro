// Função para salvar a meta escolhida em um arquivo JSON
function saveGoal() {
    const selectedGoal = document.querySelector('input[name="goal"]:checked').value;
    const goalData = { goal: selectedGoal };

    // Salvar no Local Storage
    localStorage.setItem('userGoal', JSON.stringify(goalData));
    alert('Meta salva com sucesso!');
}



// Função para carregar a meta salva ao carregar a página
function loadGoal() {
    const savedGoal = localStorage.getItem('userGoal');
    if (savedGoal) {
        const goalData = JSON.parse(savedGoal);
        document.querySelector(input[name="goal"][value="${goalData.goal}"]).checked = true;
    }
}

// Carregar a meta salva ao carregar a página
document.addEventListener('DOMContentLoaded', loadGoal);