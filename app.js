document.addEventListener("DOMContentLoaded", function(){
  
  const deck = document.querySelectorAll(".card");
  let numCards = deck.length;
  const yourScore = document.querySelector("#yourScore");
  const bestScore = document.querySelector("#bestScore");
  const cards = document.querySelectorAll(".card");
  const lowScore = localStorage.getItem("lowScore");

  let cardOne, cardTwo = null;
  let currentScore = 0;
  let cardsFlipped = 0;



  for(let card of cards){
    card.addEventListener('click', cardClick);
  }

  const newGameBtn = document.querySelector("button");
  newGameBtn.addEventListener("click", newGame);

// **********  functions  **********

  function newGame(){
    cardsFlipped = 0;
    currentScore = 0;
    yourScore.innerText = `Your Score: ${currentScore}`;
    for(let card of deck){
      card.classList.remove('flipped');
    }
    shuffle()
  };


  function keepScore(score){
    currentScore += score;
    yourScore.innerText = `Your Score: ${currentScore}`;
  }

  function shuffle(){
    const cardPicker = Math.floor(Math.random() * 11);
    console.log(cardPicker);
  }

  function cardClick(e){
    if(!e.target.classList.contains("front")){
      return;
    }
    let currentCard = e.target.parentElement
    
    if(!cardOne || !cardTwo){
      if(!currentCard.classList.contains('flipped')){
        keepScore(1)
      }
      currentCard.classList.add('flipped')
      cardOne = cardOne || currentCard;
      cardTwo = currentCard === cardOne ? null : currentCard;
    }

    if(cardOne && cardTwo){
      let picOne = cardOne.children[1].children[0].src;
      let picTwo = cardTwo.children[1].children[0].src;

      if(picOne === picTwo){
        keepScore(2);
        cardOne.removeEventListener("click", cardClick);
        cardTwo.removeEventListener("click", cardClick);
        cardOne = null;
        cardTwo = null;
      } else {
        setTimeout(function(){
          cardOne.classList.remove('flipped');
          cardTwo.classList.remove('flipped');
          cardOne = null;
          cardTwo = null;
        }, 1000);
      }
    }
  }

  //work on score function, adds 3 when a match is made
  //work on shuffle functionality
  //work on end game localStorage solution

})



