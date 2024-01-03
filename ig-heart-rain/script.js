const btn = document.getElementById('button');
const container = document.getElementById('container');

function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.left = Math.random()*100 + "vw";
    heart.style.animationDuration = Math.random() * 2 + 3 + "s";

    heart.innerText ='💜';
    container.appendChild(heart);

    setInterval(()=> {
        heart.remove();
    }, 3000)
}

btn.addEventListener('click', ()=> {
    setInterval(createHeart, 300);
})