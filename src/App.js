import Home from './pages/Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Error from './pages/ErrorPage';
import MyOrders from './pages/MyOrders';
import Cart from './pages/Cart';
import Navbar from './components/Navbar';
import SignIn from './pages/LogIn';
import SignUp from './pages/Ragister';
import { useState } from 'react';

function App() {

  const [isLogin, setLogin] = useState(false);
  const [cart, setCart] = useState([]);
  const [orders, setOrders] = useState([]); 

  const router = createBrowserRouter([
    {
      path: "/", 
      element: <Navbar isLogin={isLogin} setLogin={setLogin}/>, 
      errorElement: <Error />,
      children: [
        {index: true, element: <Home cart={cart} setCart={setCart}/>},
        {path: "/signIn", element: <SignIn setLogin={setLogin} isLogin={isLogin}/>},
        {path: "/signUp", element: <SignUp setLogin={setLogin} isLogin={isLogin}/>},
        {path: "/myOrders", element: <MyOrders orders={orders} setOrders={setOrders}/>},
        {path: "/cart", element: <Cart cart={cart} setCart={setCart} orders={orders} setOrders={setOrders}/>},
      ]
    },
  ]);

  return (
    <>
        <RouterProvider router={router}>

        </RouterProvider>
    </>
  );
}

export default App;
