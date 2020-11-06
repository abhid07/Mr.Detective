let ambulance = document.getElementById('ambulance')
let playerName = localStorage.getItem('name')
let result = document.getElementById('result')
let doctorChat = document.getElementById('doctorchat')
let selectedImg = localStorage.getItem('imgsrc') 


window.onload = function () {
    
    setTimeout(hidecar, 3930);
}
function hidecar() {
    audio.pause()
    ambulance.style.display = 'none';
    result.style.display = 'block'
}
var timeleft = 10;
var downloadTimer = setInterval(function () {
    if (timeleft <= 0) {
        clearInterval(downloadTimer);
        result.style.display='none'
        doctorChat.style.display = 'block'
        displaychat()
    }
    document.getElementById("progressBar").value = 10 - timeleft;
    timeleft -= 1;
}, 1000);

function displaychat()
{
    let div1 = document.createElement('div')
    div1.className = 'purple-container'

    let docName = document.createElement('h2')
    docName.innerText = "Dr. James"
    div1.appendChild(docName)

    let hr1 = document.createElement('hr')
    div1.appendChild(hr1)

    let docImg = document.createElement('img')
    docImg.setAttribute('src', "../assets/doctor.png")
    div1.appendChild(docImg)

    let docText = document.createElement('h3')
    docText.innerHTML = `Hello detective <span>${playerName}</span> we got to know that victims name was <span>Ralph</span>. she was 30 years old. the tool used for crime was piece of broken glass.`
    div1.appendChild(docText)
    doctorChat.appendChild(div1)
// ----------------------------------------------------------

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
    playerText.innerHTML = `Hello <span>Dr. James</span> , yes we found that tool. did you got any fingerprint on that?`
    div2.appendChild(playerText)

    let button1 = document.createElement('button')
    let button1Text = document.createTextNode("Ask for fingerprints !")
    button1.appendChild(button1Text)
    button1.setAttribute("onclick", "playerResponse()")
    div2.appendChild(button1)
    doctorChat.appendChild(div2)
}
function playerResponse() {
    let div3 = document.createElement('div')
    div3.className = 'purple-container'

    let docName = document.createElement('h2')
    docName.innerText = "Dr. James"
    div3.appendChild(docName)

    let hr1 = document.createElement('hr')
    div3.appendChild(hr1)

    let docImg = document.createElement('img')
    docImg.setAttribute('src', "../assets/doctor.png")
    div3.appendChild(docImg)

    let docText = document.createElement('h3')
    docText.innerHTML = `No, the murder was well planned but we got shredded piece of a <span class="clue">black bow</span> in her hands. i think that piece might be the killers one. go and check again if you find anything like this.`
    div3.appendChild(docText)
    doctorChat.appendChild(div3)
// ---------------------------------------------------------------------------------

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
    playerText.innerText = `yes,we need to hurry.`
    div4.appendChild(playerText)

    let button1 = document.createElement('button')
    let button1Text = document.createTextNode("Let's Go Sam!")
    button1.appendChild(button1Text)
    button1.setAttribute("onclick", "goToCrimeScene()")
    div4.appendChild(button1)
    doctorChat.appendChild(div4)
}

function goToCrimeScene() {
    window.location.replace('crimeScene1Repeat.html')
}