import { useState, useEffect } from "react";
import "./Cart.css";
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";

function Cart({ cartItems }) {
    const [cart, setCart] = useState([]);
    const [isEmpty, setIsEmpty] = useState(true);
    const [subTotal, setSubtotal] = useState(0);
    const [deliveryFee, setDeliveryFee] = useState(2.80);
    const [total, setTotal] = useState(0);


    useEffect(() => {
        const groupedCart = cartItems.reduce((acc, item) => {
            const existingItem = acc.find(cartItem => cartItem.id === item.id);
            if (existingItem) {
                existingItem.quantity += 1;
                return acc;
            }
            return [...acc, { ...item, quantity: 1 }];
        }, []);

        setCart(groupedCart);
        setIsEmpty(groupedCart.length === 0);
    }, [cartItems]);

    useEffect(() => {
        const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
        setSubtotal(total);
        setTotal(total + deliveryFee);
    }, [cart, deliveryFee]);

    const handleQuantityChange = (index, operation) => {
        const updatedCart = [...cart];
        if (operation === "increment") {
            updatedCart[index].quantity += 1;
        } else if (operation === "decrement") {
            if (updatedCart[index].quantity > 1) {
                updatedCart[index].quantity -= 1
            } else {
                updatedCart.splice(index, 1);
            }
        }
        setCart(updatedCart);
        setIsEmpty(updatedCart.length === 0);
    };

    if (isEmpty) {
        return (
            <div className="cart">
                <div className="empty-cart">
                    <p>Votre panier est vide</p>
                </div>
            </div>
        )
    };

    return (
        <div className="cart">

            <button className="btn--cart">Valider mon panier</button>

            <div className="detail--container">
                {cart.map((item, index) => (
                    <div key={index} className="detail--cart">
                        <div className="quantity">
                            <span className="modifyQuantity" onClick={() => handleQuantityChange(index, "decrement")}>
                                <CiCircleMinus />
                            </span>
                            <span>{item.quantity}</span>
                            <span className="modifyQuantity" onClick={() => handleQuantityChange(index, "increment")}>
                                <CiCirclePlus />
                            </span>
                        </div>
                        <div>
                            <span>{item.title}</span>
                        </div>
                        <div>
                            <span>{item.price} €</span>
                        </div>
                    </div>
                ))}
            </div>
            
            <div>
                <div className="resumePrice--cart">
                    <div className="detailResumePrice top">
                        <span>Sous-total</span>
                        <span>{subTotal.toFixed(2)} €</span>
                    </div>
                    <div className="detailResumePrice bottom">
                        <span>Frais de livraison</span>
                        <span>{deliveryFee.toFixed(2)} €</span>
                    </div>
                </div>

                <div className="totalPrice--cart">
                    <span>Total</span>
                    <span>{total.toFixed(2)} €</span>
                </div>
            </div>
        </div>
    )
}

export default Cart;