import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import CheckOut from "../Pages/CheckOut/CheckOut";
import PrivateRoute from "./PrivateRoute";
import MyBookings from "../Pages/MyBookings/MyBookings";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      children: [
        {
            path:'/',
            element:<Home/>
        },
        {
            path:'/login',
            element: <Login/>,
        },
        {
            path:'/signup',
            element: <Register/>,
        },
        {
            path:'/bookings',
            element: <PrivateRoute><MyBookings/> </PrivateRoute>,
        },
        {
            path:'/services/:id',
            element:<PrivateRoute> <CheckOut/></PrivateRoute>,
            loader: ({params})=> fetch(`http://localhost:5000/services/${params.id}`)
        },
      ]
    },
  ]);

export default router;