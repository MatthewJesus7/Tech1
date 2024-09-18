import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';

import About from "./components/Pages/About";
import Product from "./components/Pages/Product";

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
    }
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
