let policeCar = document.getElementById('policecar')
let crimeScene = document.getElementById('crimescene')
let crimeSceneImg = document.getElementById('crimesceneimg')
let playerName = localStorage.getItem('name')


var timerCount =-3
var points = 0

window.onload = function(){
setTimeout(hidecar,3000);
}
function hidecar()
{
    policeCar.style.display='none';
    crimeSceneImg.style.display='block'
    crimeScene.style.display='block'
}
var right = 0;

function deadBody() {
    let deadBody = document.getElementById('deadBody')
    let labelDeadBody = document.getElementById('labelDeadBody')
    labelDeadBody.style.display='none'
    deadBody.className = 'animation'
    setTimeout(function () { deadBody.style.display = 'none' }, 1000)
    right++
    points += 50
    setTimeout(check.bind(null,right),1000)
}
function bloodhand() {
    let bloodhand = document.getElementById('bloodhand')
    let labelFinger = document.getElementById('labelFinger')
    bloodhand.className='animation'
    setTimeout(function(){bloodhand.style.display='none'},1000)
    labelFinger.style.display='none'
    right++
    points += 50
    setTimeout(check.bind(null,right), 1000)
}
function brokenGlass() {
    let brokenGlass = document.getElementById('brokenGlass')
    let labelBrokenGlass = document.getElementById('labelBrokenGlass')
    brokenGlass.className='animation'
    setTimeout(function () { brokenGlass.style.display = 'none'}, 1000)
    labelBrokenGlass.style.display='none'
    right++
    points += 50
    setTimeout(check.bind(null,right),1000)
}
function headPhone() {
    let headPhone = document.getElementById('headPhone')
    let labelHeadPhone = document.getElementById('labelHeadPhone')
    labelHeadPhone.style.display = 'none'
    headPhone.className = 'animation'
    setTimeout(function () { headPhone.style.display = 'none' }, 1000)
    right++
    points += 50
    setTimeout(check.bind(null,right),1000)
} 
function blood() {
    let blood = document.getElementById('blood')
    let labelBlood = document.getElementById('labelBlood')
    labelBlood.style.display = 'none'
    blood.className = 'animation'
    setTimeout(function () { blood.style.display = 'none' }, 1000)
    right++
    points += 50
    setTimeout(check.bind(null,right),1000)
}  

function check(right)
{
    if(right==5)
    {
        localStorage.setItem('points',points)
        localStorage.setItem('time1',timerCount)
        clearInterval(timerInterval)

        let section = document.getElementById('crimescene')
        let div = document.createElement("div")
        div.className = "popUp"

        let copimg = document.createElement('img')
        copimg.setAttribute('src', '../assets/copcrop.png')
        div.appendChild(copimg)
        
        let heading = document.createElement('h3')
        heading.innerText = `Well Done Detective ${playerName} you got the deadbody and other evidences.Now send the dead body for autopsy .`
        div.appendChild(heading)

        let btn = document.createElement('button')
    
        let btnText = document.createTextNode("Send Body For Autopsy !")
        btn.appendChild(btnText)
        btn.onclick = function(){
            location.replace("../Html/hospital.html")
        }
        div.appendChild(btn)

        section.appendChild(div)
    }
}

let timerInterval = setInterval(timer,1000)

function timer()
{
    if(timerCount>120)
    {
        clearInterval(timerInterval)
        points = 0
        confirm("Try again")
        location.reload();
    }
    else
    {
        timerCount+=1
        let timer = document.getElementById('timer')
        timer.innerHTML = `&nbsp; ${timerCount}`
        document.getElementById('points').innerText='Points :'+ points

    }
}



 
