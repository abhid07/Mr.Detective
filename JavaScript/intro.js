// let img = document.getElementById('4')
// img.setAttribute('src',localStorage.getItem('url'))

var playerName = localStorage.getItem('name')
var selectedImg = localStorage.getItem('imgsrc')


var chatContainer = document.getElementById('chatcontainer')

window.onload = function () {
    let div1 = document.createElement('div')
    div1.className = 'white-container'

    let copName = document.createElement('h2')
    copName.innerText = "Sam"
    div1.appendChild(copName)

    let hr1 = document.createElement('hr')
    div1.appendChild(hr1)

    let copImg = document.createElement('img')
    copImg.setAttribute('src', "../assets/copcrop.png")
    div1.appendChild(copImg)

    let copText = document.createElement('h3')
    copText.innerHTML = `Welcome detective <span>${playerName}</span> , my name is sam. i am a cop. we are having some trouble to solve a case so we need your detective skills. are you ready?`
    div1.appendChild(copText)

    chatContainer.appendChild(div1)

    let div2 = document.createElement('div')
    div2.className = 'blue-container'

    let PlayerName = document.createElement('h2')
    PlayerName.innerText = playerName
    div2.appendChild(PlayerName)

    let hr2 = document.createElement('hr')
    div2.appendChild(hr2)

    let playerImg = document.createElement('img')
    playerImg.setAttribute('src', selectedImg)
    div2.appendChild(playerImg)

    let playerText = document.createElement('h3')
    playerText.innerHTML = `Hello <span>sam</span> , yes sure i am ready to help. Give me the details about case.`
    div2.appendChild(playerText)

    let button1 = document.createElement('button')
    let button1Text = document.createTextNode("Tell me more !")
    button1.appendChild(button1Text)
    button1.setAttribute("onclick", "playerResponse()")
    div2.appendChild(button1)
    chatContainer.appendChild(div2)
}

function playerResponse() {
    let div3 = document.createElement('div')
    div3.className = 'white-container'

    let copName = document.createElement('h2')
    copName.innerText = "Sam"
    div3.appendChild(copName)

    let hr1 = document.createElement('hr')
    div3.appendChild(hr1)

    let copImg = document.createElement('img')
    copImg.setAttribute('src', "../assets/copcrop.png")
    div3.appendChild(copImg)

    let copText = document.createElement('h3')
    copText.innerHTML = `Detective <span>${playerName}</span> , There was a party at hotel blue rose last night, it was attended by 30 guests and 2 bartenders. one of those guest was murdered by killer. After watching CCTV footage we came to know that no one entered the party except those 30 guests , so the killer must be one of those who attended the party.`
    div3.appendChild(copText)

    chatContainer.appendChild(div3)

    let div4 = document.createElement('div')
    div4.className = 'blue-container'

    let PlayerName = document.createElement('h2')
    PlayerName.innerText = playerName
    div4.appendChild(PlayerName)

    let hr2 = document.createElement('hr')
    div4.appendChild(hr2)

    let playerImg = document.createElement('img')
    playerImg.setAttribute('src', selectedImg)
    div4.appendChild(playerImg)

    let playerText = document.createElement('h3')
    playerText.innerText = `We will find the killer.Take me to the crime scene.`
    div4.appendChild(playerText)

    let button1 = document.createElement('button')
    let button1Text = document.createTextNode("Let's Go")
    button1.appendChild(button1Text)
    button1.setAttribute("onclick", "goToCrimeScene()")
    div4.appendChild(button1)
    chatContainer.appendChild(div4)
}

function goToCrimeScene() {
    location.replace('../Html/crimeScene1.html')
}