function setup()
{
    video=createCapture(VIDEO);
    video.size(550, 500);
    canvas=createCanvas(550, 400);
    canvas.position(560, 135);

    posenet= ml5.poseNet(video, modelLoaded);
    posenet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log("MODEL IS LOADED!");
}   

function gotPoses(results)
{
    if(results.length>0);
    {
        console.log(results);
    }
}

function draw()
{
    background("#808080");
}