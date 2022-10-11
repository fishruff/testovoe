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

//RANGE-SLIDER

const rangeInput = document.querySelectorAll(".rangeInput input"),
priceInput = document.querySelectorAll(".rangeItem input"),
range = document.querySelector(".slider .progress");
let areaGap = 10;
//area
priceInput.forEach(input =>{
    input.addEventListener("input", e =>{
        let minPrice = parseInt(priceInput[0].value),
        maxPrice = parseInt(priceInput[1].value);
        
        if((maxPrice - minPrice >= areaGap) && maxPrice <= rangeInput[1].max){
            if(e.target.className === "input-min"){
                rangeInput[0].value = minPrice;
                range.style.left = ((minPrice / rangeInput[0].max) * 100) + "%";
            }else{
                rangeInput[1].value = maxPrice;
                range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + "%";
            }
        }
    });
});

rangeInput.forEach(input =>{
    input.addEventListener("input", e =>{
        let minVal = parseInt(rangeInput[0].value),
        maxVal = parseInt(rangeInput[1].value);

        if((maxVal - minVal) < areaGap){
            if(e.target.className === "range-min"){
                rangeInput[0].value = maxVal - areaGap
            }else{
                rangeInput[1].value = minVal + areaGap;
            }
        }else{
            priceInput[0].value = minVal;
            priceInput[1].value = maxVal;
            range.style.left = ((minVal / rangeInput[0].max) * 100) + "%";
            range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
        }
    });
});
//price
const rangeInputP = document.querySelectorAll(".priceI input"),
priceInputP = document.querySelectorAll(".priceO input"),
rangeP = document.querySelector(".priceR .progress");
let priceGap = 1;

priceInputP.forEach(input =>{
    input.addEventListener("input", e =>{
        let minPrice = parseInt(priceInputP[0].value),
        maxPrice = parseInt(priceInputP[1].value);
        
        if((maxPrice - minPrice >= priceGap) && maxPrice <= rangeInputP[1].max){
            if(e.target.className === "input-min"){
                rangeInputP[0].value = minPrice;
                range.style.left = ((minPrice / rangeInputP[0].max) * 100) + "%";
            }else{
                rangeInputP[1].value = maxPrice;
                range.style.right = 100 - (maxPrice / rangeInputP[1].max) * 100 + "%";
            }
        }
    });
});

rangeInputP.forEach(input =>{
    input.addEventListener("input", e =>{
        let minVal = parseInt(rangeInputP[0].value),
        maxVal = parseInt(rangeInputP[1].value);

        if((maxVal - minVal) < priceGap){
            if(e.target.className === "range-min"){
                rangeInputP[0].value = maxVal - priceGap
            }else{
                rangeInputP[1].value = minVal + priceGap;
            }
        }else{
            priceInputP[0].value = minVal;
            priceInputP[1].value = maxVal;
            rangeP.style.left = ((minVal / rangeInputP[0].max) * 100) + "%";
            rangeP.style.right = 100 - (maxVal / rangeInputP[1].max) * 100 + "%";
        }
    });
});