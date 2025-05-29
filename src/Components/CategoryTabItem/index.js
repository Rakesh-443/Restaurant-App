import './index.css'

const CategoryTabItem = props => {
  const {tabDetails, changeActiveCategory, activeTabId} = props
  const {menuCategory, menuCategoryId} = tabDetails
  const isActive = menuCategoryId === activeTabId
  const activeClassName = isActive ? 'active' : ' '

  const onChangeActiveCategory = () => {
    changeActiveCategory(menuCategoryId)
  }

  return (
    <li
      className={`category-item ${activeClassName}`}
      onClick={onChangeActiveCategory}
    >
      {menuCategory}
    </li>
  )
}

export default CategoryTabItem
