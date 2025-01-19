const tbc1 = document.getElementById("tbc1");
const tbc2 = document.getElementById("tbc2");

btn1.onclick = function fun() {
    let c1 =  parseInt(tbc1.value)
    let c2 =  parseInt(tbc2.value)

if (c1 <= 50 && c2 <= 50) {document.getElementById("vysledek").innerHTML = `bod je uvnitř čtverce`}
else (document.getElementById("vysledek").innerHTML = `bod není uvnitř čtverce`)
}
