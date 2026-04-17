import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { GiftsApp } from './GiftsApp'
// import MyCounterApp from './counter/components/MyCounterApp'

import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GiftsApp />
    {/* <MyCounterApp /> */}
  </StrictMode>,
)
