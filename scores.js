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

function nameScore(name){
    var sum;
    for(let i = 0;i < name.length; i++){
        sum += name[i] - 'A' + 1;
    }
    return sum;
}

function totalScore(sortedNames){
    let sum = 0;

    for(let i = 0; i < sortedNames.length; i++){
        sum += nameScore(sortedNames) * i + 1; 
    }
    console.log(sum);
}

let sortedNames = sortNames();
totalScore(sortNames);