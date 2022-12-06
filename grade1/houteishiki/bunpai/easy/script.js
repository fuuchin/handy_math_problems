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

  let between1 = (Math.floor((Math.random() * 100000000 + 31)) * 51) % 15 + 10;
  let between2 = (Math.floor((Math.random() * 100000000 + 31)) * 53) % 14 + 12;

  let humanA = (Math.floor((Math.random() * 100000000 + 31)) * 51) % 13 + 20;
  let humanB = humanA + between1;
  let humanC = humanB + between2;
  let ribbon = humanA + humanB + humanC;

  let quizText = `${ribbon}cmのリボンを、Aさん、Bさん、Cさんで分けます。<br>Bさんは、Aさんより${between1}cm多くなるように、<br>CさんはBさんより${between2}cm多くなるように分けたいです。<br>Aさんのリボンは何cmになるでしょうか？`;
  quizArea.innerHTML = quizText;
  answer = humanA;
  answerText = [`正解！${answer}cmでした！Bさんは${humanB}cm、Cさんは${humanC}cmです！`, `残念！不正解です。`, `正解は${answer}cmでした。Bさんは${humanB}cm、Cさんは${humanC}cmです。<br>方程式は、Aさんのリボンをxcmとして立て、このように解きましょう。<br>x + (x + ${between1}) + (x + ${between1} + ${between2}) = ${ribbon}<br>x + x + ${between1} + x + ${between1} + ${between2} = ${ribbon}<br>3x = ${ribbon} - ${between1} - ${between1} - ${between2}<br>3x = ${ribbon - between1 - between1 - between2}<br>x = ${(ribbon - between1 - between1 - between2) / 3}<br>答え：<span style="text-decoration: underline;">${answer}cm</span>`];

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