

let water = new Image(500,300);
let icebackground = new Image(500,300);
let roadforest = new Image(500,300);
let riverthing = new Image(500,300);
let waterfall = new Image(500,300);
let swan = new Image(500, 300);
let trooper = new Image(500,300);
let weirdgame = new Image(500,300);
let dice = new Image(500,300);
let pug = new Image(500,300);
let camera = new Image(500,300);
let corn = new Image(500,300);
let ferrari = new Image(500,300);
let truck = new Image(500,300);
let wheel = new Image(500,300);
let bike = new Image(500,300);
let rally = new Image(500,300);
let stormtrooper = new Image(500,300);


water.src = "water.jpg";
icebackground.src = "ice.jpg";
roadforest.src = "road.jpg";
riverthing.src = "river.jpg"
waterfall.src = "waterfall.jpg";
swan.src = "swan.jpg";
trooper.src = "trooper.jpg";
weirdgame.src = "game.png";
dice.src = "dice.jpg";
pug.src = "pug.jpg";
camera.src = "camera.jpg";
corn.src = "corn.jpg";
ferrari.src = "ferrari.jpg";
truck.src = "sand-truck.jpg";
wheel.src = "wheel.jpg";
bike.src = "race-bike.jpg";
rally.src = "rally.jpg";
stormtrooper.src = "storm-trooper.jpg";


let button = document.createElement('button');

let body = document.querySelector('.body');

let myArray = [
    water, icebackground, roadforest, riverthing, waterfall, swan, trooper, weirdgame, dice, pug, camera, corn, ferrari, truck, wheel, bike, rally, stormtrooper
]

var image = myArray[Math.floor(Math.random() * myArray.length)];

body = document.body.appendChild(image);

