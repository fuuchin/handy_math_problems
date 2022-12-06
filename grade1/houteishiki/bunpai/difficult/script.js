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

  let between = (Math.floor((Math.random() * 100000000 + 31)) * 51) % 10 + 5;
  let cup = (Math.floor((Math.random() * 100000000 + 31)) * 53) % 9 + 7;
  let firstCup = (Math.floor((Math.random() * 100000000 + 31)) * 47) % 17 + 10;
  let tea = firstCup;
  tea = firstCup * cup + between * cup * (cup - 1) / 2;

  let quizText = `${tea}mlのお茶を、${cup}個のコップに注ぎます。<br>コップに入れるお茶の量は、<br>2番目のカップは最初のカップの入れる量より${between}ml多く、<br>3番目のカップは2番目のカップの入れる量より${between}ml多く、<br>という風に${between}mlずつ多くしていきます。<br>最初に入れるお茶は何mlにすれば良いでしょうか？`;
  quizArea.innerHTML = quizText;
  answer = firstCup;
  answerText = [`正解！${answer}mlでした！`, `残念！不正解です。`, `正解は${answer}mlでした。<br>方程式は、最初に入れるお茶をx mlとして立てるのですが、<br>ガウスの計算方法を用いるとよいと思います。<br>公式：(初めの数＋最後の数) × 個数 ÷ 2<br>{x + x + ${between} × (${cup} - 1)} × ${cup} ÷ 2 = ${tea}<br>(2x + ${between * (cup - 1)}) × ${cup} ÷ 2 = ${tea}<br>(${cup * 2}x + ${between * (cup - 1) * cup}) ÷ 2 = ${tea}<br>${cup}x = ${tea} - ${between * (cup - 1) * cup / 2}<br>${cup}x = ${tea - between * (cup - 1) * cup / 2}<br>x = ${(tea - between * (cup - 1) * cup / 2) / cup}<br>答え：<span style="text-decoration: underline;">${answer}ml</span>`];

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