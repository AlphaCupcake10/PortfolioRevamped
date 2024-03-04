import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { PageLoaderProvider } from './contexts/PageLoaderContext.tsx'
import LenisWrapper from './contexts/LenisWrapper.tsx'
import { ModalProvier } from './contexts/ModalContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <PageLoaderProvider>
        <LenisWrapper>
          <ModalProvier>
            <App />
          </ModalProvier>
        </LenisWrapper>
      </PageLoaderProvider>
    </BrowserRouter>
   </React.StrictMode>
,)
