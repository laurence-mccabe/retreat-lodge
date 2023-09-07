import styled, { css } from 'styled-components'
import { useSearchParams } from 'react-router-dom'
// CabinTableOperations
const StyledFilter = styled.div`
  border: 1px solid var(--color-grey-100);
  background-color: var(--color-grey-0);
  box-shadow: var(--shadow-sm);
  border-radius: var(--border-radius-sm)a;
  padding: 0.4rem;
  display: flex;
  gap: 0.4rem;
`

const FilterButton = styled.button`
  background-color: var(--color-grey-0);
  border: none;

  &:focus {
    outline: none; /* Remove the default focus outline */
  }

  ${(props) =>
    props.active &&
    css`
      background-color: var(--color-brand-600);
      color: var(--color-brand-50);
    `}

  border-radius: var(--border-radius-sm);
  font-weight: 500;
  font-size: 1.4rem;
  /* To give the same height as select */
  padding: 0.44rem 0.8rem;
  transition: all 0.3s;

  &:hover:not(:disabled) {
    background-color: var(--color-brand-600);
    color: var(--color-brand-50);
  }
`

const Filter = ({ filterField, options }) => {
  const [searchParams, setSearchParams] = useSearchParams()
  const currentFilterValue = searchParams.get(filterField) || options.at(0).value
  console.log('currentFilterValue =>', currentFilterValue)

  const handleClick = (value) => {
    searchParams.set('discount', value)
    setSearchParams(searchParams)
  }

  return (
    <StyledFilter>
      {options.map((option) => (
        <FilterButton
          onClick={() => handleClick(option.value)}
          key={option.value}
          active={currentFilterValue === option.value}
        >
          {option.label}
        </FilterButton>
      ))}
    </StyledFilter>
  )
}

export default Filter
