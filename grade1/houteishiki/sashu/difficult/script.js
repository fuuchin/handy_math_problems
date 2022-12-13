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

  let sweetShop1 = (Math.floor((Math.random() * 100000000 + 31)) * 51) % 15 + 10;
  let expectedQuantity = ((Math.floor((Math.random() * 100000000 + 31)) * 97) % 17 + 1) * 5;
  let sweetShop2 = (Math.floor((Math.random() * 100000000 + 31)) * 53) % 14 + 10 + sweetShop1;
  let percent = ((Math.floor((Math.random() * 100000000 + 31003)) * 33) % 4 + 1) * 20;
  let sweetShop1Quantity = expectedQuantity * percent / 100;
  let difference = (sweetShop1 * sweetShop1Quantity + sweetShop2 * (expectedQuantity - sweetShop1Quantity)) - sweetShop1 * expectedQuantity;

  let quizText = `お菓子屋さんで1個${sweetShop1}円のチョコレートを、<br>何個か買おうとしましたが、<br>欲しい数の${percent}%しかお店になかったので、<br>不足分は1個${sweetShop2}円のチョコレートを買いました。<br>払ったお金は最初の予定より${difference}円高くなりました。<br>チョコレートは全部で何個買ったのでしょうか？`;
  quizArea.innerHTML = quizText;
  answer = expectedQuantity;
  answerText = [`正解！${expectedQuantity}個でした！`, `残念！不正解です。`, `正解は${expectedQuantity}個でした。<br>方程式は、まず、${sweetShop2}円のチョコレートを<br>x個買ったとして立て、このように解きましょう。<br>${sweetShop1}x + ${difference} = ${sweetShop2}x<br>${sweetShop1}x - ${sweetShop2}x = -${difference}<br>${sweetShop1 - sweetShop2}x = -${difference}<br>x = ${difference / -(sweetShop1 - sweetShop2)}<br>${sweetShop1}円のチョコレートは40%で、<br>今求めたのは${sweetShop2}円のチョコレートの買った個数が、<br>100% - ${percent}% = ${100 - percent}%<br>で欲しい全体の個数の${100 - percent}%だと分かりました。<br>これで、欲しい全体の個数を求められるので、<br>それをxとして、このような方程式を立てます。<br>x × ${100 - percent} ÷ 100 = ${difference / -(sweetShop1 - sweetShop2)}<br>x = ${difference / -(sweetShop1 - sweetShop2) * 100 / (100 - percent)}<br>答え：<span style="text-decoration: underline;">${answer}個</span>`];

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