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

  let humanA = (Math.floor((Math.random() * 100000000 + 31)) * 51) % 29 + 1009
  let humanB = (Math.floor((Math.random() * 100000000 + 31)) * 53) % 27 + 510 + humanA;
  let shift = (Math.floor((Math.random() * 100000000 + 31)) * 53) % 9 + 1;

  let month = (Math.floor((Math.random() * 100000000 + 31)) * 51) % 9 + 7;
  let difference = humanB * (month + shift) - humanA * month;

  let quizText = `Aさんは、1か月に${humanA}円、Bさんは${humanB}円ずつ、貯金を始めました。<br>何か月か経ってAさんは貯金をやめましたが、Bさんはさらに${shift}か月貯金を続けました。<br>すると、Bさんの貯金額は、Aさんの貯金額より${difference}円高くなりました。<br>Aさんは何か月貯金したのでしょうか？`;
  quizArea.innerHTML = quizText;
  answer = month;
  answerText = [`正解！${month}か月でした！`, `残念！不正解です。`, `正解は${month}か月でした。<br>方程式は、xか月貯金したとして立て、このように解きましょう。<br>${humanB}(x + ${shift}) - ${humanA}x = ${difference}<br>${humanB}x + ${humanB * shift} - ${humanA}x = ${difference}<br>${humanB- humanA}x = ${difference - humanB * shift}<br>x = ${(difference - humanB * shift) / (humanB - humanA)}<br>答え：<span style="text-decoration: underline;">${answer}か月</span>`];

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