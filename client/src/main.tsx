/* React */
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

/* React Router */
import { BrowserRouter as Router } from "react-router-dom"

/* Firebase */
import "@/lib/firebase";

/* Components */
import App from './App.tsx'

/* Stylesheet */
import "@/global.scss"

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <App />
    </Router>
  </StrictMode>,
)
