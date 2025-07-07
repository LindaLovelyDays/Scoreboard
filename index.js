let scoring1 = 12
let scoring2 = 5
document.getElementById("score1").textContent = scoring1
document.getElementById("score2").textContent = scoring2

let score1 = document.getElementById("score1")
let score2 = document.getElementById("score2")

function p1Add1(){
    scoring1 = scoring1 + 1
    score1.textContent = scoring1
}

function p1Add2(){
    scoring1 = scoring1 + 2
    score1.textContent = scoring1
}

function p1Add3(){
    scoring1 = scoring1 + 3
    score1.textContent = scoring1
}

function p2Add1(){
    scoring2 = scoring2 + 1
    score2.textContent = scoring2
}

function p2Add2(){
    scoring2 = scoring2 + 2
    score2.textContent = scoring2
}

function p2Add3(){
    scoring2 = scoring2 + 3
    score2.textContent = scoring2
}