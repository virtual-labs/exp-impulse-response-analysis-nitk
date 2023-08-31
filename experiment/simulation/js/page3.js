function runPage3() {
    background(255);
    image(bg, 0, 0);
    
    stroke(0);
    fill(0);

    push();
    textSize(30);
    // textFont("Times");
    stroke(0);
    textFont("Comic Sans MS")
    text('Impulse Response Analysis of 2DOF System',150, 50);

    textSize(16);
    text("CONTROLS", 655, 417);
    text("VARIABLES", 655, 107);
    pop();
    textSize(20);
    text('Frequency Response Curve',80, 150);
    magFac1.initialise();
    magFac1.draw();
   // magFac3.initialise();
   // magFac3.draw();
    magFac2.initialise();
    magFac2.draw();

    stroke('red')
    textSize(10);
    line(420 , 170 , 450  , 170 );
    
    stroke('black')
    text('Frequency response curve ' , 380 , 180)
    text(' with respect to differet amplitude of' , 380 , 190)
    text(' X1 and w1' , 380, 200)
 
    stroke('purple')
    textSize(10);
    line(420 , 220 , 450  , 220 );
    
    stroke('black')
    text('Frequency response curve ' , 380 , 230)
    text(' with respect to differet amplitude of ' , 380 , 240)
    text('X2 and w2' , 380 , 250)
    
    let add = 330;
    let dy = 175;
    stroke('red')
    strokeWeight(5)
    point(50+add , 100+dy)
    strokeWeight(1)
    text('w2' , 55+add ,100 +dy)
    stroke('blue')
    strokeWeight(5)
    point(50+add , 120+dy);
    strokeWeight(1)
    text('w1' , 55 +add, 120+dy)
    
    strokeWeight(1);
    spring1.initialise(k3.inp,k1.inp,m1.inp,k2.inp,m2.inp , x10.inp , x20.inp);
    spring1.update(t, factor);
   
       
    stroke('blue');
    strokeWeight(10);
    point(40 + spring1.w1*10, 500);

    stroke('red');
    strokeWeight(10);
    point(160 +50 + spring1.w2*10, 500);

    strokeWeight(1)

    button5.draw()
    //k3.draw();
   // x2.draw();
    k1.draw();
    m1.draw();
    k2.draw();
    m2.draw();
    t = t+dt;
    //clear.mousePressed(clearMe);
}
