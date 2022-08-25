console.log("Hello")
let animationButton = document.getElementById('animationRoute');
let otherButton = document.getElementById('other');

animationButton.addEventListener("click",function (){
    window.location.replace('/animation');

})

otherButton.addEventListener("click", function(){
    window.location.replace('/other');

})