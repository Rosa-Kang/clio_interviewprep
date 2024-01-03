const btn = document.getElementById('btn');
const container = document.getElementById('container');

btn.addEventListener('click', ()=> {
    //create a div inside container
    const notiDiv = document.createElement('div');
    notiDiv.classList.add('toast');
    notiDiv.innerText = 'Button is Clicked! Awesome!!'
    
    //append child inside container
    container.appendChild(notiDiv);
    
    //remove notification afer few seconds
    setTimeout(()=> {
        notiDiv.remove();
    }, 2000)
})