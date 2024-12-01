import React from "react";
import { BrowserRouter as Router, Routes, Route, createBrowserRouter, RouterProvider } from "react-router-dom";

//Páginas ruteadas
import LandingPage from "./pages/LandingPage/LandingPage.jsx";
import NotFound from "./pages/NotFound/NotFound.jsx";

import Login from "./pages/Auth/Login/Login.jsx";
import Register from "./pages/Auth/Register/Register.jsx";
import Recover from "./pages/Auth/Recover/Recover.jsx";
import AuthLayout from "./pages/Auth/AuthLayout/AuthLayout.jsx";

import GestionUsuarios from "./pages/Admin/AdminGestionUsuarios/GestionUsuarios.jsx";
import Admin_newClient from "./pages/Admin/AdminNewClient/AdminNewClient.jsx";
import AdminLayout from "./pages/Admin/AdminLayout/AdminLayout.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage></LandingPage>
  },

  {
    path: "/auth",
    element : <AuthLayout></AuthLayout>,
    errorElement : <NotFound></NotFound>,
    children: [
      {
        path: "/auth/login",
        element: <Login></Login>
      },
      {
        path: "/auth/register",
        element: <Register></Register>
      },
      {
        path: "/auth/recovery",
        element: <Recover></Recover>
      }
    ]
  },

  //Ruteo de la página admin
  {
    path: "/admin",
    element: <AdminLayout></AdminLayout>,
    children: [
      {
        path: "/admin",
        element: <GestionUsuarios></GestionUsuarios>
      },
      {
        path: "/admin/add",
        element: <Admin_newClient></Admin_newClient>
      }/*,
      {
        path: "/admin/delete"
      },
      {
        path: "/admin/update"
      }
      */
    ]
  
  },

  //Ruteo de las páginas entrenador
  {

  },

  //Ruteo de las páginas cliente
  {

  }
])


const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;

