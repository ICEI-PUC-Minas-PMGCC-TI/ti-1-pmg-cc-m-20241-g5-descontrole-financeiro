document.getElementById('opt1').addEventListener('click', function(event) {
    event.preventDefault(); 

    var userAnswer = {
        id_choice : 0,
        choice: "Começar do 0"
    };

    // Save user's answer to local storage
    localStorage.setItem("userLevelAnswer", JSON.stringify(userAnswer));

});

document.getElementById('opt2').addEventListener('click', function(event) {
    event.preventDefault(); 

    
    var userAnswer = {
        id_choice : 1,
        choice: "Fazer um teste de nivelamento"
    };

    localStorage.setItem("userLevelAnswer", JSON.stringify(userAnswer));
    window.location.replace("../Quiz/index.html");
});
