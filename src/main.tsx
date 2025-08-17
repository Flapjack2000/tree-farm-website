import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import About from "./About.tsx"
import Trees from "./Trees.tsx"
import { BrowserRouter, Routes, Route, Link } from "react-router";

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>

    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/about" element={<About />} />
      <Route path="/trees" element={<Trees />} />
    </Routes>
  </BrowserRouter>
)
