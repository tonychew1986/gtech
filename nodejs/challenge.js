const path = require('path');
const fs = require('fs');

const directoryPath = path.join(__dirname, 'data');

var extension = '.js';

var fileStore = [];

function getFiles(startPath, filter){

    if (!fs.existsSync(startPath)){
        console.log("no dir ",startPath);
        return;
    }

    var files=fs.readdirSync(startPath);
    for(var i=0;i<files.length;i++){
        var filename=path.join(startPath,files[i]);
        var stat = fs.lstatSync(filename);

        if (stat.isDirectory()){
            getFiles(filename, filter);
        }else if (filename.indexOf(filter)>=0) {
            // Check if .js extension exist
            fileStore.push(filename)
            console.log(filename);
        };
    };
};

getFiles(directoryPath, extension);


console.log("fileStore", fileStore);
