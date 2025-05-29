import {Component} from 'react'

import CategoryTabItem from '../CategoryTabItem'
import FoodItem from '../FoodItem'
import './index.css'

class FoodMenu extends Component {
  state = {
    categoriestablist: [],
    activecategory: '',
  }

  componentDidMount() {
    this.getFoodItems()
  }

  getFoodItems = async () => {
    const url =
      'https://apis2.ccbp.in/restaurant-app/restaurant-menu-list-details'

    const options = {
      method: 'GET',
    }

    const response = await fetch(url, options)

    const data = await response.json()

    console.log(data)
    const menuList = data[0].table_menu_list

    const formatedCategoriesList = menuList.map(each => ({
      categoryDishes: each.category_dishes.map(eachDish => ({
        addonCat: eachDish.addonCat,
        dishAvailability: eachDish.dish_Availability,
        dishType: eachDish.dish_Type,
        dishCalories: eachDish.dish_calories,
        dishCurrency: eachDish.dish_currency,
        dishDescription: eachDish.dish_description,
        dishId: eachDish.dish_id,
        dishImage: eachDish.dish_image,
        dishName: eachDish.dish_name,
        dishPrice: eachDish.dish_price,
      })),
      menuCategory: each.menu_category,
      menuCategoryId: each.menu_category_id,
      menuCategoryImage: each.menu_category_image,
    }))

    this.setState({
      categoriestablist: formatedCategoriesList,
      activecategory: formatedCategoriesList[0],
    })
  }

  changeActiveCategory = id => {
    const {categoriestablist} = this.state
    const category = categoriestablist.find(each => each.menuCategoryId === id)
    this.setState({activecategory: category})
  }

  renderDishItemsView = () => {
    const {activecategory} = this.state

    return (
      <ul className="dish-items-container">
        {activecategory.categoryDishes.map(each => (
          <FoodItem dishDetails={each} key={each.dishId} />
        ))}
      </ul>
    )
  }

  renderCategoriesTabView = () => {
    const {categoriestablist, activecategory} = this.state
    return (
      <ul className="category-tab-container">
        {categoriestablist.map(each => (
          <CategoryTabItem
            tabDetails={each}
            key={each.menuCategoryId}
            changeActiveCategory={this.changeActiveCategory}
            activeTabId={activecategory.menuCategoryId}
          />
        ))}
      </ul>
    )
  }

  render() {
    const {activecategory} = this.state
    return (
      <div className="foodmenu-main-container">
        <div className="foodmenu-flex-container">
          {this.renderCategoriesTabView()}
          {activecategory && this.renderDishItemsView()}
        </div>
      </div>
    )
  }
}

export default FoodMenu
