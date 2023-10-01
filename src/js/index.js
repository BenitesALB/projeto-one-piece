const buttons = document.querySelectorAll('.button')
const caracter = document.querySelectorAll('.caracter')

buttons.forEach((button, index) =>{
    button.addEventListener('click', () =>{

        desselectButton()
        desselectCaracter()
        
        button.classList.add("selected")
        caracter[index].classList.add('selected')
        
    })
})

function desselectCaracter() {
    const selectedCaracter = document.querySelector('.selected.caracter')
    selectedCaracter.classList.remove('selected')
}

function desselectButton() {
    const selectedButton = document.querySelector('.selected.button')
    selectedButton.classList.remove('selected')
}

