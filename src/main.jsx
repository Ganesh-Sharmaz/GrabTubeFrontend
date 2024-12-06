import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements,Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import About from './components/About.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
      <Route path="/" element={<Layout/>}>
          
          <Route path="" element={<App/>}/>
          <Route path='about' element={<About/>}/>
          
          
      </Route>
  )
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
