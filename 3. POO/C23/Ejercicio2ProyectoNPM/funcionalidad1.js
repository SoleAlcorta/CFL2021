"use strict";
exports.__esModule = true;
var arte = require("ascii-art");
var RLS = require("readline-sync");
var frase = RLS.question("Ingrese una palabra: ");
arte.font(frase, 'doom', function (err, renderizado) {
    console.log(err || renderizado);
});
