var myVar = setInterval(function() {
    startTime();
}, 1000);

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
        // document.getElementById('clock2').innerHTML =
        //     Y + "." + M + "." + D + ",  " + h + ":" + m + ":" + s;
    document.getElementById('date').innerHTML = TAG + "., " + D + ". " + MONAT + ". " + Y;
    document.getElementById('hour').innerHTML = h;
    document.getElementById('minute').innerHTML = m;
    document.getElementById('second').innerHTML = s;
    var t = setTimeout(startTime, 500);
    // console.log("tick")
}

function getDay(dow) {
    switch (dow) {
        case 0:
            TAG = "Son";
        case 1:
            TAG = "Mon";
        case 2:
            TAG = "Die";
        case 3:
            TAG = "Mit";
        case 4:
            TAG = "Don";
        case 5:
            TAG = "Fre";
        case 6:
            TAG = "Sam";
    }
    return TAG;
}

function getMonat(month) {
    switch (month) {
        case 1:
            MONAT = "Jan";
        case 2:
            MONAT = "Feb";
        case 3:
            MONAT = "Mar";
        case 4:
            MONAT = "Apr";
        case 5:
            MONAT = "Mai";
        case 6:
            MONAT = "Jun";
        case 7:
            MONAT = "Jul";
        case 8:
            MONAT = "Aug";
        case 9:
            MONAT = "Sep";
        case 10:
            MONAT = "Okt";
        case 11:
            MONAT = "Nov";
        case 12:
            MONAT = "Dez";

    }
    return MONAT;
}

function checkTime(i) {
    if (i < 10) { i = "0" + i }; // add zero in front of numbers < 10
    return i;
}