let computerMove = '';
function pickComputerMovescissors() {
  const randomNumber = Math.random();

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = `Rock`;
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = `Paper`;
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = `Scissors`;
  }


  let result = '';

  if (computerMove === 'Rock') {
    result = ' You lose.';

  } else if (computerMove === 'Paper') {
    result = ' You Win.'

  } else if (computerMove === 'Scissors') {
    result = ' Tie.'

  }

  alert(`You choose Scissors and Computer choose ${computerMove}${result}`);
}
function pickComputermovepaper() {
  const randomNumber = Math.random();
  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = `Rock`;
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = `Paper`;
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = `Scissors`;
  }

  let result = '';

  if (computerMove === 'Rock') {
    result = 'You win';
  } else if (computerMove === 'Paper') {
    result = 'Tie';
  } else if (computerMove === 'Scissors') {
    result = 'You lose'
  }

  alert(`You choose Paper and Computer chooose ${computerMove} ${result}`);
}

function pickComputermoverock() {
  const randomNumber = Math.random();
  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = `Rock`;
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = `Paper`;
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = `Scissors`;
  }


  let result = '';

  if (computerMove === 'Rock') {
    result = ' Tie.';

  } else if (computerMove === 'Paper') {
    result = ' You Lose.'

  } else if (computerMove === 'Scissors') {
    result = ' You Win.'

  }

  alert(`You choose Rock and Computer choose ${computerMove}${result}`);

  return result;
}

