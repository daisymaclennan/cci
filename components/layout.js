import Link from 'next/link'
import NavLink from 'next/link'
import { createGlobalStyle } from 'styled-components'
import Content from './content'
import NavBar from './nav-bar'
import { useState } from 'react'
import SearchOverlay from './search-overlay'
import MoreOverlay from './more-overlay'
import GlobalLayout from './global-layout'


const Layout = ({ children }) => {
const [ searchOpen, setSearchOpen ] = useState(false)
const [ moreOpen, setMoreOpen ] = useState(false)
return(
  <GlobalLayout>
      <NavBar>
        <Link href='/'>
          <svg className="logo" width="112" height="24" viewBox="0 0 112 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect y="0.125" width="78.875" height="13" fill="#0D87FF"/>
          <path d="M5.70103 9.544C6.0837 9.544 6.4897 9.502 6.91903 9.418C7.3577 9.334 7.7497 9.222 8.09503 9.082V10.58C7.5817 10.7853 7.1197 10.9253 6.70903 11C6.3077 11.084 5.8877 11.126 5.44903 11.126C4.05836 11.126 3.0877 10.7807 2.53703 10.09C1.98636 9.39 1.71103 8.22333 1.71103 6.59C1.71103 5.03133 2.0377 3.89267 2.69103 3.174C3.34436 2.446 4.39436 2.082 5.84103 2.082C6.27036 2.082 6.65303 2.09133 6.98903 2.11C7.32503 2.12867 7.62836 2.16133 7.89903 2.208V3.678C7.54436 3.65 7.19903 3.63133 6.86303 3.622C6.53636 3.60333 6.1957 3.594 5.84103 3.594C4.89836 3.594 4.25903 3.81333 3.92303 4.252C3.59636 4.69067 3.43303 5.47 3.43303 6.59C3.43303 7.71 3.58236 8.48467 3.88103 8.914C4.18903 9.334 4.7957 9.544 5.70103 9.544ZM13.7048 8.004V11H12.0248V2.222H15.1188C16.4161 2.222 17.3401 2.44133 17.8908 2.88C18.4508 3.31867 18.7308 4.05133 18.7308 5.078C18.7308 5.81533 18.5674 6.41267 18.2408 6.87C17.9234 7.318 17.4381 7.63067 16.7848 7.808L18.9968 11H16.9808L15.0068 8.004H13.7048ZM17.0228 5.078C17.0228 4.59267 16.8781 4.24733 16.5888 4.042C16.3088 3.83667 15.8188 3.734 15.1188 3.734H13.7048V6.604H15.1188C15.8188 6.604 16.3088 6.48733 16.5888 6.254C16.8781 6.02067 17.0228 5.62867 17.0228 5.078ZM28.8408 9.418V11H22.9048V2.222H28.7148V3.734H24.5848V5.806H28.1968V7.248H24.5848V9.418H28.8408ZM33.8622 11H32.0982L35.4582 2.222H37.1942L40.4983 11H38.7343L38.1042 9.208H34.4782L33.8622 11ZM36.2842 3.832C36.1816 4.18667 36.0649 4.56 35.9342 4.952C35.8129 5.344 35.6962 5.708 35.5842 6.044L34.9682 7.822H37.6142L36.9982 6.044C36.8956 5.74533 36.7789 5.4 36.6482 5.008C36.5176 4.60667 36.3962 4.21467 36.2842 3.832ZM49.3527 2.222V3.734H46.6927V11H45.0127V3.734H42.3667V2.222H49.3527ZM54.8598 2.222V11H53.1798V2.222H54.8598ZM61.7091 11L58.5451 2.222H60.4211L62.0731 7.164C62.1571 7.416 62.2551 7.75667 62.3671 8.186C62.4885 8.606 62.6145 9.082 62.7451 9.614C62.8758 9.07267 62.9971 8.592 63.1091 8.172C63.2305 7.752 63.3285 7.42067 63.4031 7.178L65.0551 2.222H66.8751L63.7111 11H61.7091ZM76.4873 9.418V11H70.5513V2.222H76.3613V3.734H72.2313V5.806H75.8433V7.248H72.2313V9.418H76.4873Z" fill="white"/>
          <path d="M3.72703 20.34V23H2.04703V14.222H5.14103C6.43836 14.222 7.36236 14.4507 7.91303 14.908C8.47303 15.3653 8.75303 16.126 8.75303 17.19C8.75303 18.2633 8.45903 19.0567 7.87103 19.57C7.29236 20.0833 6.39636 20.34 5.18303 20.34H3.72703ZM7.04503 17.19C7.04503 16.658 6.90036 16.2847 6.61103 16.07C6.33103 15.846 5.84103 15.734 5.14103 15.734H3.72703V18.87H5.14103C5.84103 18.87 6.33103 18.744 6.61103 18.492C6.90036 18.2307 7.04503 17.7967 7.04503 17.19ZM20.4224 18.59C20.4224 20.186 20.105 21.3433 19.4704 22.062C18.845 22.7713 17.823 23.126 16.4044 23.126C14.8924 23.126 13.8424 22.7947 13.2544 22.132C12.6664 21.46 12.3724 20.2793 12.3724 18.59C12.3724 17.0033 12.6897 15.8553 13.3244 15.146C13.959 14.4367 14.9857 14.082 16.4044 14.082C17.907 14.082 18.9524 14.418 19.5404 15.09C20.1284 15.7527 20.4224 16.9193 20.4224 18.59ZM14.4164 20.802C14.5657 21.0727 14.785 21.264 15.0744 21.376C15.3637 21.488 15.807 21.544 16.4044 21.544C17.3284 21.544 17.9444 21.3387 18.2524 20.928C18.5604 20.508 18.7144 19.7287 18.7144 18.59C18.7144 18.0393 18.6864 17.5867 18.6304 17.232C18.5837 16.8773 18.4997 16.588 18.3784 16.364C18.229 16.084 18.0097 15.888 17.7204 15.776C17.431 15.6547 16.9924 15.594 16.4044 15.594C15.471 15.594 14.8504 15.804 14.5424 16.224C14.2344 16.644 14.0804 17.4327 14.0804 18.59C14.0804 19.1407 14.1084 19.5933 14.1644 19.948C14.2204 20.3027 14.3044 20.5873 14.4164 20.802ZM26.2528 20.004V23H24.5728V14.222H27.6668C28.9641 14.222 29.8881 14.4413 30.4388 14.88C30.9988 15.3187 31.2788 16.0513 31.2788 17.078C31.2788 17.8153 31.1155 18.4127 30.7888 18.87C30.4715 19.318 29.9861 19.6307 29.3328 19.808L31.5448 23H29.5288L27.5548 20.004H26.2528ZM29.5708 17.078C29.5708 16.5927 29.4261 16.2473 29.1368 16.042C28.8568 15.8367 28.3668 15.734 27.6668 15.734H26.2528V18.604H27.6668C28.3668 18.604 28.8568 18.4873 29.1368 18.254C29.4261 18.0207 29.5708 17.6287 29.5708 17.078ZM41.6718 14.222V15.734H39.0118V23H37.3318V15.734H34.6858V14.222H41.6718ZM48.7633 19.514L46.8173 19.052C46.1733 18.9027 45.7206 18.66 45.4593 18.324C45.1979 17.9787 45.0673 17.4887 45.0673 16.854C45.0673 15.902 45.3286 15.202 45.8513 14.754C46.3739 14.306 47.1859 14.082 48.2873 14.082C48.7446 14.082 49.1506 14.1053 49.5053 14.152C49.8693 14.1893 50.2053 14.25 50.5133 14.334V15.846C49.9813 15.7433 49.5566 15.678 49.2393 15.65C48.9219 15.6127 48.5953 15.594 48.2593 15.594C47.6993 15.594 47.3026 15.6827 47.0693 15.86C46.8359 16.028 46.7193 16.322 46.7193 16.742C46.7193 16.9847 46.7659 17.1713 46.8593 17.302C46.9619 17.4233 47.1299 17.512 47.3633 17.568L49.2533 18.016C49.6919 18.1187 50.0186 18.226 50.2333 18.338C50.4479 18.4407 50.6253 18.5713 50.7653 18.73C50.9053 18.9073 51.0079 19.1267 51.0733 19.388C51.1479 19.6493 51.1853 19.9713 51.1853 20.354C51.1853 21.3433 50.9239 22.0527 50.4013 22.482C49.8786 22.9113 49.0666 23.126 47.9653 23.126C47.3959 23.126 46.8453 23.0887 46.3133 23.014C45.7906 22.9393 45.3799 22.846 45.0813 22.734V21.152C45.4826 21.2733 45.9353 21.3713 46.4393 21.446C46.9526 21.5113 47.4613 21.544 47.9653 21.544C48.5159 21.544 48.8986 21.4693 49.1133 21.32C49.3373 21.1613 49.4493 20.858 49.4493 20.41C49.4493 20.13 49.4026 19.9293 49.3093 19.808C49.2253 19.6773 49.0433 19.5793 48.7633 19.514ZM63.7023 14.222V23H62.1203V16.91L60.1183 21.278H58.7323L56.7443 16.896V23H55.1623V14.222H57.2343L59.4603 19.22L61.7003 14.222H63.7023ZM75.9028 18.59C75.9028 20.186 75.5855 21.3433 74.9508 22.062C74.3255 22.7713 73.3035 23.126 71.8848 23.126C70.3728 23.126 69.3228 22.7947 68.7348 22.132C68.1468 21.46 67.8528 20.2793 67.8528 18.59C67.8528 17.0033 68.1702 15.8553 68.8048 15.146C69.4395 14.4367 70.4662 14.082 71.8848 14.082C73.3875 14.082 74.4328 14.418 75.0208 15.09C75.6088 15.7527 75.9028 16.9193 75.9028 18.59ZM69.8968 20.802C70.0462 21.0727 70.2655 21.264 70.5548 21.376C70.8442 21.488 71.2875 21.544 71.8848 21.544C72.8088 21.544 73.4248 21.3387 73.7328 20.928C74.0408 20.508 74.1948 19.7287 74.1948 18.59C74.1948 18.0393 74.1668 17.5867 74.1108 17.232C74.0642 16.8773 73.9802 16.588 73.8588 16.364C73.7095 16.084 73.4902 15.888 73.2008 15.776C72.9115 15.6547 72.4728 15.594 71.8848 15.594C70.9515 15.594 70.3308 15.804 70.0228 16.224C69.7148 16.644 69.5608 17.4327 69.5608 18.59C69.5608 19.1407 69.5888 19.5933 69.6448 19.948C69.7008 20.3027 69.7848 20.5873 69.8968 20.802ZM85.5693 19.402V14.222H87.2493V19.402C87.2493 20.662 86.9506 21.6 86.3533 22.216C85.7559 22.8227 84.8413 23.126 83.6093 23.126C82.3493 23.126 81.4299 22.832 80.8513 22.244C80.2726 21.656 79.9833 20.7087 79.9833 19.402V14.222H81.6633V19.402C81.6633 20.2233 81.8033 20.788 82.0833 21.096C82.3633 21.3947 82.8719 21.544 83.6093 21.544C84.3559 21.544 84.8693 21.39 85.1493 21.082C85.4293 20.774 85.5693 20.214 85.5693 19.402ZM98 14.222V15.734H95.34V23H93.66V15.734H91.014V14.222H98ZM103.507 23H101.827V14.222H103.507V17.778H107.343V14.222H109.023V23H107.343V19.304H103.507V23Z" fill="black"/>
          </svg>
        </Link>
        <div>
          <button className="no-style-button" onClick={() => setSearchOpen(!searchOpen)}>
            <svg className="search" width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.7812 14.3438C15.9062 14.5 16 14.6875 16 14.875C16 15.0938 15.9062 15.2812 15.7812 15.4062L14.9062 16.2812C14.75 16.4375 14.5625 16.5 14.375 16.5C14.1562 16.5 13.9688 16.4375 13.8438 16.2812L10.7188 13.1562C10.5625 13.0312 10.5 12.8438 10.5 12.625V12.125C9.3125 13.0625 8 13.5 6.5 13.5C5.3125 13.5 4.21875 13.2188 3.21875 12.625C2.21875 12.0625 1.4375 11.2812 0.875 10.2812C0.28125 9.28125 0 8.1875 0 7C0 5.8125 0.28125 4.75 0.875 3.75C1.4375 2.75 2.21875 1.96875 3.21875 1.375C4.21875 0.8125 5.3125 0.5 6.5 0.5C7.6875 0.5 8.75 0.8125 9.75 1.375C10.75 1.96875 11.5312 2.75 12.125 3.75C12.6875 4.75 13 5.8125 13 7C13 8.5 12.5312 9.84375 11.625 11H12.125C12.3125 11 12.5 11.0938 12.6562 11.2188L15.7812 14.3438ZM6.5 11C7.21875 11 7.875 10.8438 8.5 10.4688C9.125 10.125 9.59375 9.65625 9.96875 9.03125C10.3125 8.40625 10.5 7.75 10.5 7C10.5 6.28125 10.3125 5.625 9.96875 5C9.59375 4.375 9.125 3.90625 8.5 3.53125C7.875 3.1875 7.21875 3 6.5 3C5.75 3 5.09375 3.1875 4.46875 3.53125C3.84375 3.90625 3.375 4.375 3.03125 5C2.65625 5.625 2.5 6.28125 2.5 7C2.5 7.75 2.65625 8.40625 3.03125 9.03125C3.375 9.65625 3.84375 10.125 4.46875 10.4688C5.09375 10.8438 5.75 11 6.5 11Z" fill="#52565F"/>
            </svg>
          </button>
          {searchOpen &&  (
            <svg className="search-blip" width="32" height="6" viewBox="0 0 32 6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 6C0 2.68629 2.68629 0 6 0H26C29.3137 0 32 2.68629 32 6H0Z" fill="#0D87FF"/>
            </svg>
          )}

          <button className="no-style-button" onClick={() => setMoreOpen(!moreOpen)}>
            <svg className="elipsis" width="6" height="17" viewBox="0 0 6 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 6.25C2.375 6.25 1.84375 6.46875 1.40625 6.90625C0.96875 7.34375 0.75 7.875 0.75 8.5C0.75 9.125 0.96875 9.65625 1.40625 10.0938C1.84375 10.5312 2.375 10.75 3 10.75C3.625 10.75 4.15625 10.5312 4.59375 10.0938C5.03125 9.65625 5.25 9.125 5.25 8.5C5.25 7.875 5.03125 7.34375 4.59375 6.90625C4.15625 6.46875 3.625 6.25 3 6.25ZM0.75 3C0.75 2.375 0.96875 1.84375 1.40625 1.40625C1.84375 0.96875 2.375 0.75 3 0.75C3.625 0.75 4.15625 0.96875 4.59375 1.40625C5.03125 1.84375 5.25 2.375 5.25 3C5.25 3.625 5.03125 4.15625 4.59375 4.59375C4.15625 5.03125 3.625 5.25 3 5.25C2.375 5.25 1.84375 5.03125 1.40625 4.59375C0.96875 4.15625 0.75 3.625 0.75 3ZM0.75 14C0.75 13.375 0.96875 12.8438 1.40625 12.4062C1.84375 11.9688 2.375 11.75 3 11.75C3.625 11.75 4.15625 11.9688 4.59375 12.4062C5.03125 12.8438 5.25 13.375 5.25 14C5.25 14.625 5.03125 15.1562 4.59375 15.5938C4.15625 16.0312 3.625 16.25 3 16.25C2.375 16.25 1.84375 16.0312 1.40625 15.5938C0.96875 15.1562 0.75 14.625 0.75 14Z" fill="#52565F"/>
            </svg>
          </button>
          {moreOpen &&  (
            <svg className="more-blip" width="32" height="6" viewBox="0 0 32 6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 6C0 2.68629 2.68629 0 6 0H26C29.3137 0 32 2.68629 32 6H0Z" fill="#0D87FF"/>
            </svg>
          )}

        </div>
      </NavBar>
      {searchOpen && (
      <SearchOverlay>
        <div>
          <input type="text" name="search" autocomplete="off"/>
          <svg className="search-icon--bar" width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15.7812 14.3438C15.9062 14.5 16 14.6875 16 14.875C16 15.0938 15.9062 15.2812 15.7812 15.4062L14.9062 16.2812C14.75 16.4375 14.5625 16.5 14.375 16.5C14.1562 16.5 13.9688 16.4375 13.8438 16.2812L10.7188 13.1562C10.5625 13.0312 10.5 12.8438 10.5 12.625V12.125C9.3125 13.0625 8 13.5 6.5 13.5C5.3125 13.5 4.21875 13.2188 3.21875 12.625C2.21875 12.0625 1.4375 11.2812 0.875 10.2812C0.28125 9.28125 0 8.1875 0 7C0 5.8125 0.28125 4.75 0.875 3.75C1.4375 2.75 2.21875 1.96875 3.21875 1.375C4.21875 0.8125 5.3125 0.5 6.5 0.5C7.6875 0.5 8.75 0.8125 9.75 1.375C10.75 1.96875 11.5312 2.75 12.125 3.75C12.6875 4.75 13 5.8125 13 7C13 8.5 12.5312 9.84375 11.625 11H12.125C12.3125 11 12.5 11.0938 12.6562 11.2188L15.7812 14.3438ZM6.5 11C7.21875 11 7.875 10.8438 8.5 10.4688C9.125 10.125 9.59375 9.65625 9.96875 9.03125C10.3125 8.40625 10.5 7.75 10.5 7C10.5 6.28125 10.3125 5.625 9.96875 5C9.59375 4.375 9.125 3.90625 8.5 3.53125C7.875 3.1875 7.21875 3 6.5 3C5.75 3 5.09375 3.1875 4.46875 3.53125C3.84375 3.90625 3.375 4.375 3.03125 5C2.65625 5.625 2.5 6.28125 2.5 7C2.5 7.75 2.65625 8.40625 3.03125 9.03125C3.375 9.65625 3.84375 10.125 4.46875 10.4688C5.09375 10.8438 5.75 11 6.5 11Z"/>
          </svg>
          <button className="no-style-button" onClick={() => setSearchOpen(!searchOpen)}>
            <svg  className="close-icon--bar" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.09375 6L11.2188 9.125C11.4062 9.3125 11.5 9.5625 11.5 9.8125C11.5 10.0938 11.4062 10.3438 11.2188 10.5312L10.5312 11.2188C10.3125 11.4062 10.0625 11.5 9.8125 11.5C9.53125 11.5 9.3125 11.4062 9.125 11.2188L6 8.09375L2.875 11.2188C2.6875 11.4062 2.4375 11.5 2.1875 11.5C1.90625 11.5 1.65625 11.4062 1.46875 11.2188L0.78125 10.5312C0.59375 10.3438 0.5 10.0938 0.5 9.8125C0.5 9.5625 0.59375 9.3125 0.78125 9.125L3.90625 6L0.78125 2.875C0.59375 2.6875 0.5 2.46875 0.5 2.1875C0.5 1.9375 0.59375 1.6875 0.78125 1.46875L1.46875 0.78125C1.65625 0.59375 1.90625 0.5 2.1875 0.5C2.4375 0.5 2.6875 0.59375 2.875 0.78125L6 3.90625L9.125 0.78125C9.3125 0.59375 9.53125 0.5 9.8125 0.5C10.0625 0.5 10.3125 0.59375 10.5312 0.78125L11.2188 1.46875C11.4062 1.6875 11.5 1.9375 11.5 2.1875C11.5 2.46875 11.4062 2.6875 11.2188 2.875L8.09375 6Z" fill="#52565F"/>
            </svg>
          </button>
        </div>
        <div className="results">
          <h2>Search</h2>
          <h3>Filters</h3>
          <h4>None found</h4>

          <h3>Companies</h3>
        </div>
      </SearchOverlay>
      )}

      {moreOpen && (
      <MoreOverlay>
        <div className="inside">
          <h2>Options</h2>
          <div className="flexbox">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="24" height="24" rx="12" fill="#4D9EF6"/>
            <path d="M11.75 12C11.1875 12 10.6953 11.8828 10.2266 11.6016C9.75781 11.3438 9.40625 10.9922 9.14844 10.5234C8.86719 10.0547 8.75 9.5625 8.75 9C8.75 8.46094 8.86719 7.96875 9.14844 7.5C9.40625 7.03125 9.75781 6.67969 10.2266 6.39844C10.6953 6.14062 11.1875 6 11.75 6C12.2891 6 12.7812 6.14062 13.25 6.39844C13.7188 6.67969 14.0703 7.03125 14.3516 7.5C14.6094 7.96875 14.75 8.46094 14.75 9C14.75 9.5625 14.6094 10.0547 14.3516 10.5234C14.0703 10.9922 13.7188 11.3438 13.25 11.6016C12.7812 11.8828 12.2891 12 11.75 12ZM13.8594 12.75C14.4219 12.75 14.9375 12.8906 15.4297 13.1719C15.8984 13.4531 16.2969 13.8516 16.5781 14.3203C16.8594 14.8125 17 15.3281 17 15.8906V16.875C17 17.2031 16.8828 17.4609 16.6719 17.6719C16.4375 17.9062 16.1797 18 15.875 18H7.625C7.29688 18 7.03906 17.9062 6.82812 17.6719C6.59375 17.4609 6.5 17.2031 6.5 16.875V15.8906C6.5 15.3281 6.64062 14.8125 6.92188 14.3203C7.20312 13.8516 7.57812 13.4531 8.07031 13.1719C8.53906 12.8906 9.07812 12.75 9.64062 12.75H10.0391C10.5781 13.0078 11.1406 13.125 11.75 13.125C12.3359 13.125 12.8984 13.0078 13.4609 12.75H13.8594Z" fill="white"/>
            </svg>
            <div>
              <h3>Account</h3>
              <a href="/login">
                <h4>Sign In</h4>
              </a>
            </div>
          </div>
          <div className="flexbox bottom-box">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="24" height="24" rx="12" fill="#52565F"/>
            <path d="M17.7656 10.9766C17.2031 11.4219 15.9844 12.3125 14.1562 13.625L13.9219 13.8125C13.5469 14.0938 13.2656 14.3047 13.0312 14.4219C12.6562 14.6562 12.3047 14.75 12 14.75C11.6719 14.75 11.3438 14.6562 10.9688 14.4453C10.7344 14.3281 10.4531 14.1172 10.0781 13.8359L9.84375 13.625C7.94531 12.2656 6.75 11.375 6.23438 10.9766C6.1875 10.9531 6.11719 10.9531 6.07031 10.9766C6.02344 11 6 11.0469 6 11.0938V15.875C6 16.2031 6.09375 16.4609 6.32812 16.6719C6.53906 16.9062 6.79688 17 7.125 17H16.875C17.1797 17 17.4375 16.9062 17.6719 16.6719C17.8828 16.4609 18 16.2031 18 15.875V11.0938C18 11.0469 17.9531 11 17.9062 10.9531C17.8594 10.9297 17.8125 10.9297 17.7656 10.9766ZM12 14C11.7891 14 11.5312 13.9062 11.25 13.7188C11.0625 13.625 10.8281 13.4609 10.5234 13.2031L10.2891 13.0391C8.36719 11.6328 7.05469 10.6719 6.375 10.1328L6.21094 10.0156C6.07031 9.92188 6 9.75781 6 9.57031V9.125C6 8.82031 6.09375 8.5625 6.32812 8.32812C6.53906 8.11719 6.79688 8 7.125 8H16.875C17.1797 8 17.4375 8.11719 17.6719 8.32812C17.8828 8.5625 18 8.82031 18 9.125V9.57031C18 9.75781 17.9297 9.92188 17.7891 10.0156L17.6719 10.1094C16.9922 10.6484 15.6797 11.6328 13.7109 13.0391L13.4766 13.2031C13.1484 13.4609 12.9141 13.625 12.75 13.7188C12.4453 13.9062 12.1875 14 12 14Z" fill="white"/>
            </svg>
            <div>
              <h3>Contact</h3>
              <a href="/contact">
                <h4>Admin team</h4>
              </a>
              <a href="/contact">
                <h4>Support</h4>
              </a>
            </div>
          </div>
        </div>
      </MoreOverlay>
      )}
      <Content>
        {children}
      </Content>

  </GlobalLayout>
)}

