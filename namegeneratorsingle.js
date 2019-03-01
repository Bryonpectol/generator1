let namesSingle = [
  "Ampli",
  "Beyion",
  "Chegs",
  "Axon",
  "Saphire",
  "Sinx",
  "Zequila",
  "Himani",
  "Tetraquani",
  "XPR100",
  "Sampson",
  "Stratocaster",
  "Shifter",
  "Kord",
  "S.P-Ace",
  "Sonlix",
  "Forteris",
  "Wellington",
  "The_Organizer",
  "Pleigh",
  "Discism",
  "Prismist",
  "L'Emeno",
  "Jhivx",
  "Telefuture",
  "Exodus",
  "Starfall",
  "Amplifier",
  "Sequencer"
];

function newNameSingle() {
  var randomNumber = Math.floor(Math.random() * namesSingle.length);
  document.getElementById("namessingle").innerHTML = namesSingle[randomNumber];
}
