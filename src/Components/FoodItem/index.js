import {useState} from 'react'

import './index.css'

const FoodItem = props => {
  const {dishDetails} = props
  const {
    dishCalories,
    dishCurrency,
    dishDescription,
    dishImage,
    dishName,
    dishPrice,
    dishType,
    addonCat,
    dishAvailability,
  } = dishDetails

  const className = dishType === 1 ? 'veg-dish' : 'non-veg-dish'
  const [count, setCount] = useState(0)

  const onIncrease = () => {
    setCount(pre => pre + 1)
  }

  const onDecrease = () => {
    if (count > 0) {
      setCount(pre => pre - 1)
    }
  }

  return (
    <li className="food-item-container">
      <div className={`box ${className}`}>
        <div className="circle">.</div>
      </div>
      <div className="name-container">
        <h1 className="food-name">{dishName}</h1>
        <div className="price-container">
          <p className="currency">{dishCurrency}</p>
          <span className="price">{dishPrice}</span>
        </div>
        <p className="description">{dishDescription}</p>
        {dishAvailability ? (
          <div className="counter-container">
            <button type="button" className="counter-btn" onClick={onDecrease}>
              -
            </button>
            <span className="count">{count}</span>
            <button type="button" className="counter-btn" onClick={onIncrease}>
              +
            </button>
          </div>
        ) : (
          <p>Not available</p>
        )}
        {addonCat.length > 0 && (
          <p className="custom-text">Customizations available</p>
        )}
      </div>
      <p className="calories">{dishCalories} Calories</p>
      <img className="food-image" src={dishImage} alt={dishName} />
    </li>
  )
}

export default FoodItem
