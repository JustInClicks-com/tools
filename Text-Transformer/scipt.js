document.getElementById("clearBtn").onclick = function() {document.getElementById("input").value="";};




document.getElementById("copyBtn").onclick = function() { var copyText = document.getElementById("input");
copyText.select();
copyText.setSelectionRange(0, 99999); 
document.execCommand("copy");
var x = document.getElementById("snackbar");
  x.className = "show";
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);};




  function download(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
}

// Start file download.
document.getElementById("downloadBtn").addEventListener("click", function(){
    // Generate download of hello.txt file with some content
    var text = document.getElementById("input").value;
    var filename = "download.txt";
    
    download(filename, text);
}, false);


document.getElementById("lowerCase").onclick = function() {document.getElementById("input").style="text-transform:lowercase"; };
document.getElementById("upperCase").onclick = function() { document.getElementById("input").style="text-transform:uppercase";};
document.getElementById("capitalCase").onclick = function() { document.getElementById("input").style="text-transform:capitalize"; };
document.getElementById("alternateCase").onclick = function() {ChangeCase(1) };
document.getElementById("sentenceCase").onclick = function() { ChangeCase(2)};

document.getElementById("inverseCase").onclick = function() { ChangeCase(3)};




function ChangeCase(s)
{

    var inp=document.getElementById("input").value;
    var inpBox=document.getElementById("input");
    switch(s){
        case 1:inpBox.value=alterCase(inp);break;
        case 2:inpBox.value=sentenceCase(inp);break;
        case 3:inpBox.value=swapCase(inp);break;

    }

}
+function sentenceCase(theText) {
    return theText.toLowerCase().replace(/(^\s*\w|[\.\!\?]\s*\w)/g,function(c){return c.toUpperCase()});

}

function alterCase(text) {
    return text.split('').map((c,i) => 
        i % 2 == 0 ? c.toLowerCase() : c.toUpperCase()
    ).join('');   
}





var swapCase = function(letters){
    var newLetters = "";
    for(var i = 0; i<letters.length; i++){
        if(letters[i] === letters[i].toLowerCase()){
            newLetters += letters[i].toUpperCase();
        }else {
            newLetters += letters[i].toLowerCase();
        }
    }
    console.log(newLetters);
    return newLetters;
}