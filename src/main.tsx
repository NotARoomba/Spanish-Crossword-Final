import React from 'react'
import ReactDOM from 'react-dom/client'
import { NextUIProvider } from '@nextui-org/react'
import App from './tsx/App'
import './css/index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <NextUIProvider className='h-full'>
      <main className="text-foreground bg-background h-full">
        <App />
      </main>
    </NextUIProvider>
  </React.StrictMode>
)
