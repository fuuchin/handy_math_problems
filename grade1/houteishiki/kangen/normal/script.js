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

  let XXX = ((Math.floor((Math.random() * 100000000 + 31)) * 59) % 13) * 2 + 50;
  let n1 = ((Math.floor((Math.random() * 100000000 + 31)) * 51) % 8 + 11) * 2;
  let n2 = ((Math.floor((Math.random() * 100000000 + 31)) * 51) % 5 + 5) * 2;
  let result0 = (XXX - n1 + n2) / 2;
  let n3 = XXX / 2 - result0
  let result = result0 - n3;

  let quizText = `兄は持っている切手を${n1}枚使い、<br>その後母から${n2}枚もらい、その後半分を弟にあげ、<br>${n3}枚使いました。すると、兄の持っている切手は${result}枚になりました。<br>兄は最初何枚切手を持っていましたか。`;
  quizArea.innerHTML = quizText;
  answer = XXX;
  answerText = [`正解！${answer}枚でした！`, `残念！不正解です。`, `正解は${answer}枚でした。<br>方程式は、最初x枚持っていたとして立て、このように解きましょう。<br>(x - ${n1} + ${n2}) ÷ 2 - ${n3} = ${result}<br>(x - ${n1 - n2}) ÷ 2 = ${result + n3}<br>x - ${n1 - n2} = ${(result + n3) * 2}<br>x = ${(result + n3) * 2 + n1 - n2}<br>答え：<span style="text-decoration: underline;">${answer}枚</span>`];

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