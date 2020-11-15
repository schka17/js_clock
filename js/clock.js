var myVar = setInterval(function() {
    startTime();
}, 1000);
const heute = new Date();
console.log(heute)

function startTime() {
    var today = new Date();
    var D = today.getDate();
    var DoW = today.getDay();
    var M = today.getMonth();
    var Y = today.getFullYear();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    TAG = getDay(DoW);
    MONAT = getMonat(M)
    document.getElementById('clock2').innerHTML =
        Y + "." + M + "." + D + ",  " + h + ":" + m + ":" + s;
    document.getElementById('date').innerHTML = TAG + "., " + D + ". " + MONAT + ". " + Y;
    document.getElementById('hour').innerHTML = h;
    document.getElementById('minute').innerHTML = m;
    document.getElementById('second').innerHTML = s;
    var t = setTimeout(startTime, 500);
    // console.log(Y + "." + M + "." + D + ",  " + h + ":" + m + ":" + s);
    // console.log("Day of week: " + " " + DoW + "Monat: " + M)

}

function getDay(dow) {
    switch (dow) {
        case 0:
            TAG = "Son";
            break;
        case 1:
            TAG = "Mon";
            break;
        case 2:
            TAG = "Die";
            break;
        case 3:
            TAG = "Mit";
            break;
        case 4:
            TAG = "Don";
            break;
        case 5:
            TAG = "Fre";
            break;
        case 6:
            TAG = "Sam";

    }
    console.log(dow + TAG)
    return TAG;
}

function getMonat(month) {
    switch (month) {
        case 0:
            MONAT = "Jan";
            break;
        case 1:
            MONAT = "Feb";
            break;
        case 2:
            MONAT = "Mar";
            break;
        case 3:
            MONAT = "Apr";
            break;
        case 4:
            MONAT = "Mai";
            break;
        case 5:
            MONAT = "Jun";
            break;
        case 6:
            MONAT = "Jul";
            break;
        case 7:
            MONAT = "Aug";
            break;
        case 8:
            MONAT = "Sep";
            break;
        case 9:
            MONAT = "Okt";
            break;
        case 10:
            MONAT = "Nov";
            break;
        case 11:
            MONAT = "Dez";

    }
    return MONAT;
}

function checkTime(i) {
    if (i < 10) { i = "0" + i }; // add zero in front of numbers < 10
    return i;
}