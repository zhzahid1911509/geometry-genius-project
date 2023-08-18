// calculate triangle area
document.getElementById('triangle-calculate').addEventListener('click', function(){
    const baseField = document.getElementById('triangle-base').value;
    const baseValue = parseFloat(baseField);

    const heightField = document.getElementById('triangle-height').value;
    const heightValue = parseFloat(heightField);

    if(baseValue < 1 || heightValue < 1 || heightField === "" || baseField === ""){
        alert("Empty Field, Zero and Negative values are not ALLOWED");
        return
    }
    else{
        const triangleArea = 0.5*baseValue*heightValue;
        document.getElementById('showTriangleArea').innerHTML = '<strong style="font-size:20px">'+triangleArea.toFixed(2)+'</strong>';
        addCalculationEntry('Triangle',triangleArea.toFixed(2));
    }
    
});

// calculate rectangle area
document.getElementById('rectangle-calculate').addEventListener('click', function(){
    const widthField = document.getElementById('rectangle-width').value;
    const widthValue = parseFloat(widthField);

    const lengthField = document.getElementById('rectangle-length').value;
    const lengthValue = parseFloat(lengthField);

    if(widthValue < 1 || lengthValue < 1 || widthField == "" || lengthField == ""){
        //alert("Zero or Negative value is not ALLOWED");
        alert("Empty Field, Zero and Negative values are not ALLOWED");
        return
    }
    else{
        const rectangleArea = widthValue*lengthValue;
        document.getElementById('showRectangleArea').innerHTML = '<strong style="font-size:20px">'+rectangleArea.toFixed(2)+'</strong>';
        addCalculationEntry('Rectangle',rectangleArea.toFixed(2));
    }
});

// calculate parallelogram area
document.getElementById('parallelogram-calculate').addEventListener('click', function(){
    const baseField = document.getElementById('parallelogram-base').value;
    const baseValue = parseFloat(baseField);

    const heightField = document.getElementById('parallelogram-height').value;
    const heightValue = parseFloat(heightField);

    if(baseValue < 1 || heightValue < 1 || baseField == "" || heightField == ""){
        //alert("Zero or Negative value is not ALLOWED");
        alert("Empty Field, Zero and Negative values are not ALLOWED");
        return
    }
    else{
        const parallelogramArea = baseValue*heightValue;
        document.getElementById('showParallelogramArea').innerHTML = '<strong style="font-size:20px">'+parallelogramArea.toFixed(2)+'</strong>';
        addCalculationEntry('Parallelogram',parallelogramArea.toFixed(2));
    }
});

// calculate rhombus area
document.getElementById('rhombus-calculate').addEventListener('click', function(){
    const diagonal_1 = document.getElementById('diagonal-1').value;
    const diagonal_1Value = parseFloat(diagonal_1);

    const diagonal_2 = document.getElementById('diagonal-2').value;
    const diagonal_2Value = parseFloat(diagonal_2);

    if(diagonal_1Value < 1 || diagonal_2Value < 1 || diagonal_2 == "" || diagonal_1 == ""){
        //alert("Zero or Negative value is not ALLOWED");
        alert("Empty Field, Zero and Negative values are not ALLOWED");
        return;
    }
    else{
        const rhombusArea = 0.5*diagonal_1Value*diagonal_2Value;
        document.getElementById('showRhombusArea').innerHTML = '<strong style="font-size:20px">'+rhombusArea.toFixed(2)+'</strong>';
        addCalculationEntry('Rhombus',rhombusArea.toFixed(2));
    }
});

//calculate pentagon area
document.getElementById('pentagon-calculate').addEventListener('click', function(){
    const perimeter = document.getElementById('perimeter').value;
    const perimeterValue = parseFloat(perimeter);

    const apothem = document.getElementById('apothem').value;
    const apothemValue = parseFloat(apothem);

    if(perimeterValue < 1 || apothemValue < 1 || perimeter == "" || apothem == ""){
        //alert("Zero or Negative value is not ALLOWED");
        alert("Empty Field, Zero and Negative values are not ALLOWED");
        return;
    }
    else{
        const pentagonArea = 0.5*perimeterValue*apothemValue;
        document.getElementById('showPentagonArea').innerHTML = '<strong style="font-size:20px">'+pentagonArea.toFixed(2)+'</strong>';
        addCalculationEntry('Pentagon',pentagonArea.toFixed(2));
    }
});

//calculate ellipse area
document.getElementById('ellipse-calculate').addEventListener('click', function(){
    const axis_a = document.getElementById('axis_a').value;
    const axis_aValue = parseFloat(axis_a);

    const axis_b = document.getElementById('axis_b').value;
    const axis_bValue = parseFloat(axis_b);

    if(axis_aValue < 1 || axis_bValue < 1 || axis_b == "" || axis_a == ""){
        //alert("Zero or Negative value is not ALLOWED");
        alert("Empty Field, Zero and Negative values are not ALLOWED");
        return;
    }
    else{
        const ellipseArea = Math.PI*axis_aValue*axis_bValue;
        document.getElementById('showEllipseArea').innerHTML = '<strong style="font-size:20px">'+ellipseArea.toFixed(2)+'</strong>';
        addCalculationEntry('Ellipse',ellipseArea.toFixed(2));
    }
});