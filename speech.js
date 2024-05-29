const body =document.querySelector(".body")
const  head=body.querySelector(".heading")

let walk=50

function movetxt(e){
    const height=body.offsetHeight
    const width=body.offsetWidth
    let x=e.offsetX
    let y=e.offsetY
    if(this!==e.target){
        x=x+e.target.offsetLeft
        y=y+e.target.offsetTop
    }
    let walkX=Math.floor((x/width*walk)-(walk/2))
    let walkY=Math.floor((y/height*walk)-(walk/2))
    head.style.textShadow=`${walkX}px ${walkY}px 13px rgba(212, 21, 132, 1)`
}
window.addEventListener("mousemove",movetxt)


const recognition=new webkitSpeechRecognition() || new SpeechRecognition();
recognition.interimResults=true

let containing=document.querySelector(".container")
let para=document.createElement('p')
containing.appendChild(para)

recognition.addEventListener('result',e=>{
    const txt=Array.from(e.results)
    .map(rel=>rel[0])
    .map(t=>t.transcript)
    .join('')
    para.textContent=txt
    if(e.results[0].isFinal){
        para=document.createElement('p')
        containing.appendChild(para)
    }
   
})
recognition.addEventListener('end',recognition.start)
recognition.start()