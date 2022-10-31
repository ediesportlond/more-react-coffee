import { useState } from 'react';
export default function SingleCoffee({ coffee }) {
    const [favorite, setFavorite] = useState(false);
    return (
        <>
            <div key={coffee.name} className="menu-items__item" style={{ color: favorite ? "red" : "" }}>
                <img src={coffee.image} alt={coffee.title} />
                <div>
                    <h3>{coffee.title}</h3>
                    <p>{coffee.description}</p>
                    <h4>Ingredients</h4>
                    <ul>
                        {
                            Array.isArray(coffee.ingredients) && coffee.ingredients.map(ing => (
                                <li key={ing}>{ing}</li>
                            ))
                        }
                    </ul>
                    {
                        !favorite
                            ? <button onClick={() => setFavorite(true)}>Favorite</button>
                            :<button onClick={() => setFavorite()}>Not Favorite</button>
                            
                }
                </div>
            </div>
        </>
    )
}
