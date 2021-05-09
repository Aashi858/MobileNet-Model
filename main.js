Webcam.set({
    width : 310,
    height : 300,
    image_format : 'png',
    png_quality : 90,
    constraints : {
        facingMode : "environment"
    }
});
Webcam.attach("#camera");

function captureImage(){
    Webcam.snap(function(data_url){
        document.getElementById("snapshot").innerHTML = "<img id='captured_image' src='" + data_url + "'>";
        console.log("Show Image");
    });
}
console.log("ml5 version -",ml5.version);
classifier = ml5.imageClassifier("MobileNet",model_loaded);
function model_loaded(){
    console.log("Model Loaded");
}
function identify(){
    classify = document.getElementById("captured_image");
    classifier.classify(classify,got_result);
}
function got_result(error,results){
    if(error){
      console.error("error");
    }
    else{
        console.log(results);
        document.getElementById("prediction").innerHTML = results[0].label;
    }
}