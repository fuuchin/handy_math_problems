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

  let candy = (Math.floor((Math.random() * 100000000 + 31)) * 51) % 13 + 33;
  let candyN = (Math.floor((Math.random() * 100000000 + 31)) * 51) % 13 + 20;
  let gum = (Math.floor((Math.random() * 100000000 + 31)) * 51) % 13 + 20;
  let gumN = (Math.floor((Math.random() * 100000000 + 31)) * 51) % 13 + 20;
  let sum = candyN + gumN;
  let price = candy * candyN + gum * gumN;
  let change = (Math.floor((Math.random() * 100000000 + 31)) * 51) % 13 + 44;

  let quizText = `${candy}円のアメと${gum}円のガムを、合わせて${sum}個買います。<br>${price + change}円出して買うと、${change}円のおつりが返ってきました。<br>アメは何個買いましたか？<br>ただし、消費税は考えないものとします。`;
  quizArea.innerHTML = quizText;
  answer = candyN;
  answerText = [`正解！${answer}個でした！ガムは${gumN}個です！`, `残念！不正解です。`, `正解は${answer}個でした。ガムは${gum}個です。<br>${price + change}円出すと、${change}円返ってきたということは、<br>${price + change} - ${change} = ${price}<br>で、合計金額が${price}円であるということなのです。<br>方程式は、アメをx個買ったとして立て、このように解きましょう。<br>${candy}x + ${gum}(${sum} - x) = ${price}<br>${candy}x + ${gum * sum} - ${gum}x = ${price}<br>${candy - gum}x = ${price - gum * sum}<br>x = ${(price - gum * sum) / (candy - gum)}<br>答え：<span style="text-decoration: underline;">${answer}個</span>`];

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