
## See the App now
- This app is currently hosted on Netlify and can be found here: https://react-retreat-lodge.netlify.app/login
    - To login (in case the login details are not provided by default) email address: laurence@example.com password: 11111111

## Introduction
- This is a full stack cabin booking app which allows a user (owner or cabin worker) to keep track of various aspects of bookings for stays at a Cabin retreat.
 
## Technologies
- This app utilises React, React Query, React Hook forms, React Router and Supabase as the backend (to hold the data).
- It is a full stack app which can scale, adding more features and complexity as required.

## Views
The app has 3 main views: Home, Bookings and Cabin.
 - Home
     - Here the user can view the aggregate data of the bookings: sales in $ amount, number of check ins, bookings and occupancy rate.
     - The user can check guests in and out, and change the data summary to either 7, 30 or 90 days.
     - 2 main graphs are used to display data here: one pie chart and one linechart, both of which utilise the recharts api - https://recharts.org/en-US/ 
 - Bookings
     - Here the user can view all the bookings, delete each one, check each booking in, and view the details of the booking.
     - The list of available bookings can be filtered via "checked in", "checked out", "unconfirmed" and "all".
     - By selecting "see details" the user can view particular details uniqued to this booking (customers email address etc.)
 - Cabins
     - Here the user can create a new cabin for guests to stay in, and edit all the details of the current cabins (cost, max capacity, discount).

## Prerequisites

Before setting up and running the project, ensure you have the following installed on your machine:
- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)
- As this is a full stack app using Supabase, you will need to have your own instance of Supabase configured if you wish to download and use it on your local machine.

## 1: Installation
If you have your own Supabase instance setup, you can clone the repo to your local ide, run npm install (to install the dependencies) and then it should run using npm start.

## Folder structure:
```
.
.
├── context
│   └── DarkModeContext.jsx
├── data
│   ├── cabins
│   │   ├── cabin-001.jpg
│   │   ├── cabin-002.jpg
│   │   ├── cabin-003.jpg
│   │   ├── cabin-004.jpg
│   │   ├── cabin-005.jpg
│   │   ├── cabin-006.jpg
│   │   ├── cabin-007.jpg
│   │   └── cabin-008.jpg
│   ├── img
│   ├── data-bookings.js
│   ├── data-cabins.js
│   ├── data-guests.js
│   └── Uploader.jsx
├── features
│   ├── authentication
│   │   ├── LoginForm.jsx
│   │   ├── Logout.jsx
│   │   ├── SignupForm.jsx
│   │   ├── UpdatePasswordForm.jsx
│   │   ├── UpdateUserDataForm.jsx
│   │   ├── useLogin.js
│   │   ├── useLogout.jsx
│   │   ├── UserAvatar.jsx
│   │   ├── useSignup.jsx
│   │   ├── useUpdateUser.js
│   │   └── useUser.js
│   ├── bookings
│   │   ├── BookingDataBox.jsx
│   │   ├── BookingDetail.jsx
│   │   ├── BookingRow.jsx
│   │   ├── BookingTable.jsx
│   │   ├── BookingTableOperations.jsx
│   │   ├── useBooking.js
│   │   ├── useBookings.js
│   │   └── useDeleteBooking.jsx
│   ├── cabins
│   │   ├── AddCabin.jsx
│   │   ├── CabinRow.jsx
│   │   ├── CabinTable.jsx
│   │   ├── CabinTableOperations.jsx
│   │   ├── CreateCabinForm.jsx
│   │   ├── useCabins.js
│   │   ├── useCreateCabin.js
│   │   ├── useDeleteCabin.jsx
│   │   └── useEditCabin.js
│   ├── check-in-out
│   │   ├── CheckinBooking.jsx
│   │   ├── CheckoutButton.jsx
│   │   ├── TodayActivity.jsx
│   │   ├── TodayItem.jsx
│   │   ├── useCheckin.js
│   │   ├── useCheckout.js
│   │   └── useTodayActivity.jsx
│   ├── dashboard
│   │   ├── DashboardBox.jsx
│   │   ├── DashboardFilter.jsx
│   │   ├── DashboardLayout.jsx
│   │   ├── DurationChart.jsx
│   │   ├── SalesChart.jsx
│   │   ├── Stat.jsx
│   │   ├── Stats.jsx
│   │   ├── useRecentBookings.jsx
│   │   └── useRecentStays.jsx
│   └── settings
│       ├── UpdateSettingsForm.jsx
│       ├── useSettings.js
│       └── useUpdateSetting.js
├── hooks
│   ├── useLocalStorageState.js
│   ├── useMoveBack.js
│   └── useOutsideClick.js
├── pages
│   ├── Account.jsx
│   ├── Booking.jsx
│   ├── Bookings.jsx
│   ├── Cabins.jsx
│   ├── Checkin.jsx
│   ├── Dashboard.jsx
│   ├── Login.jsx
│   ├── PageNotFound.jsx
│   ├── Settings.jsx
│   └── Users.jsx
├── services
│   ├── apiAuth.js
│   ├── apiBookings.js
│   ├── apiCabins.js
│   ├── apiSettings.js
│   └── supabase.js
├── styles
│   ├── GlobalStyles.js
│   └── index.css
├── ui
│   ├── AppLayout.jsx
│   ├── Button.jsx
│   ├── ButtonGroup.jsx
│   ├── ButtonIcon.jsx
│   ├── ButtonText.jsx
│   ├── Checkbox.jsx
│   ├── ConfirmDelete.jsx
│   ├── DarkModeToggle.jsx
│   ├── DataItem.jsx
│   ├── Empty.jsx
│   ├── ErrorFallback.jsx
│   ├── FileInput.jsx
│   ├── Filter.jsx
│   ├── Flag.jsx
│   ├── Form.jsx
│   ├── FormRow.jsx
│   ├── FormRowVertical.jsx
│   ├── Header.jsx
│   ├── HeaderMenu.jsx
│   ├── Heading.jsx
│   ├── Input.jsx
│   ├── Logo.jsx
│   ├── MainNav.jsx
│   ├── Menus.jsx
│   ├── Modal.jsx
│   ├── Pagination.jsx
│   ├── ProtectedRoute.jsx
│   ├── Row.jsx
│   ├── Select.jsx
│   ├── SideBar.jsx
│   ├── SortBy.jsx
│   ├── Spinner.jsx
│   ├── SpinnerMini.jsx
│   ├── Table.jsx
│   ├── TableOperations.jsx
│   ├── Tag.jsx
│   └── Textarea.jsx
├── utils
│   ├── constants.js
│   └── helpers.js
├── App.css
├── App.jsx
├── index.css
└── main.jsx
```

