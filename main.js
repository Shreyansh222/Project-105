function check()
{
img = document.getElementById('captured_image');
classifier = classify(img,gotResults);
}
function gotResults(error,results){
if(error)
{
console.error(error);
}else{
console.log(results);
document.getElementById("result_object_name").innerHTML = results[0].label;
document.getElementById("result_object_accuracy").innerHTML = results[0].confidence.toFixed(3);
}
}