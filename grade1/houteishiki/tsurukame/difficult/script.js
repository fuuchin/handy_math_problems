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

  let human = (Math.floor((Math.random() * 100000000 + 31)) * 51) % 23 + 5;
  let humanDog = (Math.floor((Math.random() * 100000000 + 31)) * 51) % 13 + 10;
  let humanChild = humanDog;
  let heads = human + humanDog + humanChild;
  let legs = human * 2 + humanDog * 6 + humanChild * 4;

  let quizText = `たくさんの大人が散歩しています。<br>1匹の犬と散歩している大人と、1人の子供と散歩している大人が同じ人数いて、<br>それに加えて、大人1人だけで散歩している人もいます。<br>大人の人数は${heads}人で、大人や子供、犬も含めた足の数は${legs}です。<br>1人で散歩している大人は何人いるでしょうか？`;
  quizArea.innerHTML = quizText;
  answer = human;
  answerText = [`正解！${answer}人でした！犬連れ、子供連れの人は${humanDog}人です！`, `残念！不正解です。`, `正解は${answer}人でした。犬連れ、子供連れの人は${humanDog}人です。<br>方程式は、1人で散歩した人がx人いたとして立て、このように解きましょう。<br>2x + 6(${heads} - x) ÷ 2 + 4(${heads} - x) ÷ 2 = ${legs}<br>2x + ${heads * 3} - 3x + ${heads * 2} - 2x = ${legs}<br>-3x = ${legs - heads * 3 - heads * 2}<br>x = ${(legs - heads * 3 - heads * 2) / -3}<br>答え：<span style="text-decoration: underline;">${answer}人</span>`];

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