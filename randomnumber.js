let number = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20"
  ];
  
  function randomNumber() {
    var randomNum = Math.floor(Math.random() * number.length);
    document.getElementById("number").innerHTML = number[randomNum];
  }
  