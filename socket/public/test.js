const socket = io("http://localhost:3000")
const btn = document.getElementById("btn");
const message = document.getElementById("msg");

btn.addEventListener("click",_=>{
    socket.emit('message',"sit back and sip some tea")
})

socket.on("connected",start=>{
    message.innerHTML = String(start)
})