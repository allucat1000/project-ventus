console.log('The app has been loaded. This is just here to say where main.js has loaded')
console.log(window.parent.console.log)
let Clicks = 0
function buttonClick(){
    Clicks += 1
    document.getElementById("count").innerHTML = ['Clicks:',Clicks].join(' ');
}
function ventusAPI(p1, p2, p3) {
    console.log(['VentusAPI ', p1, '(', p2, ' ', p3, ')'].join(''))
}