var canvas = document.getElementById('myCanvas1');
var context = canvas.getContext('2d');

var a = 250;
var b = 50;
var cw = 450;
var ch = 300;

context.fillStyle = 'rgba(255,0,0,1)';
context.fillRect(2 * b, 1.5 * b, a, b);

context.fillStyle = 'white';
context.fillRect(2 * b, 2.5 * b, a, b);

context.fillStyle = 'rgb(60,179,113,1)';
context.fillRect(2 * b, 3.5 * b, a, b);

var canvas = document.getElementById('myCanvas2');
var context = canvas.getContext('2d');

context.fillStyle = 'black';
context.fillRect(2 * b, 1.5 * b, a, b);

context.fillStyle = 'red';
context.fillRect(2 * b, 2.5 * b, a, b);

context.fillStyle = 'yellow';
context.fillRect(2 * b, 3.5 * b, a, b);

var canvas = document.getElementById('myCanvas3');
var context = canvas.getContext('2d');

