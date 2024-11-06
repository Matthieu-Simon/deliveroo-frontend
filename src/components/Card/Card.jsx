import "./Card.css";

function Card({ meal }) {
    return (
        <div className="menuCard">
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
                                Populaire
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