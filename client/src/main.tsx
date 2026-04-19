/* React */
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

/* Firebase */
import "@/lib/firebase";

/* Components */
import App from './App.tsx'

/* Stylesheet */
import "@/global.scss"

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
