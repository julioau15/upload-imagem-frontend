'use strict'

import { criarPreview } from "./pages/preview.js"
import { criarLogin } from "./pages/login.js"

const main = document.getElementById('main-content')
const page = criarLogin()
main.append(page)