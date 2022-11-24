const button = document.querySelector('.login__submit')
const span = document.createElement("span")

button.addEventListener('click', () => {
    const input = document.querySelectorAll('input')

    for (i = 0; i < input.length; i++) {
        alert(`O campo ${input[i].name} está vazio` )
        return
    }
    document.getElementsByClassName("form-login")[0].submit()
})