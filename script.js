// script.js
function calculate()
{
    p = document.getElementById("p").value;
    n = document.getElementById("n").value;
    r = document.getElementById("r").value;
    if (p<=0) {
        alert("The principal has to be greater than 0");
        return -1;
    }

    result = document.getElementById("result");
    interest = (p*n*r/100);
    currentYear = new Date().getFullYear();
    targetYear = parseInt(n) + currentYear;
    result.innerHTML = "If you deposit <mark>$" + p + "<br></mark> at an interest rate of <mark>" + r + "%</mark>.<br> You will receive an amount of <mark>$" + interest + "</mark><br> in the year <mark>" + targetYear + "</mark><br>";
}