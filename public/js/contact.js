let inputName=document.querySelector("#inputName"),textarea=document.querySelector("textarea"),progOne=document.querySelector(".progOne"),progTwo=document.querySelector(".progTwo"),maxName=inputName.getAttribute("maxlength"),maxText=textarea.getAttribute("maxlength"),submit=(inputName.oninput=()=>{progOne.style.width=100*inputName.value.length/maxName+"%"},textarea.oninput=()=>{progTwo.style.width=100*textarea.value.length/maxText+"%"},document.querySelector("#submit"));submit.onclick=function(){let e=inputName.value,t=textarea.value;window.open(`https://api.whatsapp.com/send?phone=+97337320462&text=Hi, Abdelrahman! My name is ${e}, I want to tell you that `+t),e.value="",t.value=""};