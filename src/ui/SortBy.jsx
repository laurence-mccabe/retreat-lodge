import { useSearchParams } from 'react-router-dom'
import Select from './Select'

const SortBy = ({ options }) => {
  const [searchParams, setSearchParams] = useSearchParams()
  const SortBy = searchParams.get('sortBy') || options.at(0).value

  function handleChange(e) {
    searchParams.set('sortBy', e.target.value)
    setSearchParams(searchParams)
  }

  return (
    <Select
      options={options}
      type="white"
      onChange={handleChange}
      value={SortBy}
    />
  )
}
export default SortBy
