let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0,
};

updateScoreElement();



/*
    if (!score) {
      score = {
        wins: 0,
        losses: 0,
        ties: 0,
      }
    } */

function pickComputerMove() {
  const randomNumber = Math.random();
  let computerMove = '';

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = 'Rock';
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = 'Paper';
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = 'Scissors';
  }

  return computerMove;
}

function playGame(playerMove) {
  const computerMove = pickComputerMove();

  let result = '';

  if (playerMove === 'scissors') {
    if (computerMove === 'Rock') {
      result = 'You Lose.';
    } else if (computerMove === 'Paper') {
      result = 'You Win.'
    } else if (computerMove === 'Scissors') {
      result = 'Tie.'
    }

  } else if (playerMove === 'paper') {
    if (computerMove === 'Rock') {
      result = 'You Win.';
    } else if (computerMove === 'Paper') {
      result = 'Tie.';
    } else if (computerMove === 'Scissors') {
      result = 'You Lose.'
    }

  } else if (playerMove === 'rock') {
    if (computerMove === 'Rock') {
      result = 'Tie.';
    } else if (computerMove === 'Paper') {
      result = 'You Lose.'
    } else if (computerMove === 'Scissors') {
      result = 'You Win.'
    }
  }

  if (result === 'You Win.') {
    score.wins += 1;
  } else if (result === 'You Lose.') {
    score.losses += 1;
  } else if (result === 'Tie.') {
    score.ties += 1;
  }

  if (result === 'You Win.') {
    document.querySelector('.js-result').style.color = 'yellow'; 
    document.title = `${result}`
  } else if (result === 'You Lose.') {
    document.querySelector('.js-result').style.color = 'red';
    document.title = `${result}`
  } else {
    document.querySelector('.js-result').style.color = 'blue';
    document.title = `${result}`
  }

  localStorage.setItem('score', JSON.stringify(score));

  updateScoreElement();

  document.querySelector('.js-moves').innerHTML = `You ${playerMove} - ${computerMove} Computer`;

  document.querySelector('.js-result').innerHTML = result;
}

function updateScoreElement() {

  document.querySelector('.js-score').innerHTML = `Wins: ${score.wins} Losses: ${score.losses} Ties: ${score.ties}`;
}