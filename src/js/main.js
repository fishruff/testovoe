const menu = document.querySelector('.burgerMenu');
const button = document.querySelector('.burgerBtn');
const room = document.querySelector('.roomsBtn').querySelectorAll('button');
const navigationItem = document.querySelector('.navigation').querySelectorAll('a');
const desc = document.querySelector('.descComplecs');
const complecsItem = document.querySelector('.complecs').querySelectorAll('a');



room.forEach(element => {
    element.addEventListener('click', ()=>{
        room.forEach(btn=>btn.classList.remove('select'))
        element.classList.add('select')
    } )
});

complecsItem.forEach(element => {
    element.addEventListener('mouseover', ()=>{
        console.log(desc.classList.value);
        if(desc.classList.value == 'descComplecs descOpacity'){
            desc.classList.remove('descOpacity')
        }
        
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
// background-video
const video = document.getElementById('v1');
const videotwo = document.getElementById('v2')
const videoBtn = document.getElementById('wrap');
const videoBtnL = document.getElementsByClassName('navBtnL');





videoBtn.addEventListener('click', ()=>{
    if(video.classList.value == 'background-video'){
        videotwo.classList.remove('notVisible')
        video.classList.add('notVisible');
    }
    else{
        videotwo.classList.add('notVisible')
        video.classList.remove('notVisible');
    }
})

// videoBtnL.addEventListener('click', ()=>{
//     console.log(11);
//     if(video.classList.value == 'background-video'){
//         // video.classList.remove('slideL')
//         videotwo.classList.add('slideL');
//     }
//     else{
//         video.classList.add('slideL')
//         // videotwo.classList.remove('slideL');
//     }
// })