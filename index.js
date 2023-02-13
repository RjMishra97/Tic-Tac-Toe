let turn="X"
let btn=document.getElementById("reset")
let isgameover=false
const changeturn=()=>{
    return turn==="X"?"0":"X"
}


const checkwin=()=>{
    let boxtext=document.getElementsByClassName("boxtext")
    let wins=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ]
wins.forEach((ele)=>{
    if((boxtext[ele[0]].innerText===boxtext[ele[1]].innerText) && (boxtext[ele[2]].innerText===boxtext[ele[1]].innerText) && (boxtext[ele[0]].innerText!=="") ){
        document.querySelector("#info").innerText=boxtext[ele[0]].innerText + " won"
        isgameover=true
    }
})
}



let boxes=document.getElementsByClassName("box");
Array.from(boxes).forEach((ele)=>{
    let boxtext=ele.querySelector(".boxtext")
    ele.addEventListener("click",()=>{
        if(boxtext.innerText===""){
            boxtext.innerText=turn;
           turn= changeturn()
           checkwin()
          if(!isgameover){
            document.querySelector("#info").innerText ="Turn for " + turn

          }
    }
    })
})

btn.addEventListener("click",()=>{
    let boxtexts=document.querySelectorAll(".boxtext")
  Array.from(boxtexts).forEach((ele)=>{
    ele.innerText=""
  })
  turn="X";
  isgameover=false
  document.querySelector("#info").innerText ="Turn for " + turn
})