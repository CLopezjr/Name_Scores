function loadFile(){
    let file = "p022_names.txt";
    var fs = require("fs");
    var text = fs.readFileSync(file).toString('utf-8');
    var textByLine = text.split(",");
    return textByLine;
}

function sortNames(){
    var names = loadFile();
    names.sort();
    return names;
}

let sortedNames = sortNames();
console.log(sortedNames);