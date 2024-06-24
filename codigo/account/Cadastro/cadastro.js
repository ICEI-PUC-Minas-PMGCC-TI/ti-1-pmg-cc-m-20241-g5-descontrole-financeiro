function generateUUID() {
    var d = new Date().getTime();
    var d2 = (performance && performance.now && (performance.now() * 1000)) || 0;
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16;
        if (d > 0) {
            r = (d + r) % 16 | 0;
            d = Math.floor(d / 16);
        } else {
            r = (d2 + r) % 16 | 0;
            d2 = Math.floor(d2 / 16);
        }
        return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
}

var acertos = 0;

const dadosIniciais = {
    users: []
};

var db_usuarios = JSON.parse(localStorage.getItem('db_usuarios')) || dadosIniciais;

function salvarCadastro() {
    var username = document.getElementById('txt_login').value;
    var nome = document.getElementById('txt_nome').value;
    var email = document.getElementById('txt_email').value;
    var senha = document.getElementById('txt_senha').value;
    var senha2 = document.getElementById('txt_senha2').value;

    if (senha !== senha2) {
        alert('As senhas não coincidem.');
        return;
    }

    if (!username || !nome || !email || !senha || !senha2) {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    var selectedTopic = sessionStorage.getItem('selectedTopic') || "Credit"; // Default to "Credit" if not set

    const userId = generateUUID();
    addUser(nome, username, senha, email, selectedTopic, userId);

    document.getElementById('login-form').reset();
    $('#loginModal').modal('hide');

    const currentUser = {
        id: userId,
        username: username,
        nome: nome,
        email: email,
        coins: 0,
        selectedTopic: selectedTopic,
        consecutive_answers: 0,
        chapters: [
            {
                chapter_id: 1,
                unlocked: true,
                tasks: [
                    { task_id: 1, name: "Introduction to Credit", completed: false },
                    { task_id: 2, name: "Types of Credit", completed: false },
                    { task_id: 3, name: "How Credit Works", completed: false },
                    { task_id: 4, name: "Benefits of Credit", completed: false }
                ]
            },
            {
                chapter_id: 2,
                unlocked: false,
                tasks: [
                    { task_id: 1, name: "Understanding Credit Scores", completed: false },
                    { task_id: 2, name: "Improving Your Credit Score", completed: false },
                    { task_id: 3, name: "Credit Score Myths", completed: false },
                    { task_id: 4, name: "Maintaining a Good Credit Score", completed: false }
                ]
            },
            {
                chapter_id: 3,
                unlocked: false,
                tasks: [
                    { task_id: 1, name: "Applying for Credit", completed: false },
                    { task_id: 2, name: "Choosing the Right Credit Card", completed: false },
                    { task_id: 3, name: "Credit Card Benefits", completed: false },
                    { task_id: 4, name: "Managing Credit Card Debt", completed: false }
                ]
            },
            {
                chapter_id: 4,
                unlocked: false,
                tasks: [
                    { task_id: 1, name: "Credit Reports", completed: false },
                    { task_id: 2, name: "Disputing Errors on Credit Report", completed: false },
                    { task_id: 3, name: "Understanding Credit Report Terms", completed: false }
                ]
            },
            {
                chapter_id: 5,
                unlocked: false,
                tasks: [
                    { task_id: 1, name: "Credit Counseling", completed: false },
                    { task_id: 2, name: "Debt Management Plans", completed: false },
                    { task_id: 3, name: "Avoiding Credit Scams", completed: false }
                ]
            }
        ]
    };

    sessionStorage.setItem('usuarioCorrente', JSON.stringify(currentUser));

    window.location.href = '../Cadastro/success/index.html'; // Redirect to the main page
}

function addUser(nome, username, senha, email, selectedTopic, userId) {
    let usuario = {
        id: userId,
        username: username,
        password: senha,
        nome: nome,
        email: email,
        coins: 0,
        selectedTopic: selectedTopic,
        consecutive_answers: 0,
        chapters: [
            {
                chapter_id: 1,
                unlocked: true,
                tasks: [
                    { task_id: 1, name: "Introduction to Credit", completed: false },
                    { task_id: 2, name: "Types of Credit", completed: false },
                    { task_id: 3, name: "How Credit Works", completed: false },
                    { task_id: 4, name: "Benefits of Credit", completed: false }
                ]
            },
            {
                chapter_id: 2,
                unlocked: false,
                tasks: [
                    { task_id: 1, name: "Understanding Credit Scores", completed: false },
                    { task_id: 2, name: "Improving Your Credit Score", completed: false },
                    { task_id: 3, name: "Credit Score Myths", completed: false },
                    { task_id: 4, name: "Maintaining a Good Credit Score", completed: false }
                ]
            },
            {
                chapter_id: 3,
                unlocked: false,
                tasks: [
                    { task_id: 1, name: "Applying for Credit", completed: false },
                    { task_id: 2, name: "Choosing the Right Credit Card", completed: false },
                    { task_id: 3, name: "Credit Card Benefits", completed: false },
                    { task_id: 4, name: "Managing Credit Card Debt", completed: false }
                ]
            },
            {
                chapter_id: 4,
                unlocked: false,
                tasks: [
                    { task_id: 1, name: "Credit Reports", completed: false },
                    { task_id: 2, name: "Disputing Errors on Credit Report", completed: false },
                    { task_id: 3, name: "Understanding Credit Report Terms", completed: false }
                ]
            },
            {
                chapter_id: 5,
                unlocked: false,
                tasks: [
                    { task_id: 1, name: "Credit Counseling", completed: false },
                    { task_id: 2, name: "Debt Management Plans", completed: false },
                    { task_id: 3, name: "Avoiding Credit Scams", completed: false }
                ]
            }
        ]
    };
    db_usuarios.users.push(usuario);
    localStorage.setItem('db_usuarios', JSON.stringify(db_usuarios));
}

function initApp() {
    var usuariosJSON = localStorage.getItem('db_usuarios');
    if (!usuariosJSON) {
        db_usuarios = dadosIniciais;
        localStorage.setItem('db_usuarios', JSON.stringify(dadosIniciais));
    } else {
        db_usuarios = JSON.parse(usuariosJSON);
    }
}

initApp();
