function makeBubble () {
    var clatur = "";

    for(var i=1; i<=133; i++) {
        var rn = Math.floor(Math.random ()* 10)
        clatur = clatur + `<div class="bouble">${rn}</div>`
    }
    
    document.querySelector("#pbtm").innerHTML = clatur;
}
var score = 0;
var timeer = 60;
var pit = 0;

function scorevalueIncrease () {
score = score + 10;
document.querySelector("#scoreval").textContent = score;

}

function runtime () {
        var timerint = setInterval(function(){
            if(timeer >= 0) {
            document.querySelector("#timeout").textContent = timeer;
            timeer--;
            }else{
                clearInterval(timerint);
                document.querySelector("#pbtm").innerHTML = `<h1>Game Over</h1>`
            }
        },1000);
}
function hitval () {
    pit = Math.floor(Math.random()*10);
document.querySelector("#hit").textContent = pit;
}

document.querySelector("#pbtm")
.addEventListener("click",function(dets){
    var clickNum = Number(dets.target.textContent);
    if(pit === clickNum) {
        scorevalueIncrease ();
        makeBubble ();
        hitval ();
    }
})

makeBubble(); 
runtime();
hitval ();
// scorevalueIncrease ();

