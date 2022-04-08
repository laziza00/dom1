let eyeBtn = document.querySelector('.eye');
let input = document.querySelector('.input');
let eyeIcon = document.querySelector('.bx-bullseye')
let box__inner = document.querySelector('.box__inner')
let clock = document.querySelector('.bxs-lock-alt')
let box__main = document.querySelector('.box__main')
let text1 = document.querySelector('.text1')

eyeBtn.addEventListener('click', ()=> {
    eyeIcon.classList.toggle('bx-bullseye');
    eyeIcon.classList.toggle('bx-low-vision');
    box__inner.classList.toggle('white')
    input.classList.toggle('white');
    clock.classList.toggle('gray')

})


input.addEventListener('keyup', (inputValue)=> {
    let text = inputValue.target.value.toLowerCase()
    filterInput(text)
})
input.addEventListener('click', ()=> {
    box__inner.classList.toggle('white')
    input.classList.toggle('white');
    clock.classList.toggle('gray');
    box__main.classList.add('d-block')
})
arr = ['a', 'b', 'c', 'd', 'e', 'f','g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'k', 'r', 's', 't', 'u', 'v','w', 'x', 'y','z' ]
function filterInput(itemText) {
    let ftext = itemText.trim()


    //    if(ftext.includes(arr).toUpperCase) {
    //        text1.classList.add('white-color')
    //    }
}










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