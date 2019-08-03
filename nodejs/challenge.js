const path = require('path');
const fs = require('fs');

const directoryPath = path.join(__dirname, 'data');

var extension = '.js';

var searchTerm = "TODO";
var fileStore = [];
var filesChecked = [];

var pendingRecursive = 0;

init = () => {
    getFiles(directoryPath, extension, searchTerm)
}

getFiles = (startPath, extension, searchTerm) => {
    if (!fs.existsSync(startPath)){
        console.log("no dir ",startPath);
        return;
    }

    pendingRecursive++;

    // Get all files with correct extension
    var files = fs.readdirSync(startPath);
    for (var i=0;i<files.length;i++){

        var filename=path.join(startPath,files[i]);
        // check file status
        var stat = fs.lstatSync(filename);

        if (stat.isDirectory()){
            getFiles(filename, extension, searchTerm);
        }else if (filename.indexOf(extension)>=0) {
            fileStore.push(filename);
        };
    };

    // Once all files are found, check if text exist
    pendingRecursive--;
    if (pendingRecursive == 0){
      for (var i=0;i<fileStore.length;i++){
          checkSearchTerm(fileStore[i], searchTerm, fileStore.length);
      }

      return fileStore.length
    }
};

checkSearchTerm = (filename, searchTerm, totalFileNum) => {
    text = fs.readFileSync(filename, 'utf8')

    if(text.indexOf(searchTerm) >= 0){
      console.log(filename);

      filesChecked.push(filename);

      if(totalFileNum == filesChecked.length){
        console.log(filesChecked);
      }

      return true
    }else{
      return false
    }
}

clearFileStorage = () => {
    fileStore = [];
    filesChecked = [];
}

module.exports = {
  init,
  getFiles,
  checkSearchTerm,
  clearFileStorage
}
