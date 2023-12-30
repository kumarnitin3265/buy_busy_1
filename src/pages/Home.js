
import { useState, useSyncExternalStore } from "react";
import { ITEMS } from "../data/itemData";
import homeStyle from "../Styles/Home.module.css";

function Home({cart, setCart}) {

    const [items, setItems] = useState([]);

    function handleCart(item){
        // e.preventDefault();
        setCart([item, ...cart]);

        console.log("cart", cart);
        // setItems([{
        //     id, src, titl, price
        // }, ...items]);
    }

    return (
        <>
            <ul className={homeStyle.allcard}>
                {ITEMS.map((item, i) => (
                    <li className={homeStyle.card} key={i}>
                        {/* {item.id} */}
                        <img className= {homeStyle.imgcss} src={item.src}/>
                        <p className={homeStyle.title}>{item.title}</p>
                        <h4>&#8377; {item.price}</h4>
                        <button className={homeStyle.add} onClick={() => handleCart(item)}>Add to Cart</button>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default Home;