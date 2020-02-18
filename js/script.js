function fortune()
{
    let f=[
        "A body makes his own luck, be it good or bad.",
        "Change yourself and fortune will change.",
        "Good things come when you least expect them.",
        "Great actions are not always true sons of great and mighty resolutions. ",
        "Happy is the bride that the sun shines on.",
        "Well, I was never in luck's way long",
        "Many outcomes were greatly improved by things that delayed them.",
        "When ill luck begins, it does not come in sprinkles, but in showers.",
        "You are a person marked for sorrow.",
        "When life sucks.LIFE SUCKS!",
    ];
    let rand = Math.random()*10;
    rand = Math.ceil(rand)-1;
    console.log(rand);
    document.getElementById("fortune").innerHTML = f[rand];
}

    function setValue(am) {
        var USDv = am/84.96;
        var CADv = am/64.08;
        var EURv = am/91.94;
        var GBPv = am/110.64;
        document.getElementById("BDTC").value=am;
        document.getElementById("USDC").value=USDv;
        document.getElementById("CADC").value= CADv;
        document.getElementById("EURC").value= EURv;
        document.getElementById("GBPC").value= GBPv;
    }
function BDT() {
    setValue(document.getElementById("BDTC").value);
    document.getElementById("sc").innerHTML = 'BDT';
}
function USD() {
    setValue((document.getElementById("USDC").value)*84.96);
    document.getElementById("sc").innerHTML = 'USD';
}
function CAD() {
    setValue((document.getElementById("CADC").value)*64.08);
    document.getElementById("sc").innerHTML = 'CAD';
}
function EUR() {
    setValue((document.getElementById("EURC").value)*91.94);
    document.getElementById("sc").innerHTML = 'EUR';
}
function GBP() {
    var x = document.getElementById("GBPC").value;
    setValue(x*110.64);
    document.getElementById("sc").innerHTML = 'GBP';
}


