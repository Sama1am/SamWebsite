console.log("Hello")
let animationButton = document.getElementById('animationButton');
let otherButton = document.getElementById('gameButton');
let portfolieButton = document.getElementById('portfolioButton');
let backButton = document.getElementById('mainRoute');

animationButton.addEventListener("click",function (){
    window.location.replace('/animation');

})

otherButton.addEventListener("click", function(){
    window.location.replace('/Game');

})

portfolieButton.addEventListener("click", function(){
    window.location.replace('/portfolio');
})

backButton.addEventListener("click", function () {
    window.location.replace('/')

})



