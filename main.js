Webcam.set({
        Width:350,
        height:250,
        img_format:'png',
        png_quality:100
    });
camera=document.getElementById("camera");
Webcam.attach('#camera');

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data-uri+'"/>';
    });
}

console.log('ml version', ml5.version);

classifier=ml5.imageclassifier('https://teachablemachine.withgoogle.com/models/UBa3Xo-J_/model.json');

function modelLoaded(){
    console.log("~~Model Loaded~~");
}
