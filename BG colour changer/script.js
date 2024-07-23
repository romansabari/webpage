const rightcolor=document.getElementById("color")
const background=document.getElementById("bgcolor")
const button=document.getElementById("btn")

var hexvalue=[0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']

function changed(){
   var hexcolor='#'
   for(i=0;i<6;i++){
      hexcolor=hexcolor+randhexvalue()
   }
   bgcolor.style.backgroundColor = hexcolor
   color.innerHTML=hexcolor
   }
   

function randhexvalue(){
let randomvalue=Math.floor(Math.random()*16)
   return hexvalue[randomvalue]
}

