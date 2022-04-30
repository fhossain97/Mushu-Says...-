let modal = document.querySelector('#nameModal')
let modalButton = document.querySelector('#name')
let span = document.querySelector('.close')

modalButton.addEventListener('click', () => {
    modal.style.display = 'block'

})

span.addEventListener('click', (e) => {
    let response = prompt('Enter your name!')

    if ((e.target !== modalButton) || (e.target !== span)) {
        modal.style.display = 'none'
    }
})

