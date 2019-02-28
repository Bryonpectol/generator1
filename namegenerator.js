let names = ["Arsinal", "BAtCh", "Castro", "Axon", "Super", "ZI"]
let second = ["Juno", "Fenix", "Gazine", "579", "jin"]

function newName() {
    var randomNumber = Math.floor(Math.random() * (names.length));
    document.getElementById('names').innerHTML = names[randomNumber];

    var RANDOMNUMBER = Math.floor(Math.random() * (second.length));
    document.getElementById('second').innerHTML = second[RANDOMNUMBER];
}

