

window.onresize = screen;
window.onload= screen;



function screen(){
    myWidth = window.innerWidth;
    myHeight = window.innerHeight;
    document.getElementById('mywidth' ,     'myheight').innerHTML
    =`Width :${myWidth}    Height :${myHeight}`
}