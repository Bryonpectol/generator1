let names = [
  "Arsinal",
  "BAtCh",
  "Castro",
  "Axon",
  "Super",
  "ZI",
  "Colonel",
  "Captain",
  "Private",
  "Levi",
  "Saphire",
  "Ginger",
  "34",
  "Seventy",
  "Pyric",
  "Tetra",
  "Noh",
  "Master",
  "Shift",
  "Krod",
  "Pleigh's",
  "Latch",
  "Cyber",
  "Palmer",
  "Telefuture",
  "San",
  "Nocturnal",
  "Red",
  "Blue",
  "Green",
  "Neon",
  "Astrid",
  "Yellow",
  "Cyan",
  "Brown",
  "Silver",
  "Bronze",
  "Savin",
  "Beat",
  "ArLo",
  "Carpe",
  "Salve",
  "Bera",
  "Sensō",
  "manejo",
  "Komoto",
  "The",
  "White",
  "Techni",
  "Yuki",
  "First",
  "Second",
  "Third",
  "Error",
  "Dead",
  "Fast",
  "Strong",
  "Big",
  "Deadly"
];
let second = [
  "Juno",
  "Fenix",
  "Gazine",
  "579",
  "jin",
  "Cappe",
  "Zone",
  "Xelix",
  "Vox",
  "Illican",
  "Mov",
  "-vah",
  "Runner",
  "Four",
  "Saherra",
  "Centari",
  "6000",
  "FORCE",
  "Core",
  "Kord",
  "Pearl",
  "Meusik",
  "808",
  "Gator",
  "Dream",
  "Arcade",
  "Rising",
  "Gold",
  "Void",
  "Varsic",
  "Ki-bori-be",
  "Kraken",
  "Trix",
  "Zeke",
  "Magnus",
  "Noctem",
  "Diem",
  "Yoru",
  "Bear",
  "Tatakai",
  "Heiwa",
  "Dragon",
  "Tiger",
  "Sahn",
  "Guerra",
  "404",
  "Cielo",
  "Sky",
  "Star",
  "Charger",
  "Boxer",
  "Legacy"
];

function newName() {
  var randomNumber = Math.floor(Math.random() * names.length);
  document.getElementById("names").innerHTML = names[randomNumber];

  var RANDOMNUMBER = Math.floor(Math.random() * second.length);
  document.getElementById("second").innerHTML = second[RANDOMNUMBER];
}
