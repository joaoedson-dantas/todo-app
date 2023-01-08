const caixasInput = document.querySelectorAll(".check-item input");
const caixas = document.querySelectorAll(".check-item");
const teste = document.querySelectorAll(".check-body");

function addList(event) {
  const elementPai = this.parentElement;
  elementPai.classList.toggle("checked");
}

caixasInput.forEach((item) => {
  item.addEventListener("click", addList);
});
