const btns = document.querySelectorAll(".rate-button");
btns.forEach(btn => btn.addEventListener("click", rating));

function rating() {
  console.log(this.dataset.rating);
}

function disableButtons() {
  btns.forEach(btn => btn.removeEventListener("click"));
}
