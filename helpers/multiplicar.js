const fs = require('fs');
const colors = require('colors');


const tablaMultiplicar = async (number, listar = false, hasta = 10) => {
    try {
        let tabla = `
        \n${colors.blue('==========================')}
        \n ------ ${colors.rainbow(`Tabla del ${number}`)} ------
        \n${colors.blue('==========================')}`;

        let tablaTxt = `
        \n==========================\n----- Tabla del ${number} -----\n==========================`;


        for (let i = 1; i <= hasta; i++) {
            tabla += `\n\t${number}  ${colors.blue('X')}  ${i} ${colors.blue('=')} ${number * i}`;
            tablaTxt += `\n\t${number}  X  ${i} = ${number * i}`;
        }

        fs.writeFileSync(`./salida/tabla-multiplicar-${number}.txt`, tablaTxt);

        if (listar) {
            console.log(tabla);
        };

        return `\ntabla-multiplicar-${number}.txt`;

    } catch (error) {
        throw error;
    }
};

module.exports = { tablaMultiplicar }