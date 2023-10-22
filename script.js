const csv = require('csv-parser')
const fs = require('fs')
const results = [];

fs.createReadStream('20211101_B3D54FD00007B2.csv')
    .pipe(csv({}))
    .on('data', (data) => results.push(data))
    .on('end', () => {
        console.log(results);
    });

