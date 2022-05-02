//https://teachablemachine.withgoogle.com/models/9iZXrlziM/
Webcam.set({
    width : 350 , 
    height:300,
    image_format:"png",
    png_quality:95
    
});

camera=document.getElementById("camera");

Webcam.attach('camera');



function take_snapshot(){
    Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML="<img id='selfie_image' src='"+data_uri+"'/>"; 
    });
}

console.log("ml5 version"+ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/9iZXrlziM/model.json',modelLoaded);

function modelLoaded(){
    console.log("model loaded")
}

function speak(){
    var synth = window.speechSynthesis;
  var  speak_data_1 = "the first prediction is "+ predicition_1;
  var  speak_data_2 = "the second prediction is "+ predicition_2;
  var utterThis= new SpeechSynthesisUtterance(speak_data_1+speak_data_1);
  synth.speak(utterThis);
}

