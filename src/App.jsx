import { connect } from 'react-redux';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './App.css';
import { default as Portofolio } from './components/Home';


const router = createBrowserRouter(
  [
    {
      element: "", // all routes share this layout (with Header)
      children: [
        { path: '/', element: <Portofolio /> },
        { path: 'login', element: <Portofolio /> },
      ],
    },
  ],
);

function App() {
  return <RouterProvider router={router} />;
}

const connectedApp = connect(null)(App);
export { connectedApp as App };

