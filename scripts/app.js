import {flag, Multiply} from "./export.js"

import {MakeCard} from "./card.js";

console.log(flag);

Multiply(3, 4);

let injectHere = document.getElementById("injectHere");
let doStuffBtn = document.getElementById("doStuffBtn");


doStuffBtn.addEventListener("click", function(event) {
    MakeCard();
});

// MakeCard();