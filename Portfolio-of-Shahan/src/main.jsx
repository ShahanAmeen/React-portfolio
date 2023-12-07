import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
//import 'bootstrap/dist/css/bootstrap.min.css'

import App from './App.jsx'
import AboutPage from "./pages/AboutPage.jsx"
import Portfolio from './pages/PortfolioPage.jsx'
import Contact from './pages/ContactPage.jsx'
import Resume from './pages/ResumePage.jsx'
const router = createBrowserRouter([
  {
    //localhost:5173/
    path: '/',
    element: <App />,
    errorElement: <h1 className="display-2">Wrong page!</h1>,
    children: [
      {
        index: true,
        element: <AboutPage />
      },
       {
        path: '/portfolio',
        element: <Portfolio />
      },
      {
        path: '/Resume',
        element: <Resume />
      },
      {
        path: '/Contact',
        element: <Contact />
      },
      
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)