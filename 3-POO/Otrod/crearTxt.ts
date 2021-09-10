const fs=require('fs');
import * as FS from 'fs';

// fs.writeFile('./archivo1.txt', 'línea 1\nLínea 2', error => {
//   if (error)
//     console.log(error);
//   else
//     console.log('El archivo fue creado');
// });

// console.log('última línea del programa');

// FS.writeFileSync('./estadisticasTragamonedas.txt', "Ola khè asè \n", 'utf8');
FS.appendFileSync('./estadisticasTragamonedas.txt', "Todo piola", 'utf8');

