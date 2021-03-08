const { tablaMultiplicar } = require('./helpers/multiplicar');
const argv = require('./config/yargs');
const colors = require('colors');



tablaMultiplicar(argv.b, argv.l, argv.h)
    .then(nameDoc => console.log(colors.green(nameDoc, '=> CREADO')))
    .catch(error => { throw error });




