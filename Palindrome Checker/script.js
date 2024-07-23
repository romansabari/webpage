
function update(){

let palword=document.getElementById("input").value
let reverse=palword.split("").reverse().join("")

if(palword==reverse){
    document.getElementById("result").innerHTML=("It is a Palindrome word :"+reverse)
}
else{
    document.getElementById("result").innerHTML=("It is not a Palindrome word :"+reverse)
}
}