export default Layout

/*
<svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.7812 14.3438C15.9062 14.5 16 14.6875 16 14.875C16 15.0938 15.9062 15.2812 15.7812 15.4062L14.9062 16.2812C14.75 16.4375 14.5625 16.5 14.375 16.5C14.1562 16.5 13.9688 16.4375 13.8438 16.2812L10.7188 13.1562C10.5625 13.0312 10.5 12.8438 10.5 12.625V12.125C9.3125 13.0625 8 13.5 6.5 13.5C5.3125 13.5 4.21875 13.2188 3.21875 12.625C2.21875 12.0625 1.4375 11.2812 0.875 10.2812C0.28125 9.28125 0 8.1875 0 7C0 5.8125 0.28125 4.75 0.875 3.75C1.4375 2.75 2.21875 1.96875 3.21875 1.375C4.21875 0.8125 5.3125 0.5 6.5 0.5C7.6875 0.5 8.75 0.8125 9.75 1.375C10.75 1.96875 11.5312 2.75 12.125 3.75C12.6875 4.75 13 5.8125 13 7C13 8.5 12.5312 9.84375 11.625 11H12.125C12.3125 11 12.5 11.0938 12.6562 11.2188L15.7812 14.3438ZM6.5 11C7.21875 11 7.875 10.8438 8.5 10.4688C9.125 10.125 9.59375 9.65625 9.96875 9.03125C10.3125 8.40625 10.5 7.75 10.5 7C10.5 6.28125 10.3125 5.625 9.96875 5C9.59375 4.375 9.125 3.90625 8.5 3.53125C7.875 3.1875 7.21875 3 6.5 3C5.75 3 5.09375 3.1875 4.46875 3.53125C3.84375 3.90625 3.375 4.375 3.03125 5C2.65625 5.625 2.5 6.28125 2.5 7C2.5 7.75 2.65625 8.40625 3.03125 9.03125C3.375 9.65625 3.84375 10.125 4.46875 10.4688C5.09375 10.8438 5.75 11 6.5 11Z" fill="#52565F"/>
</svg>
<input type="text" name="search"/>
<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.09375 6L11.2188 9.125C11.4062 9.3125 11.5 9.5625 11.5 9.8125C11.5 10.0938 11.4062 10.3438 11.2188 10.5312L10.5312 11.2188C10.3125 11.4062 10.0625 11.5 9.8125 11.5C9.53125 11.5 9.3125 11.4062 9.125 11.2188L6 8.09375L2.875 11.2188C2.6875 11.4062 2.4375 11.5 2.1875 11.5C1.90625 11.5 1.65625 11.4062 1.46875 11.2188L0.78125 10.5312C0.59375 10.3438 0.5 10.0938 0.5 9.8125C0.5 9.5625 0.59375 9.3125 0.78125 9.125L3.90625 6L0.78125 2.875C0.59375 2.6875 0.5 2.46875 0.5 2.1875C0.5 1.9375 0.59375 1.6875 0.78125 1.46875L1.46875 0.78125C1.65625 0.59375 1.90625 0.5 2.1875 0.5C2.4375 0.5 2.6875 0.59375 2.875 0.78125L6 3.90625L9.125 0.78125C9.3125 0.59375 9.53125 0.5 9.8125 0.5C10.0625 0.5 10.3125 0.59375 10.5312 0.78125L11.2188 1.46875C11.4062 1.6875 11.5 1.9375 11.5 2.1875C11.5 2.46875 11.4062 2.6875 11.2188 2.875L8.09375 6Z" fill="#52565F"/>
</svg>




<NavBar>
  <div>
    <NavLink href='/directory' activeClassName="is_active">
      <a>
        <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15.625 2.875C15.7188 2.875 15.8125 2.84375 15.875 2.78125C15.9375 2.71875 16 2.625 16 2.5V1.5C16 1.40625 15.9375 1.3125 15.875 1.25C15.8125 1.1875 15.7188 1.125 15.625 1.125H4.375C4.25 1.125 4.15625 1.1875 4.09375 1.25C4.03125 1.3125 4 1.40625 4 1.5V2.5C4 2.625 4.03125 2.71875 4.09375 2.78125C4.15625 2.84375 4.25 2.875 4.375 2.875H15.625ZM16 7.5C16 7.625 15.9375 7.71875 15.875 7.78125C15.8125 7.84375 15.7188 7.875 15.625 7.875H4.375C4.25 7.875 4.15625 7.84375 4.09375 7.78125C4.03125 7.71875 4 7.625 4 7.5V6.5C4 6.40625 4.03125 6.3125 4.09375 6.25C4.15625 6.1875 4.25 6.125 4.375 6.125H15.625C15.7188 6.125 15.8125 6.1875 15.875 6.25C15.9375 6.3125 16 6.40625 16 6.5V7.5ZM16 12.5C16 12.625 15.9375 12.7188 15.875 12.7812C15.8125 12.8438 15.7188 12.875 15.625 12.875H4.375C4.25 12.875 4.15625 12.8438 4.09375 12.7812C4.03125 12.7188 4 12.625 4 12.5V11.5C4 11.4062 4.03125 11.3125 4.09375 11.25C4.15625 11.1875 4.25 11.125 4.375 11.125H15.625C15.7188 11.125 15.8125 11.1875 15.875 11.25C15.9375 11.3125 16 11.4062 16 11.5V12.5ZM2.875 3C2.875 3.125 2.8125 3.21875 2.75 3.28125C2.6875 3.34375 2.59375 3.375 2.5 3.375H0.5C0.375 3.375 0.28125 3.34375 0.21875 3.28125C0.15625 3.21875 0.125 3.125 0.125 3V1C0.125 0.90625 0.15625 0.8125 0.21875 0.75C0.28125 0.6875 0.375 0.625 0.5 0.625H2.5C2.59375 0.625 2.6875 0.6875 2.75 0.75C2.8125 0.8125 2.875 0.90625 2.875 1V3ZM2.875 8C2.875 8.125 2.8125 8.21875 2.75 8.28125C2.6875 8.34375 2.59375 8.375 2.5 8.375H0.5C0.375 8.375 0.28125 8.34375 0.21875 8.28125C0.15625 8.21875 0.125 8.125 0.125 8V6C0.125 5.90625 0.15625 5.8125 0.21875 5.75C0.28125 5.6875 0.375 5.625 0.5 5.625H2.5C2.59375 5.625 2.6875 5.6875 2.75 5.75C2.8125 5.8125 2.875 5.90625 2.875 6V8ZM2.875 13C2.875 13.125 2.8125 13.2188 2.75 13.2812C2.6875 13.3438 2.59375 13.375 2.5 13.375H0.5C0.375 13.375 0.28125 13.3438 0.21875 13.2812C0.15625 13.2188 0.125 13.125 0.125 13V11C0.125 10.9062 0.15625 10.8125 0.21875 10.75C0.28125 10.6875 0.375 10.625 0.5 10.625H2.5C2.59375 10.625 2.6875 10.6875 2.75 10.75C2.8125 10.8125 2.875 10.9062 2.875 11V13Z"/>
        </svg>
        <h3>Directory</h3>
      </a>
    </NavLink>
    <NavLink href='/discover' activeClassName="is_active">
      <a>
        <svg width="12" height="17" viewBox="0 0 12 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 0C7.0625 0 8.0625 0.28125 9 0.8125C9.90625 1.375 10.625 2.09375 11.1875 3C11.7188 3.9375 12 4.9375 12 6C12 6.625 11.9062 7.15625 11.7812 7.625C11.625 8.125 11.3438 8.71875 10.9375 9.4375C10.625 9.9375 10.0312 10.9375 9.125 12.375L7.28125 15.2812C7.09375 15.5938 6.8125 15.8125 6.5 15.9375C6.15625 16.0625 5.8125 16.0625 5.5 15.9375C5.15625 15.8125 4.90625 15.5938 4.71875 15.2812L2.875 12.375C1.9375 10.9375 1.34375 9.96875 1.0625 9.46875C0.625 8.71875 0.34375 8.125 0.21875 7.625C0.0625 7.15625 0 6.625 0 6C0 4.9375 0.25 3.9375 0.8125 3C1.34375 2.09375 2.0625 1.375 3 0.8125C3.90625 0.28125 4.90625 0 6 0ZM6 14.5L7.96875 11.375C8.78125 10.0625 9.34375 9.15625 9.625 8.71875C9.96875 8.09375 10.1875 7.625 10.3125 7.25C10.4375 6.90625 10.5 6.5 10.5 6C10.5 5.1875 10.2812 4.4375 9.875 3.75C9.46875 3.0625 8.9375 2.53125 8.25 2.125C7.5625 1.71875 6.8125 1.5 6 1.5C5.1875 1.5 4.4375 1.71875 3.75 2.125C3.0625 2.53125 2.5 3.0625 2.09375 3.75C1.6875 4.4375 1.5 5.1875 1.5 6C1.5 6.5 1.53125 6.90625 1.65625 7.28125C1.78125 7.65625 2.03125 8.125 2.40625 8.75C2.65625 9.1875 3.1875 10.0938 4.03125 11.4062C4.8125 12.6562 5.46875 13.6875 6 14.5ZM3.5 6C3.5 6.6875 3.71875 7.28125 4.21875 7.78125C4.71875 8.28125 5.3125 8.5 6 8.5C6.6875 8.5 7.25 8.28125 7.75 7.78125C8.25 7.28125 8.5 6.6875 8.5 6C8.5 5.3125 8.25 4.75 7.75 4.25C7.25 3.75 6.6875 3.5 6 3.5C5.3125 3.5 4.71875 3.75 4.21875 4.25C3.71875 4.75 3.5 5.3125 3.5 6Z"/>
        </svg>
        <h3>Discover</h3>
      </a>
    </NavLink>
    <NavLink href='/more' activeClassName="is_active">
      <a>
        <svg width="6" height="16" viewBox="0 0 6 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 5.75C2.375 5.75 1.84375 5.96875 1.40625 6.40625C0.96875 6.84375 0.75 7.375 0.75 8C0.75 8.625 0.96875 9.15625 1.40625 9.59375C1.84375 10.0312 2.375 10.25 3 10.25C3.625 10.25 4.15625 10.0312 4.59375 9.59375C5.03125 9.15625 5.25 8.625 5.25 8C5.25 7.375 5.03125 6.84375 4.59375 6.40625C4.15625 5.96875 3.625 5.75 3 5.75ZM0.75 2.5C0.75 1.875 0.96875 1.34375 1.40625 0.90625C1.84375 0.46875 2.375 0.25 3 0.25C3.625 0.25 4.15625 0.46875 4.59375 0.90625C5.03125 1.34375 5.25 1.875 5.25 2.5C5.25 3.125 5.03125 3.65625 4.59375 4.09375C4.15625 4.53125 3.625 4.75 3 4.75C2.375 4.75 1.84375 4.53125 1.40625 4.09375C0.96875 3.65625 0.75 3.125 0.75 2.5ZM0.75 13.5C0.75 12.875 0.96875 12.3438 1.40625 11.9062C1.84375 11.4688 2.375 11.25 3 11.25C3.625 11.25 4.15625 11.4688 4.59375 11.9062C5.03125 12.3438 5.25 12.875 5.25 13.5C5.25 14.125 5.03125 14.6562 4.59375 15.0938C4.15625 15.5312 3.625 15.75 3 15.75C2.375 15.75 1.84375 15.5312 1.40625 15.0938C0.96875 14.6562 0.75 14.125 0.75 13.5Z"/>
        </svg>
        <h3>More</h3>
      </a>
    </NavLink>
  </div>
</NavBar>*/
