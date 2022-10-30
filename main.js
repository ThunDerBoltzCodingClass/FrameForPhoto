function preload(){

}

function setup(){
canvas=createCanvas(800, 700);
canvas.position(300, 250);
video=createCapture(VIDEO);
video.hide();
}

function draw(){
    image(video, 110, 100, 550, 500);
    fill('blue');
    stroke('blue');
    circle(50, 50, 80);
    circle(730, 50, 80);
    circle(50, 642, 80);
    circle(730, 642, 80);
    fill('green');
    stroke('green');
    rect(90, 40, 600, 20);
    rect(40, 90, 20, 512.5);
    rect(90, 632, 600, 20);
    rect(720, 90, 20, 512.5);
}

function take_Snapshot(){
    save("new_image");
}