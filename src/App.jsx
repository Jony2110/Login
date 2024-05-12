import React from "react";
import Layout from "./Layout";
import Login from "./pages/Login";
import Home from "./components/Home";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  useNavigate,
} from "react-router-dom";
import './App.css'

function App() {
  // function Redirect() {
  //   const naviget = useNavigate();
  //   let user = localStorage.getItem("user");
  // }
  // if (user === true ){

  // } else{
  //   naviget("/");
  // }
  
const router = createBrowserRouter(createRoutesFromElements(
<>
<Route  path="/" element={<Login/>}/>
<Route path="/layout" element={<Layout/>}>
<Route index element={<Home/>}/>
</Route>
</>
))
  return <RouterProvider router={router}/>
}

export default App
