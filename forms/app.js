function animatedForm() {
    const arrows = document.querySelectorAll('.fa-arrow-down');

    arrows.forEach(arrow=> {
        arrow.addEventListener('click', ()=>{
            const input = arrow.previousElementSibling;
            const parent = arrow.parentElement;
            const nextForm = parent.nextElementSibling;
            
            //check for validation
            if(input.type === "text"  && validateUser(input))  {
                nextForm(parent, nextForm);
            } else if(input.type === "email" && validateEmail(input))  {
                nextForm(parent, nextForm);
            } else {

            }
        })
    });
}

function validateUser(user){
    if (user.value.length < 6)  {
        console.log("not enough charactes..");
        error('rgb(189, 87, 87)')
    } else  {
        error('rgb(87, 189, 130)');
        return true;
    }
}

function validateEmail(email) {
    const validation = /^([a-zA-Z0-9_\-\.] +)@([a-zA-Z0-9_\-\.];
}

function nextForm(parent, nextForm){
    parent.classList.add('innactive');
    parent.classList.remove('active');
    nextForm.classList.add('active');
}

function error(color) {
    document.body.style.backgroundColor = color;
}

animatedForm();