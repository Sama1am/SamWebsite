let gameInfo = document.getElementById("gameInfo");
let butt


fetch('https://api.github.com/users/Sama1am/repos').then(data => {
    return data.json()
}).then(data =>{
    data.map(x => {
       // gameInfo.append(`<h1>${x.name}</h1>`);
       let tempdiv = document.createElement('div')
       tempdiv.classList.add('buttonPos');
       let button = document.createElement('button')
       button.classList.add('buttonPadding', 'gameButton');
       button.innerHTML = x.name + '\n' + "Language: " + x.language;
       
        button.onclick = function (){
        console.log(x.name);
        window.location.href = x.html_url;
        
       }
       tempdiv.appendChild(button)
       
       gameInfo.appendChild(tempdiv);
    })
})




