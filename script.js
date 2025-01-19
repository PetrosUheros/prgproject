const tbc1 = document.getElementById("tbc1");
const tbc2 = document.getElementById("tbc2");
const tbc3 = document.getElementById("tbc3");
const btn1 = document.getElementById("btn1")
const Display = document.getElementById("output1")
var s1; 
var s2; 
var s3;
btn1.onclick = function() {
    let c1 =  parseInt(tbc1.value)
    let c2 =  parseInt(tbc2.value)
    let c3 =  parseInt(tbc3.value)
    let max = c1
    if (c2 > max) {
        max = c2
    }
    if (c3> max) {
        max = c3
    }
    let min = c1
    if (min > c2) {min = c2}
    if (min > c3) {min = c3}
    
    let mid
    let x = c1 - c2;
    let y = c2 - c3;
    let z = c1 - c3;

    if (x * y > 0) {mid = c2}
    else if (x*z>0) {mid = c3}
    else mid = c1
    if (document.getElementById("ch1").checked) {document.getElementById("vysledek").innerHTML = `${min}, ${mid}, ${max}`;}
    else {document.getElementById("vysledek").innerHTML = `${max}, ${mid}, ${min}`;}
    



    


            console.log(max)
            console.log(min)
            console.log(mid)
        }
