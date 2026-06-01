export function criarLogin() {
    const formulario = document.createElement('form')

    const emailInput = document.createElement('input')
    emailInput.className = 'login-input'
    emailInput.type = 'email'
    emailInput.placeholder = 'Digite seu email'
    emailInput.className = 'form-input'
    emailInput.autocomplete = 'username'
    emailInput.name = 'email'

    const senhaInput = document.createElement('input')
    senhaInput.type = 'password'
    senhaInput.placeholder = 'Digite sua senha'
    senhaInput.className = 'form-input'
    senhaInput.autocomplete = 'current-password'
    senhaInput.name = 'senha'

    const loginButton = document.createElement('button')
    loginButton.type = 'button'
    loginButton.textContent = 'ENTRAR'
    loginButton.className = 'button'
    

    formulario.replaceChildren(emailInput, senhaInput, loginButton)

    return formulario
}
