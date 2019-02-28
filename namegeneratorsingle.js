let namesSingle = ["Ampli", "Beyion", "Chegs", "Axon", "Saphire", "Sinx", "Zequila"]

function newNameSingle() {
    var randomNumber = Math.floor(Math.random() * (namesSingle.length));
    document.getElementById('namessingle').innerHTML = namesSingle[randomNumber];
}