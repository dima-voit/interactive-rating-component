const cardRating = document.querySelector(".card__rating");
const cardThank = document.querySelector(".card__thank");
const submitBtn = document.querySelector(".submit__btn");
const listRating = document.querySelector(".rating__btns");
const infoRating = document.querySelector(".info__rating");
let ratingValue;

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



submitBtn.addEventListener("click", () => {
  cardRating.style.display = "none";
  cardThank.style.display = "block";
})