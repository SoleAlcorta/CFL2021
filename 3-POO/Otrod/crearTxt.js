"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require('fs');
var FS = __importStar(require("fs"));
// fs.writeFile('./archivo1.txt', 'línea 1\nLínea 2', error => {
//   if (error)
//     console.log(error);
//   else
//     console.log('El archivo fue creado');
// });
// console.log('última línea del programa');
// FS.writeFileSync('./estadisticasTragamonedas.txt', "Ola khè asè \n", 'utf8');
FS.appendFileSync('./estadisticasTragamonedas.txt', "Todo piola", 'utf8');
