import "./Card.css";
import { FaStar } from "react-icons/fa6";

function Card({ meal, cartItems, onAddToCart }) {
    return (
        <div className="menuCard" onClick={() => onAddToCart([...cartItems, meal])}>
            <div className="card">
                <div className="left--card">
                    <h3 className="title--card">{meal.title}</h3>
                    {meal.description && (
                        <p className="description--card">{meal.description}</p>
                    )}
                    <div className="details--card">
                        <span className="price--card">{meal.price} €</span>
                        {meal.popular && (
                            <span className="popular--card">
                                <FaStar /> Populaire
                            </span>
                        )}
                    </div>
                </div>
                {meal.picture && (
                    <div className="right--card">
                        <img className="img--card" src={meal.picture} />
                    </div>
                )}
            </div>
        </div>
    )
}

export default Card;