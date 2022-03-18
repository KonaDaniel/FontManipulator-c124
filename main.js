function setup() {
    canvas = createCanvas(500, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.size(500, 500);
    video.position(1190, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotResults);
}

function modelLoaded() {
    console.log('PoseNet is ready for duty!');
}

function gotResults(results) {
    if(results.lenght > 0) {
        console.log(results);
    }
}

function draw() {
    background('white');
} 
