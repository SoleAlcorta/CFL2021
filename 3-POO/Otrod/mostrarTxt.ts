// const fs = require('fs');
import * as FS from 'fs';

FS.readFile('./ruleta.txt',leer);

function leer(error,datos){
    if (error)
      console.log(error);
    else
      console.log(datos.toString());
}