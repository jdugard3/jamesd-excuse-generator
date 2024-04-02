/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  // 1. create the "parts of the sentence" arrays
  let who = ["A dog", "My grandma", "The mailman", "Voldemort", "Darth Vader"];
  let action = ["ate", "threw away", "mailed", "stole", "sliced"];
  let what = [
    "my homework",
    "my cellphone",
    "the car",
    "my powers",
    "my pizza"
  ];
  let when = [
    "yesterday!",
    "this morning!",
    "last week!",
    "forever!",
    "last year"
  ];

  // 2. combine random elements in each array to form a senctence
  function selectArrayElement(arrayName, arrayLength) {
    let randomNumber = Math.floor(Math.random() * arrayLength);
    let selectedElement = arrayName[randomNumber];
    return selectedElement;
  }

  let randomWho = selectArrayElement(who, who.length);
  let randomAction = selectArrayElement(action, action.length);
  let randomWhat = selectArrayElement(what, what.length);
  let randomWhen = selectArrayElement(when, when.length);

  let excuse = `${randomWho} ${randomAction} ${randomWhat} ${randomWhen}`;
  // 3. print the excuse on the termainal, and then in the browser
  const htmlElement = document.querySelector(".excuse");
  htmlElement.innerHTML = excuse;
};
