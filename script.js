let cardOne = "";
let cardTwo = "";
let disable = false;
let matchedCards = 0;
let cards = document.querySelectorAll(".card");
shuffleCards();
function flipCard(event) {
  let card = event.target;
  if (card != cardOne && !disable) {
    card.classList.add("flip");
    if (!cardOne) {
      cardOne = card;
      return;
    } else {
      cardTwo = card;
      disable = true;
      //  disable = true; заблокировать
      let cardOneImg = cardOne.querySelector("img").src;
      let cardTwoImg = cardTwo.querySelector("img").src;
      matchCards(cardOneImg, cardTwoImg);
    }
  }
}
function matchCards(img1, img2) {
  if (img1 == img2) {
    matchedCards++;
    if (matchedCards == 8) {
      setTimeout(() => {
        alert("you win");
        shuffleCards();
      }, 1000);
    }
    cardOne.onclick = null;
    cardTwo.onclick = null;
    cardOne = "";
    cardTwo = "";
    disable = false;
  } else {
    setTimeout(() => {
      cardOne.classList.add("shake");
      cardTwo.classList.add("shake");
    }, 400);
    setTimeout(() => {
      cardOne.classList.remove("flip", "shake");
      cardTwo.classList.remove("flip", "shake");
      cardOne = "";
      cardTwo = "";
      disable = false;
      //   disable = false;  - разблокировать
    }, 1200);
  }
}
function shuffleCards() {
  cardOne = "";
  cardTwo = "";
  matchedCards = 0;
  disable = false;
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8];
  arr.sort(() => {
    if (Math.random() > 0.5) {
      return 1;
    } else {
      return -1;
    }
  });
  cards.forEach((card, i) => {
    card.classList.remove("flip");
    let img = card.querySelector("img");
    img.src = `./img/img-${arr[i]}.png`;
    card.onclick = flipCard;
  });
}
