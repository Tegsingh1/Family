Webcam.set({
    width:350,
    Height:300,
    image_format : 'png',
    png_quality:90
});

camera = document.getElementById("camera");

Webcam.attach('#camera');

console.log('ml5 version',ml5.version);

function take_snapshot()
{
    Webcam.take_snapshot(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
    });
}

console.log("ml5 version, ml5.version");

classifer = ml5.imageClassifer('https://teachablemachine.withgoogle.com/models/_6U5u8x3t/model.json'),modelLoaded;



