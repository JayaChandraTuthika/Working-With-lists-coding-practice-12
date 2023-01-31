const CapitalItems = props => {
  const {countryDetails} = props
  const {capitalDisplayText, id} = countryDetails

  return <option value={id}>{capitalDisplayText}</option>
}

export default CapitalItems
