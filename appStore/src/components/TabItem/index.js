import './index.css'

const TabItem = props => {
  const {tabDetails, isActive, changeTabItem} = props
  const {tabId, displayText} = tabDetails

  const changeTab = () => {
    changeTabItem(tabId)
  }

  const selectedTabClass = isActive ? 'active-tab-item-style' : ''

  return (
    <li className={`tab-item-stye ${selectedTabClass}`}>
      <button type="button" className="tab-button" onClick={changeTab}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
