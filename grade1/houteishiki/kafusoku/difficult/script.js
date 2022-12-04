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
  let OR4_5 = (Math.floor((Math.random() * 100000000 + 31)) * 51) % 2 + 4;
  let people = (Math.floor((Math.random() * 100000000 + 31)) * 53) % 17 + 55;
  let chair = (Math.floor((Math.random() * 100000000 + 91)) * 53) % 11 + 10;
  let devided = Math.floor(people / chair) !== people / chair ? Math.floor(people / chair) : Math.floor((people + OR1_2) / chair);
  let passNumA = devided - OR0_1;
  let over = people - passNumA * chair;
  if(over === 0) {
    passNumA--;
    over = people - passNumA * chair;
  }
  let passNumB = passNumA + OR4_5;
  let lastPeople = division(people, passNumB).more ? division(people, passNumB).more : division(people, ++passNumB).more;
  let chairOver = chair - (division(people, passNumB).quotient + 1);
  if(chairOver === 0) {
    passNumB = passNumA + OR4_5 + 1;
    lastPeople = division(people, passNumB).more;
    chairOver = chair - (division(people, passNumB).quotient + 1);
  }
  let quizText = `皆で長いすに座ります。<br>${passNumA}人ずつ座ると${over}人座れないので、<br>${passNumB}人ずつ座ると最後のいすには${lastPeople}人座っていて、<br>長いすが${chairOver}脚余りました。<br>何人が長いすに座ったのでしょうか？`;
  quizArea.innerHTML = quizText;
  answer = people;
  answerText = [`正解！${answer}人でした！長いすは${chair}脚です！`, `残念！不正解です。`, `正解は${answer}人でした。長椅子は${chair}脚です。<br>方程式は、長いすの数をxとしてこのように立てましょう。<br>${passNumA !== 1 ? passNumA : ''}x + ${over} = ${passNumB}(x - ${chairOver} - 1) + ${lastPeople}<br>${passNumA !== 1 ? passNumA : ''}x + ${over} = ${passNumB}(x - ${chairOver + 1}) + ${lastPeople}<br>${passNumA !== 1 ? passNumA : ''}x + ${over} = ${passNumB}x - ${passNumB * (chairOver + 1)} + ${lastPeople}<br>${passNumA !== 1 ? passNumA : ''}x - ${passNumB}x = - ${passNumB * (chairOver + 1)} + ${lastPeople} - ${over}<br>${passNumA - passNumB !== -1 ? passNumA - passNumB : '-'}x = ${passNumB * (-chairOver - 1) + lastPeople - over}<br>${(passNumA - passNumB) * -1 !== 1 ? (passNumA - passNumB) * -1 : ''}x = ${(passNumB * (-chairOver - 1) + lastPeople - over) * -1}${(passNumA - passNumB) * -1 !== 1 ? `<br>x = ${(passNumB * (-chairOver - 1) + lastPeople - over) / (passNumA - passNumB)}` : ''}<br>最後に、式にxの値を代入して、人数を求めましょう。<br>${passNumA} × ${(passNumB * (-chairOver - 1) + lastPeople - over) / (passNumA - passNumB)} + ${over} = ${passNumA * ((passNumB * (-chairOver - 1) + lastPeople - over) / (passNumA - passNumB)) + over}<br>答え：<span style="text-decoration: underline;">${answer}人</span>`];

  answerArea.style.display = 'none';
}

function division(left, right) {
  let quotient = Math.floor(left / right);
  let more = Math.floor(left % right);
  let result = {quotient, more};
  return result;
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
