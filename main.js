const menu = document.querySelector('.burgerMenu');
const button = document.querySelector('.burgerBtn');
const navItem = document.querySelectorAll('.navItem');
const navigationItem = document.querySelector('.navigation').querySelectorAll('a');
const desc = document.querySelector('.descComplecs');
const complecsItem = document.querySelector('.complecs').querySelectorAll('a');

console.log(navItem);

navItem.forEach(element => {
    element.addEventListener('mouseover', ()=>{
        if(element.classList.value == 'navItem hoverLink')
        element.classList.remove('hoverLink')
        else
        element.classList.add('hoverLink')
    } )
});

complecsItem.forEach(element => {
    element.addEventListener('mouseover', ()=>{
        desc.classList.remove('descOpacity')
        desc.classList.add('descOpacity')
    } )
});

    button.addEventListener('click', ()=>{
        if(button.classList.value == 'burgerBtn active'){
            button.classList.remove('active')
        }
        else
        button.classList.add('active')
    })

