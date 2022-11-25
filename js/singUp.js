const button = document.querySelector('.login__submit')
const label_nome = document.querySelector('#label_nome')
const usuario = document.querySelector('#login-input-user')
const email = document.querySelector('#login-input-email')
const senha = document.querySelector('#login-input-senha')
const confirmarSenha = document.querySelector('#confirmar-senha')

button.addEventListener('click', () => {
    const input = document.querySelectorAll("input[type='text'],input[type='email'],input[type='password']")

    for (i = 0; i < input.length; i++) {
        if (input[i].value == ''){
            alert(`O campo ${input[i].name} está vazio` )
            return
        }
        
    }

    document.getElementsByClassName("form-login")[0].submit()
})