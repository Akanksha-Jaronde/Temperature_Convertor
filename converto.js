let celsiusidEl=document.getElementById("celsiusid")
let fahrenheitidEl=document.getElementById("fahrenheitid")
let kelvindEl=document.getElementById("kelvinid")
let clearbtnitidEl=document.getElementById("clearbtnid")

function roundnum(num){
    return Math.round(num*100)/100
}

celsiusidEl.addEventListener('input'.function(
    {
        let,numcelsius : parseFloat(celsiusidEl.value),
        fahrenheitidEl, value : roundnum((numcelsius*(9/5))+32),
        kelvindEl, value : roundnum(numcelsius+273.15),
    }),
    
    fahrenheitidEl.addEventListener('input'.function(
    {
        let,fahrenheit : parseFloat(fahrenheitidEl.value),
        celsiusidEl, value : roundnum((numfahrenheit-32)*(5/9)),
        kelvindEl, value : roundnum(numfahrenheit-32)*(5/9)+(273.15),
    }),
    
    kelvinidEl.addEventListener('input'.function(
    {
        let,numkelvin : parseFloat(kelvinidEl.value),
        fahrenheitidEl, value : roundnum((numkelvin-273.15)*(9/5)+32),
        celsiusidEl, value : roundnum(numkelvin-273.15),
    }),
     function clearbtn()
   {
        celsiusidEl.value = ""
        fahrenheitidEl.value = ""
        KelvinidEl.value = ""
    })));
