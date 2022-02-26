const allQuestions = document.querySelectorAll('.question-block');
const resultTitle = document.querySelector('.resultats h2');
const form = document.querySelector('.form-quizz');
const resultText = document.querySelector('.note');
const resultHelp = document.querySelector('.aide');
const responses = ['c', 'a', 'b', 'a', 'c'];
let tableVerification = [];
let resultsTable = [];

form.addEventListener('submit', (e) => {
  e.preventDefault();

  for (let i = 1; i < 6; i++) {
    const results = form.querySelector(`input[name="q${i}"]:checked`).value;
    resultsTable.push(results);
  }

  responseVerification(resultsTable);
  resultsTable = []; // reset resultsTable
});

// Verification of the response
const responseVerification = (resultsTable) => {
  for (let a = 0; a < resultsTable.length; a++) {
    if (resultsTable[a] === responses[a]) {
      tableVerification.push(true);
    } else {
      tableVerification.push(false);
    }
  }

  showResults(tableVerification);
  updateColor(tableVerification);
  tableVerification = []; // Reset the tableVerification array
};

// Show the results
const showResults = (tableVerification) => {
  const errorNumber = tableVerification.filter((error) => error === false).length;

  switch (errorNumber) {
    case 0:
      resultTitle.innerHTML = '🎉 Félicitations !';
      resultText.innerHTML = 'Tu as réussi le quizz !';
      resultHelp.innerHTML = 'Tu peux réessayer pour t\'amuser.';
      break;
    case 1:
      resultTitle.innerHTML = '🤔 Quel dommage, tu y étais presque !';
      resultText.innerHTML = 'Tu as fait 1/5 erreur !';
      resultHelp.innerHTML = 'Tu peux réessayer pour t\'amuser.';
      break;
    case 2:
      resultTitle.innerHTML = '🤔 Tu peux peut être faire mieu, sur un malentendu !';
      resultText.innerHTML = 'Tu as fait 2/5 erreurs !';
      resultHelp.innerHTML = 'Tu peux réessayer pour t\'amuser.';
      break;
    case 3:
      resultTitle.innerHTML = '😐 Que peut on te dire de plus !';
      resultText.innerHTML = 'Tu as fait 3/5 erreurs !';
      resultHelp.innerHTML = 'Tu peux réessayer pour t\'amuser.';
      break;
    case 4:
      resultTitle.innerHTML = '🤫 Bon, on a vue pire !';
      resultText.innerHTML = 'Tu as fait 4/5 erreurs !';
      resultHelp.innerHTML = 'Tu peux réessayer pour t\'amuser.';
      break;
    case 5:
      resultTitle.innerHTML = '🤣 Mais, que t\'es null !';
      resultText.innerHTML = 'Tu as fait 5/5 erreurs !';
      resultHelp.innerHTML = 'Tu peux réessayer pour t\'amuser.';
      break;
    default:
      resultTitle.innerHTML = '🤔 Quel dommage !';
      resultText.innerHTML = 'Tu as fait trop d\'erreurs !';
      resultHelp.innerHTML = 'Tu peux réessayer pour t\'amuser.';
      break;
  }
};

// Update the color of the results
const updateColor = (tableVerification) => {
  for (let i = 0; i < tableVerification.length; i++) {
    if (tableVerification[i] === true) {
      allQuestions[i].classList.add('success');
    } else {
      allQuestions[i].classList.add('error', 'echec');

      setTimeout(() => {
        allQuestions[i].classList.remove('echec');
      }, 500);
    }
  }
};

// Reset the style of the questions
allQuestions.forEach((question) => {
  question.addEventListener('click', () => {
    question.classList.remove('success', 'error');
  });
});