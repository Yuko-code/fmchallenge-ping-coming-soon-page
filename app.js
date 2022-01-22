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
    small.style.color="hsl(354, 100%, 66%)";
    border.classList.add('email-error');
}

function showSuccess(){
    border.classList.remove('email-error');
    small.style.color="hsl(223, 87%, 63%)";
    small.innerText="Thank you!";
    email.value=''
}
