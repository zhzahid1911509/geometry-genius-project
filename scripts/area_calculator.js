// calculate triangle area
document.getElementById('triangle-calculate').addEventListener('click', function(){
    const baseField = document.getElementById('triangle-base').value;
    const baseValue = parseFloat(baseField);

    const heightField = document.getElementById('triangle-height').value;
    const heightValue = parseFloat(heightField);

    if(baseValue < 1 || heightValue < 1){
        //alert("Zero or Negative value is not ALLOWED");
        alert("Zero or Negative value is not ALLOWED");
        return
    }
    else{
        const triangleArea = 0.5*baseValue*heightValue;
        document.getElementById('showTriangleArea').innerHTML = '<strong style="font-size:20px">'+triangleArea+'</strong>';
    }
});

// calculate rectangle area
document.getElementById('rectangle-calculate').addEventListener('click', function(){
    const widthField = document.getElementById('rectangle-width').value;
    const widthValue = parseFloat(widthField);

    const lengthField = document.getElementById('rectangle-length').value;
    const lengthValue = parseFloat(lengthField);

    if(widthValue < 1 || lengthValue < 1){
        //alert("Zero or Negative value is not ALLOWED");
        alert("Zero or Negative value is not ALLOWED");
        return
    }
    else{
        const rectangleArea = widthValue*lengthValue;
        document.getElementById('showRectangleArea').innerHTML = '<strong style="font-size:20px">'+rectangleArea+'</strong>';
    }
});