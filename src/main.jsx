import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AboutPage from './AboutPage.jsx';
import Testimonals from './Testimonals.jsx';
import ContactPage from './ContactPage.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/About",
    element: <AboutPage />,
  },
  {
    path: "/Testimonials",
    element: <Testimonals />,
  },
  {
    path: "/Contact",
    element: <ContactPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
