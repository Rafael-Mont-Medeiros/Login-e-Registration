let title = document.querySelector('#title');
let nameZone = document.querySelector('#nameZone');
let singUpBtn= document.querySelector('#singupbtn');
let singInBtn = document.querySelector('#singinbtn');


function singIn(){
    title.innerHTML = 'Sing In';
    nameZone.style.maxHeight = '0';
    singUpBtn.classList.add('disable');
    singInBtn.classList.remove('disable');

};

function singUp(){
    title.innerHTML = 'Sing Up';
    nameZone.style.maxHeight = '65px';
    singInBtn.classList.add('disable');
    singUpBtn.classList.remove('disable');
};