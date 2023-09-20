import styled from 'styled-components'
import useRecentBookings from './useRecentBookings'
import Spinner from '../../ui/Spinner'
import useRecentStays from './useRecentStays'
import Stats from './Stats'
import useCabins from '../cabins/useCabins'

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`

const DashBoardLayout = (props) => {
  const { bookings, isLoading: isLoadingBookings } = useRecentBookings()
  const { numDays, stays, confirmedStays, isLoading: isLoadingStays } = useRecentStays()
  const { cabins, isLoading: isLoadingCabins } = useCabins()

  if (isLoadingBookings || isLoadingStays || isLoadingCabins) return <Spinner />

  console.log('bookings =>', bookings)

  return (
    <StyledDashboardLayout>
      <Stats
        bookings={bookings}
        confirmedStays={confirmedStays}
        numDays={numDays}
        cabinCount={cabins.length}
      ></Stats>
      <div>todays activities</div>
      <div>chart stay durations</div>
      <div>chart sales</div>
    </StyledDashboardLayout>
  )
}
export default DashBoardLayout
