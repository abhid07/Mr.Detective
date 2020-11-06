let rightContainer = document.getElementById('right-container')
let stage1Time = localStorage.getItem('time1')
let stage2Time = localStorage.getItem('time2')
let totalPoints = localStorage.getItem('points')
let timeBonus = 0
let star = document.getElementById('stars')
let leftContainer = document.getElementById('left-container')
let playerName = localStorage.getItem('name')

window.onload = function(){
    leftContainer.innerHTML = 
    `<h1> Well done Detective <span>${playerName}</span>. You got it right. he is the <span class="clue">killer</span>.</h1>
    <img src="../assets/bartenderinjail.png" alt="">
    `
    let finalTime = (parseInt(stage1Time)) + (parseInt(stage2Time))
    if(finalTime>50)
    {
        timeBonus = 100
        finalScore = timeBonus+parseInt(totalPoints)
    }
    else if (finalTime>=40 && finalTime<50 )
    {
        timeBonus = 200
        finalScore = timeBonus + parseInt(totalPoints)
    }
    else if(finalTime>=20 && finalTime<40)
    {
        timeBonus = 300
        finalScore = timeBonus + parseInt(totalPoints)
    }
    else{
        timeBonus = 500
        finalScore = timeBonus + parseInt(totalPoints)
    }
    rightContainer.innerHTML = ` <h1>Your score</h1>
            <h3>Stage 1 time : <span class = "value">${stage1Time}s</span></h3>
            <h3>Stage 2 time : <span class = "value">${stage2Time}s</span> </h3>
            <h3>Time Bonus : <span class = "value">${timeBonus}</span> </h3>
            <h3>Points : <span class = "value">${totalPoints}</span> </h3>
            <hr>
            <h3 id='finalScore'>Total score : <span class = "value">${finalScore}</span></h3>`
        setTimeout(calculateStar.bind(null,finalScore),2000)
}
function calculateStar(finalScore)
{
    let one = document.getElementById('one')
    let two = document.getElementById('two')
    let three =document.getElementById('three')
    let four = document.getElementById('four')
    let five = document.getElementById('five')

    star.style.display = 'block'
    console.log(finalScore)
    if(finalScore==1000)
    {
        setTimeout(function () { one.style.visibility = 'visible' }, 1000)
        setTimeout(function (){two.style.visibility = 'visible'},1500)
        setTimeout(function () { three.style.visibility = 'visible' }, 2000)
        setTimeout(function () { four.style.visibility = 'visible' }, 2500)
        setTimeout(function () { five.style.visibility = 'visible' }, 3000)
    }
    else if(finalScore>=800 && finalScore<1000)
    {
        setTimeout(function () { one.style.visibility = 'visible' }, 1000)
        setTimeout(function () { two.style.visibility = 'visible' }, 1500)
        setTimeout(function () { three.style.visibility = 'visible' }, 2000)
        setTimeout(function () { four.style.visibility = 'visible' }, 2500)
        setTimeout(function () 
        { 
        five.style.visibility = 'visible' 
        five.style.color='black'
        }, 3000)
    }
    else if(finalScore>=700 && finalScore<800)
    {
        setTimeout(function () { one.style.visibility = 'visible' }, 1000)
        setTimeout(function () { two.style.visibility = 'visible' }, 1500)
        setTimeout(function () { three.style.visibility = 'visible' }, 2000)
        setTimeout(function () 
            {
                four.style.visibility = 'visible'
                four.style.color = 'black'
            }, 2500)
        setTimeout(function () {
            five.style.visibility = 'visible'
            five.style.color = 'black'
        }, 3000)
    }
    if (finalScore >= 500 && finalScore < 700) {
        setTimeout(function () { one.style.visibility = 'visible' }, 1000)
        setTimeout(function () { two.style.visibility = 'visible' }, 1500)
        setTimeout(function () 
        { 
            three.style.visibility = 'visible' 
            three.style.color='black'
        }, 2000)
        setTimeout(function () {
            four.style.visibility = 'visible'
            four.style.color = 'black'
        }, 2500)
        setTimeout(function () {
            five.style.visibility = 'visible'
            five.style.color = 'black'
        }, 3000)
    }
    
}