
import { Link, Navigate, useNavigate } from "react-router-dom";
import cartStyle from "../Styles/Cart.module.css";
import { useState } from "react";

function Cart({cart, setCart, orders, setOrders}) {

    const navigate = useNavigate();

    function removeItem(i) {
        setCart(cart.filter((item, index) => i !== index));
    }

    // console.log("Kart", cart);

    var totalPrice = 0;
    cart.map((item, i) => (
        totalPrice += item.price
    ))

    function handleOrder(){
        setOrders([cart, ...orders]);
        console.log("orders", orders);

        navigate("/myOrders");
    }

    return (
        <>
            <main>
                <div className={cartStyle.cartCnt}>
                    <ul className={cartStyle.allcard}>
                        {cart.map((item, i) => (
                            <li className={cartStyle.card} key={i}>
                                {/* <h4>{item.id}</h4> */}
                                <img className={cartStyle.imgcss} src = {item.src}/>
                                <p className={cartStyle.title}>{item.title}</p>
                                <h4>&#8377; {item.price}</h4>
                                <button className={cartStyle.remove} onClick={() => removeItem(i)}>Remove from Cart</button>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className={cartStyle.totalPriceTag}>
                    <h4 className={cartStyle.total}>TotalPrice:- &#8377;{totalPrice}/-</h4>
                    <button className={cartStyle.purchase} onClick={handleOrder}>Purchase</button> 
                </div>

            </main>
        </>
    )
}

export default Cart;