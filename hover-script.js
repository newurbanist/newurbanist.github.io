

function Thing(x, y)
{
    this.x = x;
    this.y = y;
}

var mousePos = new Thing(0, 0);

mydiv = document.getElementById("mydiv");
mycanvas = document.getElementById("mycanvas");

mydiv.addEventListener('mousemove', function(event)
{
    mousePos.x = event.clientX;
    mousePos.y = event.clientY;

    mycanvas.style.top = mousePos.y + "px";
    mycanvas.style.left = mousePos.x + "px";
    console.log(mycanvas.style);
}, false);




/* Mouse Tracking to Uncover Text */

let btn = document.querySelector('.mouse-cursor-gradient-tracking');
btn.addEventListener('mousemove', e => {
  let rect = e.target.getBoundingClientRect();
  let x = e.clientX - rect.left;
  let y = e.clientY - rect.top;
  btn.style.setProperty('--x', x + 'px');
  btn.style.setProperty('--y', y + 'px');
});

