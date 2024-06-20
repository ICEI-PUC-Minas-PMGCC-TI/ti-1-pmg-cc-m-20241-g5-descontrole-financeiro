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

    addUser(nome, username, senha, email, selectedTopic);

    document.getElementById('login-form').reset();
    $('#loginModal').modal('hide');
    alert('Usuário cadastrado com sucesso!');
}

function addUser(nome, username, senha, email, selectedTopic) {
    let newId = generateUUID();
    let usuario = {
        id: newId,
        username: username,
        password: senha,
        nome: nome,
        email: email,
        coins: 0,
        selectedTopic: selectedTopic,
        chapters: [
            {
                chapter_id: 1,
                unlocked: true,
                tasks: [
                    { task_id: 1, completed: false },
                    { task_id: 2, completed: false },
                    { task_id: 3, completed: false },
                    { task_id: 4, completed: false }
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
