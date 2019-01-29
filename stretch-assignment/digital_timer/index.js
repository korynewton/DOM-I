const tens = document.getElementById('secondTens')
const ones = document.getElementById('secondOnes')
const msHundreds = document.getElementById('msHundreds')
const msTens = document.getElementById('msTens')



const allDigits = document.querySelectorAll('.digit');


//Initialize at 0:
tens.textContent = 0;
ones.textContent = 0;
msHundreds.textContent = 0;
msTens.textContent = 0;


setInterval(function() {
    if (msTens.textContent < 9 && tens.textContent < 1) {
        ++msTens.textContent
    }
    else {
        msTens.textContent = 0;
    }
    }, 10)
    
setInterval(function() {
    if (msHundreds.textContent < 9 && tens.textContent < 1) {
        ++msHundreds.textContent
    }
    else {
        msHundreds.textContent = 0;
    }
}, 100)
     
setInterval(function() {
    if (ones.textContent < 9 && tens.textContent < 1) {
        ++ones.textContent
    }
    else {
        ones.textContent = 0;
        allDigits.forEach(element => element.style.color = 'red')
    }
}, 1000)

setInterval(function() {
    if (tens.textContent < 1) {
        ++tens.textContent
    }
}, 10000)






