"use strict";
exports.__esModule = true;
var rls = require("readline-sync");
var cs = require("cowsay");
var frase = rls.question("La vaca dice: ");
console.log(cs.say({
    text: frase,
    e: "oO",
    T: "U"
}));
