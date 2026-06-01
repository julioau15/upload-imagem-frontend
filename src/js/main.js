'use strict'

import { criarPreview } from "./pages/preview.js"
import { criarLogin } from "./pages/login.js"

const paginas = {
     preview: {
        titulo: 'Preview Imagens',
        renderizar: criarPreview
     },
     login: {
        titulo: 'Login',
        renderizar: criarLogin
     }
}

export const renderizarPagina = (nomePagina) => {
    const main = document.getElementById('main-content')
    const page = paginas[nomePagina].renderizar()
    
    main.replaceChildren(page)
}

renderizarPagina('login')
