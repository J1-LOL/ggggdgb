Webcam.set({
    width:350,
    height:300,
    img_format = 'png',
    png_quality = 100
});

Camera = document.getElementById("camera");

Webcam.attach('#camera');

function takeSnapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="captured_image" src = "' + data_uri + '"/>';
    })
}

console.log('ml5 version :', ml5.version);

classifier = ml5.imgClassifier('https://teachablemachine.withgoogle.com/models/lvdx99hob/', modelLoaded);

function modelLoaded(){
    console.log('Model Loaded!');
}

function speak(){
var synth = window.speechSynthesis;
sd1 = "The first prediction is " + prediction_1;
sd2 = "And the second prediction is " + prediction_2;
var utterThis = new SpeechSynthesisUtterance (sd1 + sd2);
synth.speak(utterThis);
}