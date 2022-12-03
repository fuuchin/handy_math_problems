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

  let playerA = (Math.floor((Math.random() * 100000000 + 31)) * 51) % 12 + 1;
  if(playerA === 12) playerA--;
  let playerB = (Math.floor((Math.random() * 100000000 + 31)) * 51) % 12 + 13;
  let between = playerB - playerA - 1;
  let total = playerA + playerB;

  let quizText = `AさんとBさんによるすごろくゲームが始まりました。<br>サイコロは24面体で、1~24までの数字が出ます。<br>両者は一回ずつサイコロを振って進み、<br>Bさんの方が先にいるのですが、<br>BさんとAさんの間には${between}マス空いており、<br>両者が出したサイコロの目の和は${total}です。<br>Aさんは何マス進みましたか？`;
  quizArea.innerHTML = quizText;
  answer = playerA;
  answerText = [`正解！${answer}マスでした！Bさんは${playerB}マスです！`, `残念！不正解です。`, `正解は${answer}マスでした。Bさんは${playerB}マスです。<br>方程式は、Aさんはxマス進んだとして立て、このように解きましょう。<br>x + (x + ${between} + 1) = ${total}<br>x + x + ${between} + 1 = ${total}<br>2x = ${total} - ${between} - 1<br>2x = ${total - between - 1}<br>x = ${(total - between - 1) / 2}<br>答え：<span style="text-decoration: underline;">${answer}マス</span>`];

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