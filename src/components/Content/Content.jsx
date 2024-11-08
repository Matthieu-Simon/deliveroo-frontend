import Card from "../Card/Card";
import Cart from "../Cart/Cart";
import "./Content.css";

function Content({ categories, cartItems, onAddToCart }) {
    return (
        <div className="content">
            <div className="content--center">
                <div className="menu">
                    {categories
                        .filter((categorie) => categorie.meals.length > 0)
                        .map((categorie, index) => (
                        <div className="menuItems" key={index}>
                            <h2 className="menu--title">{categorie.name}</h2>
                            <div className="menuItems--items">
                                {categorie.meals.map((meal, id) => (
                                    <Card key={id} meal={meal} onAddToCart={onAddToCart} cartItems={cartItems} />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
                <Cart cartItems={cartItems} />
            </div>
        </div>
    )
}

export default Content;