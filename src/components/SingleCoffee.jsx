export default function SingleCoffee({ coffee }) {
    return (
        <>
            <div key={coffee.name} className="menu-items__item">
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
                </div>
            </div>
        </>
    )
}
