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

  let brother1 = (Math.floor((Math.random() * 100000000 + 31)) * 51) % 13 + 20;
  let between = (Math.floor((Math.random() * 100000000 + 31)) * 51) % 15 + 10;
  let brother2 = brother1 + between;
  let origami = brother1 + brother2;

  let quizText = `${origami}枚の折り紙を兄弟で分けます。<br>弟は、兄よりも${between}枚多くなるようにして分けたいです。<br>兄の折り紙は何枚になるでしょうか？`;
  quizArea.innerHTML = quizText;
  answer = brother1;
  answerText = [`正解！${answer}枚でした！弟の折り紙は${brother2}枚です！`, `残念！不正解です。`, `正解は${answer}枚でした。弟の折り紙は${brother2}枚です。<br>方程式は、兄の折り紙をx枚として立て、このように解きましょう。<br>x + (x + ${between}) = ${origami}<br>x + x + ${between} = ${origami}<br>2x = ${origami} - ${between}<br>2x = ${origami - between}<br>x = ${(origami - between) / 2}<br>答え：<span style="text-decoration: underline;">${answer}枚</span>`];

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