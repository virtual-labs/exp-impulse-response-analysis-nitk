﻿// canvas
let width = 800;
let height = 600;


// counter
let t = 0.05;
let dt = 0.01;

// system
let spring1;

//polar moment of inertia

let J ;

//


// graphs
let position_graph1;
let position_graph2;
let magFac;
//let force_graph;
//let magFac;
//let phaseAng;

// inputs
//let slider_force;
//let slider_ang_freq;
let k1;
let k2;
let M;
let w;
let F0;


// factor
let factor = 1;

let x10 ;
let x20 ; 
let x10d;
let x20d;
// images
let img;
let button1;
let button2;
let button3;
let button4;
let button5;
let spr;

let flag = true;
// pages
let page1 = true;
let page2 = false;
let page3 = false;

// animation
let animation = true;
let touch = false;

// Buttons
var clear;
let refr ;

function preload() {
    play = loadImage("images/blueplaydull.png");
    pause = loadImage("images/bluepausedull.png");
    graph = loadImage("images/bluefwddulls.png");
    back = loadImage("images/bluebkdulls.png");
    bg = loadImage("images/frame_copper_ver02.png");
    spr = loadImage("images/spring.png");
    
}

function setup() {

    console.log("hello");

    textFont("Comic Sans MS");
    

    createCanvas(width, height);
    spring1 = new System(450, 365, 90, 25);
    
    position_graph1 = new Graph(50, 295, 100, 220, "x1", "t");

    position_graph2 = new Graph(50, 210, 100, 220, "x2", "t");

    magFac1 = new DynamicGraph(50, 500, 300, 220, "X1/Xst", "ω1", 0,7,0,10, System.mag_func1);
    magFac2 = new DynamicGraph(350, 500, 300, 220, "X2/Xst", "ω2",0, 7,0,10, System.mag_func2);

    

    // All the inputs taken from the web page

    k1 = new NumberInput(620, 150, "k1 (N/m)",5, 20, 5, 2,1, true);
    m1 = new NumberInput(620, 195, "m1(kg)", 10, 50, 10, 1,1, true);
    k2 = new NumberInput(620, 235, "k2 (N/m)", 5, 20 ,5, 2,1, true);
    m2 = new NumberInput(620, 280, "m2(kg)", 10, 50, 10, 1,1, true);
    k3= new NumberInput(620, 150, "k3(N/m)", 5, 20, 0, 0.5,1, true);
    F0 = new NumberInput(620, 310, "F0(N)",-30, 30,0 ,0.5,1, true);
    button1 = new Button(645, 430, pause)
    button2 = new Button(706, 430, graph)
    button3 = new Button(645,460,back)
    button4 = new Button(705, 460, graph)
    button5 = new Button(645,470,back)

    x10 = new NumberInput(620, 315, "x10 (N/m)",-1,1, 1, 1,1, true);
    x20  =new NumberInput(620, 360, "x20 (N/m)",-1, 1, 1, 1,1, true);
   
    
}

function draw() {
    if (page1) {
        runPage1();
    }

    if (page2) {
        runPage2();
    }

    if (page3){
        runPage3();
    }
}

function mousePressed() {
 
    handleEvents();
}
