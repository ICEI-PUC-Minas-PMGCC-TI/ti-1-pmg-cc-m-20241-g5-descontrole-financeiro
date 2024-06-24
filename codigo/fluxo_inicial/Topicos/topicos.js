// Modal logic for showing and hiding different modals
const openModalButton = document.querySelector("#open-modal");
const closeModalButton = document.querySelector("#close-modal");
const modal = document.querySelector("#modal");
const fade = document.querySelector("#fade");

const toggleModal = () => {
  modal.classList.toggle("hide");
  fade.classList.toggle("hide");
};

openModalButton.addEventListener("click", toggleModal);
closeModalButton.addEventListener("click", toggleModal);

/* Repeat similar modal logic for other modals as needed */

// Logic to handle topic selection and redirection
document.querySelectorAll('.topics').forEach(button => {
  button.addEventListener('click', function() {
      var selectedTopic = this.textContent.trim();
      sessionStorage.setItem('selectedTopic', selectedTopic);
      window.location.href = '/codigo/fluxo_inicial/Voce_vai_aprender/index.html'; // Redirect to the sign-up page
  });
});
