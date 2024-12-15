// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'

import './scss/utils.scss'
import './main.scss'

createRoot(document.getElementById('root')!).render(
    <App />
)
