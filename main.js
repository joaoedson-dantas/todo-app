function initTasks() {
  const caixasInput1 = document.querySelectorAll(".check-item input");
  const completedTasks = document.querySelector(".completedTasks");
  const allTasks = document.querySelector(".allTasks");

  function addListCompleted() {
    const elementPai = this.parentElement;
    elementPai.classList.toggle("checked");
    completedTasks.appendChild(elementPai);
    if (!elementPai.classList.contains("checked")) {
      allTasks.appendChild(elementPai);
    }
  }

  caixasInput1.forEach((item) => {
    item.addEventListener("click", addListCompleted);
  });
}
initTasks();

function initModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add("modal-ativo");
    modal.addEventListener("click", (event) => {
      if (event.target.id == modalId || event.target.id == "fechar-modal") {
        modal.classList.remove("modal-ativo");
      }
    });
  }
}

const btnModal = document.querySelector(".add-task");
btnModal.addEventListener("click", () => initModal("modalAdd"));
