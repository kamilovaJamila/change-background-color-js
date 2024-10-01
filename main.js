// array colors
let colors = [
    'pink', 'blue', 'red', 'aqua', 'blue', 'orange', 'brown', 'gray', 'yellow', 'green'
];
// get btn and background
let btn = document.querySelector('#clickBtn');
let background = document.querySelector('#background');


// click addEventListener
btn.addEventListener('click', function(){
 let randomColors = colors[Math.round(Math.random() * colors.length )];

 background.style.background = randomColors;
   
})