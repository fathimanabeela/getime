var bg;

function preload(){

getTime()

}


function setup() {
  createCanvas(800,400);
  
}

function draw() {
  if(bg){
    background(bg);  
  }

 
}

async function getTime(){
  var response = await fetch('http://worldtimeapi.org/api/timezone/Asia/Kolkata')

  var jsondata = await response.json()

var datetime = jsondata.datetime
  
var hour = datetime.slice(11,13)

if(hour > 6 && hour < 19){
  bg = loadImage("day.jpeg")
}
else{
  bg = loadImage("night.jpeg")
}

}