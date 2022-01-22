const form=document.getElementById('email-form');
const email=document.getElementById('email');
const small=document.querySelector('.error-msg');
const border=document.querySelector('#email');

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    checkInputs();
})

function checkInputs(){
    const emailValue=email.value.trim();

    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailValue)){
        showSuccess();
    }else if(emailValue ===''){
        showError();
    }
    else{
        showError();
    }
}


function showError(){
    small.innerText="Please provide a valid email address";
    border.classList.add('email-error');
}

function showSuccess(){
    small.style.color="hsl(223, 87%, 63%)";
    small.innerText="Thank you!";
    border.classList.remove('error-border');
    email.value=''
    form.ariaExpanded;
}
