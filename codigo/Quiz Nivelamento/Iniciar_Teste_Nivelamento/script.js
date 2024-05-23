document.getElementById('opt1').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default link behavior

    // Store user's answer in an object
    var userAnswer = {
        choice: "StS"
    };

    // Save user's answer to local storage
    localStorage.setItem("userLevelAnswer", JSON.stringify(userAnswer));

});

document.getElementById('opt2').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default link behavior

    // Store user's answer in an object
    var userAnswer = {
        choice: "MlT"
    };

    // Save user's answer to local storage
    localStorage.setItem("userLevelAnswer", JSON.stringify(userAnswer));
});
