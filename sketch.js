var a=15
a=37
console.log(a)
//array:collection of data
//data type:integer 0,1,2,31263 
//float 0.25,-63.25
//string  "sangli","sanyogita"
//boolean     True,False

var arr1=[18,19,15,17,19]
console.log(arr1)

var arr2=["Sanyogita","Sangli","10th Standard",9639639639,92.23,true]
console.log(arr2)

//index number/position index number always begins from 0
console.log("Standard",arr2[2])
console.log("Contact number=",arr2[3])

//list of array  2 dimensional array

arr3=[
    [1,2], //[0][0],[0][1]
    [3,4], //1
    [5,6]  //2
     ]



console.log(arr3[1][1])
console.log(arr3[2][0])


 //push()  add element  in array 

 arr2.push("Sanjeevani")
 console.log(arr2)


arr2.pop()
console.log(arr2)

 const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingShot;

function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig3 = new Pig(810, 220);

    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);

    bird = new Bird(200,50);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(bird.body,{x:200, y:50});
}

function draw(){
    background(backgroundImg);
   getTime();
  
    Engine.update(engine);
    //strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    log3.display();

    box5.display();
    log4.display();
    log5.display();

    bird.display();
    platform.display();
    //log6.display();
    slingshot.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

async function getTime()
{
    var response=await fetch("https://worldtimeapi.org/api/timezone/Asia/Tokyo");
    var responseJSON=await response.json();
    console.log(responseJSON.datetime)


}
async function demo()
{
    let response = await fetch('/article/promise-chaining/user.json');
    let user = await response.json();
    console.log(user)
}