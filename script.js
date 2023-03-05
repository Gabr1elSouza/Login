const wrapper = document.querySelector('.wrapper');
const LoginLink = document.querySelector('.Login-Link');
const RegisterLink = document.querySelector('.Register-Link');
const btnPPl= document.querySelector('.btnLogin-popup');
const IconClose= document.querySelector('.icon-close');
const ForgotPassword= document.querySelector('.ForgotPassword');

RegisterLink.addEventListener('click', ()=>{
    wrapper.classList.add('active');
});

LoginLink.addEventListener('click', ()=>{
    wrapper.classList.remove('active');
});

btnPPl.addEventListener('click', ()=>{
    wrapper.classList.add('active-popup');
});

IconClose.addEventListener('click', ()=>{
    wrapper.classList.remove('active-popup');
    wrapper.classList.remove('active');
    wrapper.classList.remove('ForgotPssw');
});

ForgotPassword.addEventListener('click', ()=>{
    wrapper.classList.add('ForgotPssw');
});