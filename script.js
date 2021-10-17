
function calculate()
{
    p = document.getElementById("p").value;
    n = document.getElementById("n").value;
    r = document.getElementById("r").value;
    result = document.getElementById("result");
    interest = (p*n*r/100);
    currentYear = new Date().getFullYear();
    targetYear = parseInt(n) + currentYear;
    
    result.innerHTML = "If you deposit $" + p + "<br> at an interest rate of " + r + "%.<br> You will receive an amount of $" + interest + "<br> in the year " + targetYear + "<br>";
    
}