let doctorChat = document.getElementById('doctorchat')
let selectedImg = localStorage.getItem('imgsrc') 
let playerName = localStorage.getItem('name')
let arrest1Sus  = document.getElementById('arrest1')
let arrest2Sus = document.getElementById('arrest2')

window.onload = function () {
    displaychat()
}
function displaychat() {
    let div1 = document.createElement('div')
    div1.className = 'purple-container'

    let docName = document.createElement('h2')
    docName.innerText = "Dr. James"
    div1.appendChild(docName)

    let hr = document.createElement('hr')
    div1.appendChild(hr)

    let docImg = document.createElement('img')
    docImg.setAttribute('src', "../assets/doctor.png")
    div1.appendChild(docImg)

    let docText = document.createElement('h3')
    docText.innerHTML = `Hello detective <span>${playerName}.</span> the blood we got from the <span class="clue">black bow & black shoes</span> was victims. but her dresscode was different . so its clear that this items belongs to killer. `
    div1.appendChild(docText)
    doctorChat.appendChild(div1)
// ---------------------------------------------------------------------------

    let div2 = document.createElement('div')
    div2.className = 'white-container'

    let copName = document.createElement('h2')
    copName.innerText = "Sam"
    div2.appendChild(copName)

    let hr1 = document.createElement('hr')
    div2.appendChild(hr1)

    let copImg = document.createElement('img')
    copImg.setAttribute('src', "../assets/copcrop.png")
    div2.appendChild(copImg)

    let copText = document.createElement('h3')
    copText.innerHTML= `Hey <span>${playerName}</span>, we have a <span class="clue">witness</span>, he told that this items belongs to the dresscode of Bar Tender. There were two bartenders into the party.Look closely to the evidence and arrest the right criminal.`
    div2.appendChild(copText)

    let button1 = document.createElement('button')
    let button1Text = document.createTextNode("Lets arrest to the criminal!")
    button1.appendChild(button1Text)
    button1.setAttribute("onclick", "arrest()")
    div2.appendChild(button1)

    doctorChat.appendChild(div2)
}
function arrest()
{
    let criminalContainer = document.getElementById('criminal-container')
    criminalContainer.style.display='block' 
}

function arrest1()
{
    arrest2Sus.disabled = true
    let section = document.getElementById('criminal-container')
    let div = document.createElement("div")
    div.className = "popUp"

    let copimg = document.createElement('img')
    copimg.setAttribute('src', '../assets/copcrop.png')
    div.appendChild(copimg)

    let heading = document.createElement('h3')
    heading.innerHTML = `Detective <span>${playerName}</span> you need to be more focused while solving the case`
    div.appendChild(heading)

    let btn = document.createElement('button')
    let btnText = document.createTextNode("Try again")
    btn.onclick=function(){ location.reload()}
    btn.appendChild(btnText)
    div.appendChild(btn)

    section.appendChild(div)
}

function arrest2() {
    arrest1Sus.disabled = true
    let section = document.getElementById('criminal-container')
    let div = document.createElement("div")
    div.className = "popUp"

    let copimg = document.createElement('img')
    copimg.setAttribute('src', '../assets/copcrop.png')
    div.appendChild(copimg)

    let heading = document.createElement('h3')
    heading.innerHTML = `Detective <span>${playerName}</span> Are you sure you want to arrest him ? `
    div.appendChild(heading)

    let btn = document.createElement('button')
    let btnText = document.createTextNode("Yes")
    btn.onclick = function () { window.location.replace('arrest.html') }
    btn.appendChild(btnText)
    div.appendChild(btn)

    section.appendChild(div)
}