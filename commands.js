const fs = require('fs');

exports.makeDirectory = function() {
    fs.mkdir('./sample_folder', (err) => {
        if (err) throw err;
    });
}

exports.readFile = function() {
    fs.readFile('./greeting.js', (err, data) => {
        if (err) throw err;
        console.log(data);
    });
}