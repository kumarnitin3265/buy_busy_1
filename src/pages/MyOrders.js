
import orderStyle from "../Styles/Order.module.css";

function MyOrders({orders}) {

    console.log("myOrders", orders);

    return (
        <>
            <main>
                <h3>Your Orders</h3>
                <div className={orderStyle.cartCnt}>
                    <ul className={orderStyle.allcard}>
                        {orders.map((order, i) =>  (
                            <li className={orderStyle.cart} key={i}>
                                {/* <h4>{order.id}</h4> */}
                                <img className={orderStyle.imgcss} src={order.src}/>
                                <p className={orderStyle.title}>{order.title}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </main>
        </>
    )
}

export default MyOrders;