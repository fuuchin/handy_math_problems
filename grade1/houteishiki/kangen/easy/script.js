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

  let XXX = (Math.floor((Math.random() * 100000000 + 31)) * 59) % 33 + 20;
  let n1 = (Math.floor((Math.random() * 100000000 + 31)) * 51) % 5 + 5;
  let n2 = (Math.floor((Math.random() * 100000000 + 31)) * 51) % 8 + 11;
  let n3 = (Math.floor((Math.random() * 100000000 + 31)) * 51) % 15 + 10;
  let result = (XXX + n1) * n2 - n3;

  let quizText = `ある数xと${n1}の和を${n2}倍し、${n3}を引くと、<br>答えが${result}になりました。ある数xの値を求めなさい。`;
  quizArea.innerHTML = quizText;
  answer = XXX;
  answerText = [`正解！${answer}でした！`, `残念！不正解です。`, `正解は${answer}でした。<br>方程式は、文字xを使ってこのように解きましょう。<br>(x + ${n1}) × ${n2} - ${n3} = ${result}<br>${n2}x + ${n1 * n2} = ${result} + ${n3}<br>${n2}x = ${result + n3 - n1 * n2}<br>x = ${(result + n3 - n1 * n2) / n2}<br>答え：<span style="text-decoration: underline;">${answer}</span>`];

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