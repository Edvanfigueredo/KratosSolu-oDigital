// LOADER
window.addEventListener("load",()=>{
document.getElementById("loader").style.display="none";
});

// MENU MOBILE
const toggle=document.getElementById("menu-toggle");
const menu=document.getElementById("menu");

toggle.addEventListener("click",()=>{
    menu.classList.toggle("active");
});

// CURSOR RAIO
const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
});

// Efeito de impacto ao clicar
document.addEventListener("click", () => {
    cursor.style.transform = "scale(1.8)";
    setTimeout(() => {
        cursor.style.transform = "scale(1)";
        }, 150);
    });

// PARTICLES
const canvas=document.getElementById("particles");
const ctx=canvas.getContext("2d");

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

let particlesArray=[];

class Particle{
    constructor(){
        this.x=Math.random()*canvas.width;
        this.y=Math.random()*canvas.height;
        this.size=Math.random()*3+1;
        this.speedX=Math.random()*1-0.5;
        this.speedY=Math.random()*1-0.5;
    }
update(){
    this.x+=this.speedX;
    this.y+=this.speedY;
    if(this.x<0||this.x>canvas.width) this.speedX*=-1;
    if(this.y<0||this.y>canvas.height) this.speedY*=-1;
}
draw(){
    ctx.fillStyle="#00d9ff";
    ctx.beginPath();
    ctx.arc(this.x,this.y,this.size,0,Math.PI*2);
    ctx.fill();
    }
}

function init(){
    for(let i=0;i<80;i++){
        particlesArray.push(new Particle());
    }
}

function animate(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    particlesArray.forEach(p=>{
    p.update();
    p.draw();
    });
    requestAnimationFrame(animate);
}

init();
animate();