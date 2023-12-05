import React from 'react'
import ReactDOM from 'react-dom/client'
import './app/layout/style.css'
import 'semantic-ui-css/semantic.min.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './app/router/Router.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
