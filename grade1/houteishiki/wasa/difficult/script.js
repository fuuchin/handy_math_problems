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

  let humanA = (Math.floor((Math.random() * 100000000 + 31)) * 51) % 13 + 20;
  let between = (Math.floor((Math.random() * 100000000 + 31)) * 51) % 15 + 10;
  let humanB = humanA + between;
  let humanC = humanB;
  let origami = humanA + humanB + humanC;

  let quizText = `${origami}枚の折り紙を、Aさん、Bさん、Cさんで分けます。<br>最初にAさんがいくつか取り、BさんとCさんは残りの半分ずつもらいました。<br>すると、Bさんは、Aさんより${between}枚多く持っていることになりました。<br>Aさんは折り紙を何枚持っているでしょう？`;
  quizArea.innerHTML = quizText;
  answer = humanA;
  answerText = [`正解！${answer}枚でした！Bさん、Cさんは${humanB}枚です！`, `残念！不正解です。`, `正解は${answer}枚でした。Bさん、Cさんは${humanB}枚です。<br>方程式は、Aさんの折り紙x枚として立て、このように解きましょう。<br>x + 2(x + ${between}) = ${origami}<br>x + 2x + ${between * 2} = ${origami}<br>3x = ${origami} - ${between * 2}<br>3x = ${origami - between * 2}<br>x = ${(origami - between * 2) / 3}<br>答え：<span style="text-decoration: underline;">${answer}枚</span>`];

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