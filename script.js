const leftSection = document.querySelector(".left-section");
const mainPhoto = document.querySelector(".main-photo");
const like = document.querySelector(".like-photo");

leftSection.addEventListener("click", leftSectionListener);
like.addEventListener("click", likeListener);

function leftSectionListener(event) {
  if (event.target.nodeName !== "IMG") {
    return;
  }
  mainPhoto.setAttribute("src", event.target.getAttribute("src"));
  mainPhoto.getAttribute("src");
}

function likeListener(event) {
  console.log(event);
  if (event.target.classList.contains("disabled")) {
    event.target.classList.remove("disabled");
    event.target.classList.add("enabled");
    event.target.setAttribute("src", "./img/icon-on.png");
    return;
  }
  if (event.target.classList.contains("enabled")) {
    event.target.classList.add("disabled");
    event.target.classList.remove("enabled");
    event.target.setAttribute("src", "./img/icon-off.png");
    return;
  }
}
