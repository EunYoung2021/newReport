"use strict";

// the url for the save.php script => save the image in aa folder .. 
const GLOBALE_URL = "http://localhost/app/php/save.php" ;

const containerElem = document.querySelector('.container');

// save the picture is drawn .. 
document.getElementById('save').addEventListener("click", function () {
    // let dataURL = canvas.toDataURL(); // default is 'image/png' ..
    // let screen = $('.container');
    let screen = $('body');
    // console.log(screen[0])
    
    html2canvas(screen[0]).then(function(canvas) {
        var img = canvas.toDataURL();
        document.getElementById('canvas-result').src = img;
        document.getElementById('canvas-result').style.display = 'inline';
        
        //AJAX to Server base64 data to the server
        $.ajax({
           type:"POST",
            url: GLOBALE_URL,
            dataType: "text",
            // data: { basedata : dataURL   }, //dataURL >> img
            data: { basedata : img   }, //dataURL >> img
            success: function (result){
                console.log(result);
                
            }
        });
        var resultArea = document.getElementById('canvas-result');
        var link = document.createElement('a');
        link.download = 'report.png';
        link.href = img;
        resultArea.appendChild(link);
        link.click();
    })
    
    
});