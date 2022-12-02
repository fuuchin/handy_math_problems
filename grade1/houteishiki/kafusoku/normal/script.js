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

  let OR0_1 = (Math.floor((Math.random() * 100000000 + 31)) * 51) % 2;
  let OR1_2 = (Math.floor((Math.random() * 100000000 + 31)) * 51) % 2 + 1;
  let people = (Math.floor((Math.random() * 100000000 + 31)) * 51) % 12 + 10;
  let present = ((Math.floor((Math.random() * 100000000 + 31)) * 51) % 14) * 110 + 50;
  let devided = Math.floor(present / people);
  let passNumA = devided + OR1_2;
  let over = people * passNumA - present;
  if(over === 0) {
    passNumA++;
    over = people * passNumA - present;
  }
  let passNumB = devided - OR0_1;
  let shortage = present - people * passNumB;
  if(shortage === 0) {
    passNumB--;
    shortage = present - people * passNumB;
  }
  let quizText = `担任の先生に渡すプレゼント代を皆で集めます。<br>${passNumA}円ずつ集めると${over}円余り、<br>${passNumB}円ずつ集めると${shortage}円足りません。<br>何円のプレゼントを買うのでしょうか？`;
  quizArea.innerHTML = quizText;
  answer = present;
  answerText = [`正解！${answer}円でした！集める人数は${people}人です！`, `残念！不正解です。`, `正解は${answer}円でした。集める人数は${people}人です。<br>方程式は、集める人数をxとして立て、このように解きましょう。<br>${passNumA}x - ${over} = ${passNumB}x + ${shortage}<br>${passNumA}x - ${passNumB}x = ${shortage} + ${over}<br>${passNumA - passNumB}x =  ${shortage + over}<br>x = ${(shortage + over) / (passNumA - passNumB)}<br>最後に、式にxの値を代入して、値段を求めましょう。<br>${passNumA} × ${(shortage + over) / (passNumA - passNumB)} - ${over} = ${passNumA * ((shortage + over) / (passNumA - passNumB)) - over}<br>答え：<span style="text-decoration: underline;">${answer}円</span>`];

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