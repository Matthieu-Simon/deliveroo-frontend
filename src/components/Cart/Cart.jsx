import "./Cart.css";
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";

function Cart({ quantity, meal, price, totalHt, frais, total }) {
    return (
        <div className="cart">

            <button className="btn--cart">Valider mon panier</button>

            <div className="detail--cart">
                <div className="quantity">
                    <span className="modifyQuantity">
                        <CiCircleMinus />
                    </span>
                    <span>{quantity}</span>
                    <span className="modifyQuantity">
                        <CiCirclePlus />
                    </span>
                </div>
                <div>
                    <span>{meal}</span>
                </div>
                <div>
                    <span>{price} €</span>
                </div>
            </div>

            <div className="resumePrice--cart">
                <div className="detailResumePrice top">
                    <span>Sous-total</span>
                    <span>{totalHt} €</span>
                </div>
                <div className="detailResumePrice bottom">
                    <span>Frais de livraison</span>
                    <span>{frais} €</span>
                </div>
            </div>

            <div className="totalPrice--cart">
                <span>Total</span>
                <span>{total} €</span>
            </div>
        </div>
    )
}

export default Cart;