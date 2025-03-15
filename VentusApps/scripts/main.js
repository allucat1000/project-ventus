let Clicks = 0
function buttonClick(){
    Clicks += 1
    document.getElementById("count").innerHTML = ['Clicks:',Clicks].join(' ');
}
function VentusAPI(p1, p2) {
    console.log(['VentusAPI ', p1, '(', p2, ')'].join(''))
}