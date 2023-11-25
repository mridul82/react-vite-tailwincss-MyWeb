import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import Service from './components/Service.jsx';


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


import "@fortawesome/fontawesome-svg-core/styles.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/about",
    element: <About />
  },
  {
    path: "/service",
    element: <Service />
  },
  {
    path:"/contact",
    element: <Contact />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
