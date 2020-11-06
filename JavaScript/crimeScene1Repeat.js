let policeCar = document.getElementById('policecar')
let crimeScene = document.getElementById('crimescene')
let crimeSceneImg = document.getElementById('crimesceneimg')
let playerName = localStorage.getItem('name')
let timerCount = -3
let points = 0
let previousPoints = localStorage.getItem('points')
let totalPoints=0


window.onload = function () {
    setTimeout(hidecar, 3000);
}
function hidecar() {
    policeCar.style.display = 'none';
    crimeSceneImg.style.display = 'block'
    crimeScene.style.display = 'block'
}

var right = 0;

function bloodyBow() {
    let bloodyBow = document.getElementById('bloodyBow')
    let labelBow = document.getElementById('labelBow')
    bloodyBow.className = 'animation'
    setTimeout(function () { bloodyBow.style.display = 'none' }, 1000)
    labelBow.style.display = 'none'
    right++
    points += 50
    setTimeout(check.bind(null, right), 1000)
}

function bloodyShoes() {
    let bloodyShoes = document.getElementById('bloodyShoes')
    let labelShoes = document.getElementById('labelShoes')
    bloodyShoes.className = 'animation'
    setTimeout(function () { bloodyShoes.style.display = 'none' }, 1000)
    labelShoes.style.display = 'none'
    right++
    points += 50
    setTimeout(check.bind(null, right), 1000)
}
function tie() {
    let tie = document.getElementById('tie')
    let labelTie = document.getElementById('labelTie')
    tie.className = 'animation'
    setTimeout(function () { tie.style.display = 'none' }, 1000)
    labelTie.style.display = 'none'
    right++
    points += 50
    setTimeout(check.bind(null, right), 1000)
}
function trashCan() {
    let trashCan = document.getElementById('trashCan')
    let labelCan = document.getElementById('labelCan')
    labelCan.style.display = 'none'
    trashCan.className = 'animation'
    setTimeout(function () { trashCan.style.display = 'none' }, 1000)
    right++
    points += 50
    setTimeout(check.bind(null, right), 1000)
}
function whitePlate() {
    let whitePlate = document.getElementById('whitePlate')
    let labelPlate = document.getElementById('labelPlate')
    labelPlate.style.display = 'none'
    whitePlate.className = 'animation'
    setTimeout(function () { whitePlate.style.display = 'none' }, 1000)
    right++
    points+=50
    setTimeout(check.bind(null, right), 1000)
}

function check(right) {
    if (right == 5) {
        localStorage.setItem('points', totalPoints)
        localStorage.setItem('time2', timerCount)
        clearInterval(timerInterval)
        let section = document.getElementById('crimescene')
        let div = document.createElement("div")
        div.className = "popUp"

        let copimg = document.createElement('img')
        copimg.setAttribute('src', '../assets/copcrop.png')
        div.appendChild(copimg)

        let heading = document.createElement('h3')
        heading.innerText = `Well Done Detective ${playerName}, you got black bow. this might be the key evidence to solve the case.`
        div.appendChild(heading)

        let btn = document.createElement('button')
        let btnText = document.createTextNode(" Send evidences for checkup !")
        btn.appendChild(btnText)
        btn.onclick = function () {
            location.replace("hospitalRepeat.html")
        }
        div.appendChild(btn)
        section.appendChild(div)
    }
}

let timerInterval = setInterval(timer, 1000)

function timer() {
    
    if (timerCount > 120) {
        clearInterval(timerInterval)
        points = 0
        confirm("Try again")
        location.reload();
    }
    else {
        timerCount += 1
        let timer = document.getElementById('timer')
        timer.innerHTML = `&nbsp; ${timerCount}`    
        document.getElementById('points').innerText = 'Points :'+(parseInt(previousPoints) + points)
        totalPoints = (parseInt(previousPoints) + points)
    }
}





