

function generateFunction()
{
    var inputMobile=document.getElementById("mobile");
    var inputMsg=document.getElementById("message");
    var finalMsg=encodeURIComponent(inputMsg.value);
    var wpLink='https://wa.me/';
    wpLink  =wpLink+inputMobile.value+"/?text="+finalMsg;
    document.getElementById("wp-link").value=wpLink;

var WPscript="<script type=\"text/javascript\"> \n var wpURL="+wpLink+";\n</script>\n<div id=\"whatsapp-btn\"></div>\n <script type=\"text/javascript\" src=\"https://static-cdn.swayalgo.com/Public CDN/whatsapp-widget.js\"></script>"

document.getElementById("wp-widget").value=WPscript;
}


function myFunction() {
    /* Get the text field */
    var copyText = document.getElementById("myInput");
  
    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */
  
    /* Copy the text inside the text field */
    document.execCommand("copy");
  
    /* Alert the copied text */
    alert("Copied the text: " + copyText.value);
  }