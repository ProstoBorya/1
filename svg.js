let step_x=5;
let step_y=5;
let svg=document.querySelector('svg');
let image=document.querySelector('image');
let width=parseInt(svg.getAttribute('width'));
let height=parseInt(svg.getAttribute('height'));
let width_ball=parseInt(image.getAttribute('width'));
let height_ball=parseInt(image.getAttribute('height')); 
function move() {
let x=parseInt(image.getAttribute('x'));
let y=parseInt(image.getAttribute('y')); 
x+=step_x;
y+=step_y;
if (y+height_ball>=height) {
step_y=-step_y;
}else if(x+width_ball>=width){
    step_x=-step_x;
}else if(y+height_ball==height_ball){
    step_y=step_y+5
}else if(x+height_ball==width_ball){
    step_x=step_x+5
}
image.setAttribute('x', x);
image.setAttribute('y', y);
}
setInterval(move, 10)