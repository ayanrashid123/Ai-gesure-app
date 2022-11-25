noseX =0;
noseY= 0;
difference = 0;
rightWristX = 0;
leftWristX = 0;
function preload() {

}

function setup() {
canvas = createCanvas(550,500);
canvas.position(560,80);

video = createCapture(VIDEO);
video.size(550, 500);
poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose',gotPoses)
}
function modelLoaded() {
    console.log('PoseNet is Initialized!')
}
function draw() {
background('#25d6f5');
document.getElementById("square_sides").innerHTML = "Width And Height of a Square will be = " + difference +"px"
fill('#eb2315');
stroke('#eb2315')
square(noseX, noseY, difference)
}

function gotPoses(results)
{
    if(results.length > 0)
{
    noseX = results[0].pose.nose.x;
    noseY = results[0].pose.nose.y;
    console.log(results);
    leftWristX = results[0].pose.leftWrist.x;
    rightWristX = results[0].pose.rightWrist.x;
    difference = floor(leftWristX - rightWristX);
}
}