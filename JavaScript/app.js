var rightSection = document.getElementById("midright")
var char1 = document.getElementById("char1")
var char2 = document.getElementById("char2")
var char3 = document.getElementById("char3")
var instructions = document.getElementById('instructions')
localStorage.clear()
function getImage1()
{
    localStorage.setItem("imgsrc",'.'+char1.getAttribute('src'))
    rightSection.style.display = 'block'
    char1.className ="charonclick"
    char2.className = "charonremove"
    char3.className = "charonremove"
}
function getImage2()
{
    localStorage.setItem("imgsrc",document.getElementById("char2").getAttribute('src'))
    rightSection.style.display = 'block'
    char2.className = "charonclick"
    char1.className = "charonremove"
    char3.className = "charonremove"
}
function getImage3() 
{
    localStorage.setItem("imgsrc", document.getElementById("char3").getAttribute('src'))
    rightSection.style.display = 'block'
    char3.className = "charonclick"
    char1.className = "charonremove"
    char2.className = "charonremove"
}
function setName()
{
    
    var playerName = document.getElementById('name').value
    var startGame = document.getElementById('startgame')
    if(playerName=="")
    {
        alert("please enter name")
    }
    else
    {
        localStorage.setItem('name',playerName)
        startGame.style.display = "block"
    }

}
function show()
{
    if(instructions.style.visibility=='visible')
    {
        instructions.style.visibility='hidden'
    }
    else
    {
        instructions.style.visibility = 'visible'
    }
}

