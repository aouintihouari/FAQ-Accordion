const icons = document.querySelectorAll(".faq-section .open-icon");
const answers = document.querySelectorAll(".faq-section .faq__answer");

icons.forEach((icon, index) => {
  icon.addEventListener("click", function () {
    const answer = answers[index];
    const isOpen = answer.classList.contains("visible");
    if (isOpen) icon.setAttribute("src", "images/icon-plus.svg");
    else icon.setAttribute("src", "images/icon-minus.svg");
    answer.classList.toggle("visible");
  });
});
