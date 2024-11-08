import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import {client} from "@/client";

client.setConfig({
    baseURL: "https://api.linuxfight.me/api/v1"
})

createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <App />
    </StrictMode>,
)
