const button= document.querySelector(".btn"),
      imgs= document.querySelector(".imgs"),
      pp=document.querySelector(".pp"),
      pd=document.querySelector(".pd"),
      dd=document.querySelector(".dd");


button.forEach(btn => {
    btn.addEventListener('click', function(e){
        let x = e.clientX - e.target.offsetLeft;
        let y = e.clientY - e.target.offsetTop;

        let ripples = document.createElement('span');
        ripples.style.left=x+ 'px';
        ripples.style.top =y+ 'px';
        this.appendChild(ripples);
    })
})

button.addEventListener('click', ()=>{
    alert("You are ready?");
})
