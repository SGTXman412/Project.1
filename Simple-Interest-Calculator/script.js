function compute()
{
    p = document.getElementById("principal").value;
    if (p < 1) { 
        alert("Enter positive value.");
        document.getElementById("principal").focus();
        return
    }
    n = document.getElementById("years").value;
    r = document.getElementById("rate").value;
    s = document.getElementById("endResult");
    year = parseInt(new Date().getFullYear()) + parseInt(n);
    endresult = "If you deposit <span class='highlight'>"+ p +"</span>"
            +",<br> at an interest rate of <span class='highlight'>"+ r +"%</span>"
            +". <br> You will receive an amount of <span class='highlight'> "+(p*n*r/100)+"</span>"
            +", <br> in the year <span class='highlight'> "+ year +"</span>" ;
    s.innerHTML = endresult;
}
function updateTextInput(val) {
    document.getElementById('textInput').value=val;
    r = document.getElementById('textInput');
    r.innerHTML = document.getElementById('rate').value+ '%';
}



   