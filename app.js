const cardRating = document.querySelector(".card__rating");
const cardThank = document.querySelector(".card__thank");
const submitBtn = document.querySelector(".submit__btn");
const listRating = document.querySelector(".rating__btns");
const infoRating = document.querySelector(".info__rating");
const selectedRating = document.querySelector(".selected__rating");

const getListRating = () => {
  let circles = [];
  for(let i = 1; i <= 5; i++) {
    let li = document.createElement("li");
    li.append(i);
    circles.push(li);
  }
  return circles;
}

listRating.append(...getListRating());

const ratings = document.querySelectorAll("li");
ratings.forEach((rating) => {
  rating.addEventListener("click", () => {
    selectedRating.innerHTML = rating.innerHTML;
    ratings.forEach(e => {
      e.classList.contains("selected") && e.classList.remove(e.classList)
    })
    rating.classList.add("selected");
  });
});

submitBtn.addEventListener("click", () => {
  cardRating.style.display = "none";
  cardThank.style.display = "block";
});
