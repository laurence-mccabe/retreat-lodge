import styled from 'styled-components'
import Tag from '../../ui/Tag'
import { Flag } from '../../ui/Flag'
import Button from '../../ui/Button'
import { Link } from 'react-router-dom'
import  CheckoutButton  from './CheckoutButton'

const StyledTodayItem = styled.li`
  display: grid;
  grid-template-columns: 9rem 2rem 1fr 7rem 9rem;
  gap: 1.2rem;
  align-items: center;

  font-size: 1.4rem;
  padding: 0.8rem 0;
  border-bottom: 1px solid var(--color-grey-100);

  &:first-child {
    border-top: 1px solid var(--color-grey-100);
  }

  .numNights {
    justify-self: end; /* Align text to the end of the div */
  }

  /* Set minimum widths for columns */
  &:nth-child(1) {
    min-width: 9rem; /* Adjust as needed */
  }
  &:nth-child(2) {
    min-width: 2rem; /* Adjust as needed */
  }
  &:nth-child(3) {
    min-width: 1fr; /* Adjust as needed */
  }
  &:nth-child(4) {
    min-width: 2rem; /* Adjust as needed */
  }
  &:nth-child(5) {
    min-width: 9rem; /* Adjust as needed */
  }
`

const Guest = styled.div`
  font-weight: 500;
  white-space: nowrap; /* Prevent long names from breaking layout */
  overflow: hidden;
  text-overflow: ellipsis; /* Show ellipsis for overflowed names */
`

export const TodayItem = (activity) => {
  const { id, status, guests, numNights } = activity.activity
  return (
    <StyledTodayItem>
      {status === 'unconfirmed' && <Tag type="green">Arriving</Tag>}
      {status === 'checked-in' && <Tag type="blue">Departing</Tag>}

      <Flag src={guests.countryFlag} alt={`Flag of ${guests.countryFlag}`} />
      <Guest>{guests.fullName}</Guest>
      <div className="numNights">{numNights} nights</div>

      {status === 'unconfirmed' && (
        <Button
          type="small"
          variation="primary"
          as={Link}
          to={`/checkin/${id}`}
        >
          CHECK IN
        </Button>
      )}
      {status === 'checked-in' && (
        <CheckoutButton type="small" variation="primary" bookingId={id}>
          
        </CheckoutButton>
      )}
    </StyledTodayItem>
  )
}
