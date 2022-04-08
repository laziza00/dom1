let eyeBtn = document.querySelector('.eye');
let input = document.querySelector('.input');
let eyeIcon = document.querySelector('.bx-bullseye')
let box__inner = document.querySelector('.box__inner')
let clock = document.querySelector('.bxs-lock-alt')
let box__main = document.querySelector('.box__main')
let text1 = document.querySelector('.text1')
let text2 = document.querySelector('.text2')
let text3 = document.querySelector('.text3')
let text4 = document.querySelector('.text4')
let removeIcon = document.querySelector('.remove')

eyeBtn.addEventListener('click', ()=> {
    eyeIcon.classList.toggle('bx-bullseye');
    eyeIcon.classList.toggle('bx-low-vision');
    box__inner.classList.toggle('white')
    input.classList.toggle('white');
    clock.classList.toggle('gray')

})


input.addEventListener('keyup', (inputValue)=> {
    let text = inputValue.target.value.trim()
    console.log(text)

    if(text.match(/[A-Z]/) !=null ) {
        text1.classList.add('white-color');
        removeIcon.classList.add('.bx-check')
    }
    else {
        text1.classList.remove('white-color')
    }
    if(text.match(/[0-9]/) !=null ) {
        text2.classList.add('white-color');
        removeIcon.classList.add('.bx-check')
    }
    else {
        text2.classList.remove('white-color')
    }
    if(text.match(/[!@#$%^&*]/) !=null ) {
        text3.classList.add('white-color');
        removeIcon.classList.add('.bx-check')
    }
    else {
        text3.classList.remove('white-color')
    }
    if(text.length>= 8) {
        text4.classList.add('white-color');
        removeIcon.classList.add('.bx-check')
    }
    else {
        text4.classList.remove('white-color')
    }

})

input.addEventListener('click', ()=> {
    box__inner.classList.toggle('white')
    input.classList.toggle('white');
    clock.classList.toggle('gray');
    box__main.classList.toggle('d-block')
})












//========= boil js ==========

let boilBtn = document.querySelector('.boil__btn');
let inputBoil = document.querySelector('.input__boil')
let boilBox = document.querySelector('.boil__box');

boilBtn.addEventListener('click', BoilWork)

function BoilWork (e) {
    if(inputBoil != "") {
        let button = document.createElement('button');
        button.className = 'boil__btn-one ';
        button.append(document.createTextNode(inputBoil.value))
        boilBox.appendChild(button);

        let fvalue = inputBoil.value;

        setInterval(() =>{
            setTimeout(()=> {
                fvalue --;
                button.textContent = fvalue;
                if(fvalue ===0) {
                    button.style.display = "none"
                }
            })
        }, 1000);
        inputBoil.value = ""

    }
}