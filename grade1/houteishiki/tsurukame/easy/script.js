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

  let tsuru = (Math.floor((Math.random() * 100000000 + 31)) * 51) % 13 + 20;
  let kame = (Math.floor((Math.random() * 100000000 + 31)) * 51) % 13 + 20;
  let heads = tsuru + kame;
  let legs = tsuru * 2 + kame * 4;

  let quizText = `鶴と亀が、合わせて${heads}匹（羽）います。<br>脚の本数の合計は、${legs}です。<br>鶴は何羽いるでしょうか？`;
  quizArea.innerHTML = quizText;
  answer = tsuru;
  answerText = [`正解！${answer}羽でした！亀は${kame}匹です！`, `残念！不正解です。`, `正解は${answer}羽でした。亀は${kame}匹です。<br>方程式は、鶴がx羽いるとして立て、このように解きましょう。<br>2x + 4(${heads} - x) = ${legs}<br>2x + ${4 * heads} - 4x = ${legs}<br>-2x = ${legs - 4 * heads}<br>2x = ${(legs - 4 * heads) * -1}<br>x = ${(legs - 4 * heads) * -1 / 2}<br>答え：<span style="text-decoration: underline;">${answer}羽</span>`];

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