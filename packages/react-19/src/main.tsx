import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Global from './global'
import Routes from './routes'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Global>
      <Routes />
    </Global>
  </StrictMode>,
)
