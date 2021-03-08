const argv = require('yargs')
    .options({
        'b': {
            alias: 'base',
            type: 'number',
            demandOption: true,
            describe: 'base de tabla multiplicar'
        },
        'l': {
            alias: 'listar',
            type: 'boolean',
            demandOption: false,
            default: false,
            describe: 'selecciona si quieres ver la tabla en consola'
        },
        'h': {
            alias: 'hasta',
            type: 'number',
            demandOption: false,
            default: 10,
            describe: 'Número de maximo de multiplicaciones'
        }
    })
    .check((argv, optyons) => {
        if (isNaN(argv.b)) {
            throw 'La base tiene que ser un número';
        };
        if (isNaN(argv.h)) {
            throw 'el valor hasta tiene que ser un número';
        };
        return true
    })
    .argv;

module.exports = argv;