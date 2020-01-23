const fa_array = [fa-bitcoin, 
                  fa-dollar-sign, 
                  fa-ethereum, 
                  fa-euro-sign, 
                  fa-pound-sign, 
                  fa-ruble-sign,
                  fa-rupee-sign, 
                  fa-won-sign, 
                  fa-yen-sign, 
                  fa-lira-sign]


const yourScore = document.querySelector("#yourScore");
let cardsFlipped = 0;

// commented to check event delegation
const cards = document.querySelectorAll(".card");

for(let card of cards){
  card.addEventListener('click', flip);
}

const newGameBtn = document.querySelector("button");
newGameBtn.addEventListener("click", newGame);
let divCount = 0

function newGame(){
  yourScore.innerText = `Your Score: 0`
  createCard()
};

const wrapper = document.querySelector(".wrapper");

const newCard = document.createElement("div");
const cardFront = document.createElement("div");
const cardBack = document.createElement("div");

// const imgFront = document.createElement("img");
// imgFront.src = "img/brawlstars_wings.png"
const imgBack = document.createElement("img")
imgBack.src = "img/colt.png"

// wrapper.addEventListener("click", function(e){
//   if(e.target.className === "front"){
//     flip()
//   }
// })

// *************UNCOMMENT HERE**************
function flip(){
  this.classList.toggle('flipped')
  cardsFlipped++;
  yourScore.innerText = `Your Score: ${cardsFlipped}`
  console.log("You clicked the card")
};

function createCard(){
  divCount++;
  cardFront.innerText = `${divCount}`
  newCard.classList.add("card")
  cardFront.classList.add("front")

  cardBack.classList.add("back")

  // cardFront.appendChild(imgFront)
  newCard.append(cardFront);
  newCard.append(cardBack);
  cardBack.appendChild(imgBack);

  wrapper.appendChild(newCard);
  console.log(wrapper)
}

// *******************  ON-LOAD LOGIC  **********************
// loop through list of images and with each image, call createCard 
// with the image passed as a parameter to create the back of a card

// function compareCards(){
//   if first card image is not equal to second card image), 
//   setTimeout(flip 1000)
//   else
// }

// function shuffle(){
//   const cardPicker = Math.floor(Math.random() * 11);
//   console.log(cardPicker);
// }

