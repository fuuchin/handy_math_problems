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
  let people = (Math.floor((Math.random() * 100000000 + 31)) * 51) % 13 + 10;
  let origami = (Math.floor((Math.random() * 100000000 + 31)) * 51) % 15 + 58;
  let devided = Math.floor(origami / people);
  let passNumA = devided - OR0_1;
  let over = origami - people * passNumA;
  if(over === 0) {
    passNumA--;
    over = origami - people * passNumA;
  }
  let passNumB = devided + OR1_2;
  let shortage = people * passNumB - origami;
  if(shortage === 0) {
    passNumB++;
    shortage = people * passNumB - origami;
  }
  let quizText = `何人かの子供に、折り紙を配ります。<br>${passNumA}枚ずつ配ると${over}枚余り、<br>${passNumB}枚ずつ配ると${shortage}枚足りません。<br>折り紙は何枚あるでしょうか？`;
  quizArea.innerHTML = quizText;
  answer = origami;
  answerText = [`正解！${answer}枚でした！子供の人数は${people}人です！`, `残念！不正解です。`, `正解は${answer}枚でした。集める人数は${people}人です。<br>方程式は、子供の人数をxとして立て、このように解きましょう。<br>${passNumA !== 1 ? passNumA : ''}x + ${over} = ${passNumB !== 1 ? passNumB : ''}x - ${shortage}<br>${passNumA}x - ${passNumB}x = ${-shortage}  ${-over}<br>${passNumA - passNumB !== -1 ? passNumA - passNumB : '-'}x =  ${-shortage - over}<br>${(passNumA - passNumB) * -1 !== 1 ? (passNumA - passNumB) * -1 : ''}x = ${(-shortage - over) * -1}${(passNumA - passNumB) * -1 !== 1 ? `<br>x = ${((-shortage - over) * -1) / (passNumA - passNumB) * -1}` : ''}<br>最後に、式にxの値を代入して、値段を求めましょう。<br>${passNumA} × ${((-shortage - over) * -1) / ((passNumA - passNumB) * -1)} + ${over} = ${passNumA * ((-shortage - over) * -1) / ((passNumA - passNumB) * -1) + over}<br>答え：<span style="text-decoration: underline;">${answer}円</span>`];

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
