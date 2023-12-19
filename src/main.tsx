import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { PageLoaderProvider } from './contexts/PageLoaderContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <PageLoaderProvider>
        <App />
      </PageLoaderProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
