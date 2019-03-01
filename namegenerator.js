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
  "Astrid"
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
  "Void"
];

function newName() {
  var randomNumber = Math.floor(Math.random() * names.length);
  document.getElementById("names").innerHTML = names[randomNumber];

  var RANDOMNUMBER = Math.floor(Math.random() * second.length);
  document.getElementById("second").innerHTML = second[RANDOMNUMBER];
}
