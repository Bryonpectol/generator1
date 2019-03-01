let ranNum = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6"
  ];
  
  function RANDOMNUM() {
    var numRan = Math.floor(Math.random() * ranNum.length);
    document.getElementById("rannum").innerHTML = ranNum[numRan];
  }
  