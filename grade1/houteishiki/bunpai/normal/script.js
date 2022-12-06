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

  let between1 = (Math.floor((Math.random() * 100000000 + 31)) * 51) % 19 + 42;
  let between2 = (Math.floor((Math.random() * 100000000 + 31)) * 53) % 17 + 30;

  let humanA = (Math.floor((Math.random() * 100000000 + 31)) * 57) % 71 + 210;
  let humanB = humanA + between1;
  let humanC = humanB - between2;
  let humanD = humanB * 2;
  let money = humanA + humanB + humanC + humanD;

  let quizText = `パーティーを開きたいので、${money}円の会費が必要です。Aさん、Bさん、Cさん、Dさんでお金を出し合います。<br>Aさんより年上のBさんは、Aさんより${between1}円多くなるように、<br>Cさんはあまりお金を持っていないので、<br>Bさんより${between2}円少なくなるように、<br>Dさんは長男なので、Bさんの2倍払うように分けたいです。<br>Cさんは何円払うことになるでしょうか？`;
  quizArea.innerHTML = quizText;
  answer = humanC;
  answerText = [`正解！${answer}円でした！Aさんは${humanA}円、Bさんは${humanB}円、Dさんは${humanD}円です！`, `残念！不正解です。`, `正解は${answer}円でした。Aさんは${humanA}円、Bさんは${humanB}円、Dさんは${humanD}円です。<br>方程式は、Aさんがをx円払うとして立て、このように解きましょう。<br>x + (x + ${between1}) + (x + ${between1} - ${between2}) + 2(x + ${between1}) = ${money}<br>x + x + ${between1} + x + ${between1} - ${between2} + 2x + ${between1 * 2} = ${money}<br>5x = ${money} - ${between1} - ${between1} + ${between2} - ${between1 * 2}<br>5x = ${money - (between1 * 4) + between2}<br>x = ${(money - (between1 * 4) + between2) / 5}<br>しかし、xの値はAさんが払う金額なので、<br>このような計算をしてCさんは何円払うのか求めましょう。<br>${(money - (between1 * 4) + between2) / 5} + ${between1} - ${between2} = ${(money - (between1 * 4) + between2) / 5 + between1 - between2}<br>答え：<span style="text-decoration: underline;">${answer}円</span>`];

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