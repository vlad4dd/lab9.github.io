const cards = [
  { name: '6', value: 6 },
  { name: '7', value: 7 },
  { name: '8', value: 8 },
  { name: '9', value: 9 },
  { name: '10', value: 10 },
  { name: 'J', value: 2 },
  { name: 'Q', value: 3 },
  { name: 'K', value: 4 },
  { name: 'T', value: 11 },
];

let playerCards = [];
let dealerCards = [];
let playerScore = 0;
let dealerScore = 0;

const pScore = document.getElementById('pscore');
const dScore = document.getElementById('dscore');
const pCards = document.getElementById('pcards');
const dCards = document.getElementById('dcards');
const resElem = document.getElementById('result');
const start = document.getElementById('start');
const draw = document.getElementById('draw');
const end = document.getElementById('stop');


function allcards() {
  return cards[Math.floor(Math.random() * cards.length)];
}


function s_c() {
  pScore.textContent = `Рахунок гравця: ${playerScore}`;
  dScore.textContent = `Рахунок дилера: ${dealerScore}`;
  pCards.textContent = playerCards.map(card => card.name).join(' ');
  dCards.textContent = dealerCards.map(card => card.name).join(' ');
}


function res() {
  playerCards = [];
  dealerCards = [];
  playerScore = 0;
  dealerScore = 0;
  resElem.textContent = '';
  draw.disabled = false;
  end.disabled = false;
  s_c();
}


function gEnd(message) {
  resElem.textContent = message;
  draw.disabled = true;
  end.disabled = true;
}


function dealer() {
  while (dealerScore < 17) {
      const card = allcards();
      dealerCards.push(card);
      dealerScore += card.value;
  }
  s_c();

  
  if (dealerScore > 21 || playerScore > dealerScore) {
      gEnd('Виграв гравець!');
  } else if (dealerScore === playerScore) {
      gEnd('Нічия!');
  } else {
      gEnd('Виграв дилер!');
  }
}


draw.addEventListener('click', () => {
  const card = allcards();
  playerCards.push(card);
  playerScore += card.value;
  s_c();

  
  if (playerScore > 21) {
      gEnd("Перебір, виграв дилер");
  }
});


end.addEventListener('click', () => {
  draw.disabled = true;
  dealer();
});


start.addEventListener('click', () => {
  res();
});
