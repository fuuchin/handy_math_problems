'use strict';

const buttons = document.getElementsByClassName('buttons');
const inputTag = document.getElementById('answer-inputTag');
const quizButton = document.getElementById('quiz-button');
const goButton = document.getElementById('go-button');
const answerButton = document.getElementById('answer-button');

const quizArea = document.getElementById('quiz-area');
const answerArea = document.getElementById('answer-area');

let answer;
let answerText;

quizButton.onclick = () => {
  quizArea.style.display = 'block';
  inputTagArray = [];
  inputTag.value = '';

  let gum = (Math.floor((Math.random() * 100000000 + 31)) * 51) % 15 + 10;
  let candy = (Math.floor((Math.random() * 100000000 + 31)) * 53) % 14 + 10 + gum;

  let count = (Math.floor((Math.random() * 100000000 + 31)) * 51) % 13 + 11;
  let difference = candy * count - gum * count;

  let quizText = `${gum}円のガムと、${candy}円のアメを、同じ数ずつ買いました。<br>アメの合計金額は、ガムの合計金額より${difference}円高くなりました。<br>ガム、アメはそれぞれ何個買ったのでしょうか？`;
  quizArea.innerHTML = quizText;
  answer = count;
  answerText = [`正解！${count}個でした！`, `残念！不正解です。`, `正解は${count}個でした。<br>方程式は、x個買ったとして立て、このように解きましょう。<br>${candy}x - ${gum}x = ${difference}<br>${candy - gum}x = ${difference}<br>x = ${difference / (candy - gum)}<br>答え：<span style="text-decoration: underline;">${answer}個</span>`];

  answerArea.style.display = 'none';
}

goButton.onclick = () => {
  answerArea.style.display = 'block';
  if(parseInt(inputTag.value) === answer) {
    answerArea.innerHTML = answerText[0];
  } else {
    answerArea.innerHTML = answerText[1];
  }
}

answerButton.onclick = () => {
  answerArea.innerHTML = answerText[2];
  answerArea.style.display = 'block';
}

let inputTagArray = [];

for (let i = 0; i <= 12; i++) {
  buttons[i].onclick = () => {
    let inputKey = buttons[i].getAttribute('name');
    switch(inputKey) {
      case 'D':
        inputTagArray.pop();
        break;
      case 'C':
        inputTagArray = [];
        break;
      default:
        inputTagArray.push(buttons[i].getAttribute('name'));
        break;
    }
    inputTag.value = inputTagArray.join('');
  }
};