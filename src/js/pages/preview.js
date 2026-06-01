export const criarPreview = (preview) => {
    const formulario = document.createElement('form')

    const previewContainer = document.createElement('div')
    previewContainer.className = 'preview-container'

    const inputFile = document.createElement('input')
    inputFile.id = 'preview-input'
    inputFile.className = 'preview-input'
    inputFile.type = 'file'
    inputFile.accept = 'image/*'

    const label = document.createElement('label')
    label.className = 'preview-label'
    label.htmlFor = 'preview-input'

    const img = document.createElement('img')
    img.id = 'preview-image'
    img.className = 'preview-image'
    img.src = './src/img/upload-icon.svg'

    previewContainer.replaceChildren(inputFile, label, img)
    
    const buttonContainer = document.createElement('div')
    buttonContainer.className = 'button-container'
    const btnSalvar = document.createElement('button')
    btnSalvar.className = 'button'
    btnSalvar.id = 'upload-button'
    btnSalvar.type = 'button'
    btnSalvar.textContent = 'Salvar'

    const btnCancelar = document.createElement('button')
    btnCancelar.className = 'button'
    btnCancelar.type = 'button'
    btnCancelar.textContent = 'Cancelar'

    buttonContainer.replaceChildren(btnSalvar, btnCancelar)

    formulario.replaceChildren(previewContainer, buttonContainer)

    return formulario
}