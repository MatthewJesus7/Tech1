import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';

import About from "./components/Pages/About";
import Product from "./components/Pages/Product";
import TalkToUs from "./components/Pages/TalkToUs";
import Compare from "./components/Pages/Compare"

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
{
    path: "/",
    element: <App />,
    children: [
        {
        path: "/",
        element: <Product/>,
    },
    {
        path: "about",
        element: <About/>,
    },
    {
      path: "TalkToUs",
      element: <TalkToUs/>,
    },
    {
      path: "Compare",
      element: <Compare/>,
    },
]
}
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// reportWebVitals();
