function copyFunction() {
    /* Get the text field */
    var copyText = document.getElementById("output");
  
    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */
  
    /* Copy the text inside the text field */
    document.execCommand("copy");
  
    /* Alert the copied text */
    alert("Command Copied");
  }



  function generateFunction() {

    var min=document.getElementById("minutes").value;
    var hr=document.getElementById("hours").value;
    var d=document.getElementById("day").value;
    var mon=document.getElementById("month").value;
    var wkd=document.getElementById("wkday").value;
    var use=document.getElementById("user").value;
    var pat=document.getElementById("path").value;
    var answer=min+" "+hr+" "+" "+d+" "+mon+" "+wkd+" "+use+" "+pat;

    document.getElementById("output").value=answer;
    


   
  }