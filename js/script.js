const button = document.querySelector('.login__submit')

button.addEventListener('click', () => {
    const input = document.querySelectorAll("input[type='text'],input[type='password']")

    for (i = 0; i < input.length; i++) {
        if (input[i].value == ''){
            alert(`O campo ${input[i].name} está vazio` )
            return
        }
        
    }
    document.getElementsByClassName("form-login")[0].submit()
})