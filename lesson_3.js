"use strict"

const fs = require("fs");
const readline = require('readline');

const readStream = fs.createReadStream('./access.log', 'utf8');
readStream.on('error', (err) => console.log(err));
readStream.on('end', () => console.log('File reading ended'));

const getLogs = (ip) =>{
    const writeStream = fs.createWriteStream(`./${ip}_requests.log`, { flags: 'a', encoding: 'utf8'});
    const readLine = readline.createInterface(readStream);

    readLine.on('line', (input) =>{
        if (input.match(new RegExp(ip, "g"))){
            writeStream.write(`${input}\n`);
        }
    });
    // writeStream.end(() => console.log('writing finished')); Как правильно закрыть поток на запись? 
}


//89.123.1.41   34.48.240.111
getLogs('89.123.1.41');
getLogs('34.48.240.111');
