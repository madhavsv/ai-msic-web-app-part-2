song1="";
song2="";
function preload() {
    song = loudSound("music.mp3,music2.mp3");
}
function setup() {
    canvas= createCanvas(300,300);
    canvas.center();
    video=createrCapture(VIDEO);
    video.hide();
}
function draw() {
    image(video,0 ,0 , 300, 300);
}
