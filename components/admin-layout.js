import Link from 'next/link'
import NavLink from 'next/link'
import { createGlobalStyle } from 'styled-components'
import Content from './content'
import NavBar from './nav-bar'
import { useState } from 'react'
import SearchOverlay from './search-overlay'
import MoreOverlay from './more-overlay'
import AdminSideBar from './admin-side-bar'
import GlobalLayout from './global-layout'
import Router from 'next/router'
import { useCookies } from 'react-cookie'

const AdminLayout = ({ children }) => {
const [ searchOpen, setSearchOpen ] = useState(false)
const [ moreOpen, setMoreOpen ] = useState(false)
const [ cookies ] = useCookies([ 'user' ]);
const { user } = cookies
if(!user && process.browser){
  Router.push('/login')
}
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
        <svg className="search" width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7 16C6.4375 16 5.96875 15.8125 5.59375 15.4375C5.1875 15.0625 5 14.5625 5 14H9C9 14.5625 8.78125 15.0625 8.40625 15.4375C8 15.8125 7.53125 16 7 16ZM13.7188 11.3125C13.9062 11.5312 14 11.7812 14 12.0312C14 12.2812 13.9062 12.5312 13.7188 12.7188C13.5312 12.9062 13.2812 13 13 13H1C0.6875 13 0.46875 12.9062 0.28125 12.7188C0.09375 12.5312 0 12.2812 0 12.0312C0 11.7812 0.09375 11.5312 0.28125 11.3125L0.375 11.1875C0.84375 10.6875 1.1875 10.2188 1.4375 9.71875C1.8125 8.90625 2 7.8125 2 6.5C2 5.3125 2.375 4.25 3.125 3.34375C3.875 2.46875 4.8125 1.90625 6 1.65625V1C6 0.75 6.09375 0.5 6.28125 0.3125C6.46875 0.125 6.71875 0 7 0C7.25 0 7.5 0.125 7.6875 0.3125C7.875 0.5 8 0.75 8 1V1.65625C9.15625 1.90625 10.125 2.46875 10.875 3.34375C11.625 4.25 12 5.3125 12 6.5C12 7.8125 12.1875 8.90625 12.5625 9.71875C12.7812 10.2188 13.125 10.6875 13.625 11.1875C13.6562 11.25 13.6875 11.3125 13.7188 11.3125Z" fill="#52565F"/>
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
    <AdminSideBar>
      <h2>Admin Dashboard</h2>
      <Link href="/admin">
        <a>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="24" height="24" rx="12" fill="#1D1D1D"/>
          <path d="M16.4375 13.3359C16.4375 13.2422 16.3906 13.1719 16.3438 13.1016L11.9375 9.49219C11.8672 9.44531 11.7969 9.42188 11.75 9.42188C11.6797 9.42188 11.6094 9.44531 11.5625 9.49219L7.15625 13.1016C7.08594 13.1719 7.0625 13.2422 7.0625 13.3359V16.6875C7.0625 16.8516 7.10938 16.9922 7.22656 17.0859C7.32031 17.2031 7.46094 17.25 7.625 17.25H10.3438C10.4141 17.25 10.4844 17.2266 10.5312 17.1797C10.5781 17.1328 10.625 17.0625 10.625 16.9688V14.3438C10.625 14.2734 10.6484 14.2031 10.6953 14.1562C10.7422 14.1094 10.8125 14.0625 10.9062 14.0625H12.5938C12.6641 14.0625 12.7344 14.1094 12.7812 14.1562C12.8281 14.2031 12.875 14.2734 12.875 14.3438V16.9688C12.875 17.0625 12.8984 17.1328 12.9453 17.1797C12.9922 17.2266 13.0625 17.25 13.1562 17.25H15.875C16.0156 17.25 16.1562 17.2031 16.2734 17.0859C16.3672 16.9922 16.4375 16.8516 16.4375 16.6875V13.3359ZM18.4062 11.9062C18.4531 11.9531 18.4766 12.0234 18.4766 12.0938C18.4766 12.1875 18.4766 12.2578 18.4297 12.3047L17.8438 13.0312C17.7969 13.1016 17.7266 13.125 17.6562 13.125C17.5625 13.125 17.4922 13.1016 17.4453 13.0547L11.9375 8.53125C11.8672 8.48438 11.7969 8.46094 11.75 8.46094C11.6797 8.46094 11.6094 8.48438 11.5625 8.53125L6.05469 13.0547C5.98438 13.1016 5.91406 13.125 5.84375 13.125C5.75 13.125 5.70312 13.1016 5.65625 13.0312L5.07031 12.3047C5.02344 12.2578 5 12.1875 5 12.0938C5 12.0234 5.04688 11.9531 5.09375 11.9062L11.0469 7.00781C11.2344 6.84375 11.4688 6.75 11.75 6.75C12.0078 6.75 12.2422 6.84375 12.4766 7.00781L14.5625 8.74219V7.03125C14.5625 6.96094 14.5859 6.89062 14.6328 6.84375C14.6797 6.79688 14.75 6.75 14.8438 6.75H16.1562C16.2266 6.75 16.2969 6.79688 16.3438 6.84375C16.3906 6.89062 16.4375 6.96094 16.4375 7.03125V10.2891L18.4062 11.9062Z" fill="white"/>
          </svg>
          <h3>Home</h3>
        </a>
      </Link>

      <Link href="/admin">
        <a>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="24" height="24" rx="12" fill="#CC64F0"/>
          <path d="M10.0781 16.2891C10.1719 16.4297 10.3125 16.4766 10.5 16.4766C10.6641 16.4766 10.8047 16.4297 10.9219 16.2891L17.8359 9.39844C17.9297 9.30469 18 9.16406 18 8.97656C18 8.8125 17.9297 8.67188 17.8359 8.55469L16.9688 7.71094C16.8516 7.59375 16.7109 7.52344 16.5469 7.52344C16.3828 7.52344 16.2422 7.59375 16.125 7.71094L10.5 13.3359L7.875 10.7109C7.73438 10.5938 7.59375 10.5234 7.42969 10.5234C7.26562 10.5234 7.125 10.5938 7.03125 10.7109L6.16406 11.5547C6.04688 11.6719 6 11.8125 6 11.9766C6 12.1641 6.04688 12.3047 6.16406 12.3984L10.0781 16.2891Z" fill="white"/>
          </svg>
          <h3>Validation requests</h3>
        </a>
      </Link>

      <Link href="/admin">
        <a>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="24" height="24" rx="12" fill="#FFB700"/>
          <path d="M16.25 10.875C16.4375 10.875 16.625 10.9688 16.7656 11.1094C16.9062 11.25 17 11.4375 17 11.625V12.375C17 12.5859 16.9062 12.7734 16.7656 12.9141C16.625 13.0547 16.4375 13.125 16.25 13.125H12.875V16.5C12.875 16.7109 12.7812 16.8984 12.6406 17.0391C12.5 17.1797 12.3125 17.25 12.125 17.25H11.375C11.1641 17.25 10.9766 17.1797 10.8359 17.0391C10.6953 16.8984 10.625 16.7109 10.625 16.5V13.125H7.25C7.03906 13.125 6.85156 13.0547 6.71094 12.9141C6.57031 12.7734 6.5 12.5859 6.5 12.375V11.625C6.5 11.4375 6.57031 11.25 6.71094 11.1094C6.85156 10.9688 7.03906 10.875 7.25 10.875H10.625V7.5C10.625 7.3125 10.6953 7.125 10.8359 6.98438C10.9766 6.84375 11.1641 6.75 11.375 6.75H12.125C12.3125 6.75 12.5 6.84375 12.6406 6.98438C12.7812 7.125 12.875 7.3125 12.875 7.5V10.875H16.25Z" fill="white"/>
          </svg>
          <h3>New company requests</h3>
        </a>
      </Link>

      <Link href="/admin/directory">
        <a>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="24" height="24" rx="12" fill="#57BF56"/>
          <path d="M9 9.21875C9 9.33594 9.02344 9.42969 9.09375 9.5C9.16406 9.57031 9.25781 9.59375 9.375 9.59375H17.625C17.7188 9.59375 17.8125 9.57031 17.8828 9.5C17.9531 9.42969 18 9.33594 18 9.21875V8.28125C18 8.1875 17.9531 8.09375 17.8828 8.02344C17.8125 7.95312 17.7188 7.90625 17.625 7.90625H9.375C9.25781 7.90625 9.16406 7.95312 9.09375 8.02344C9.02344 8.09375 9 8.1875 9 8.28125V9.21875ZM9.375 13.3438C9.25781 13.3438 9.16406 13.3203 9.09375 13.25C9.02344 13.1797 9 13.0859 9 12.9688V12.0312C9 11.9375 9.02344 11.8438 9.09375 11.7734C9.16406 11.7031 9.25781 11.6562 9.375 11.6562H17.625C17.7188 11.6562 17.8125 11.7031 17.8828 11.7734C17.9531 11.8438 18 11.9375 18 12.0312V12.9688C18 13.0859 17.9531 13.1797 17.8828 13.25C17.8125 13.3203 17.7188 13.3438 17.625 13.3438H9.375ZM9.375 17.0938C9.25781 17.0938 9.16406 17.0703 9.09375 17C9.02344 16.9297 9 16.8359 9 16.7188V15.7812C9 15.6875 9.02344 15.5938 9.09375 15.5234C9.16406 15.4531 9.25781 15.4062 9.375 15.4062H17.625C17.7188 15.4062 17.8125 15.4531 17.8828 15.5234C17.9531 15.5938 18 15.6875 18 15.7812V16.7188C18 16.8359 17.9531 16.9297 17.8828 17C17.8125 17.0703 17.7188 17.0938 17.625 17.0938H9.375ZM6.375 9.875C6.25781 9.875 6.16406 9.85156 6.09375 9.78125C6.02344 9.71094 6 9.61719 6 9.5V8C6 7.90625 6.02344 7.8125 6.09375 7.74219C6.16406 7.67188 6.25781 7.625 6.375 7.625H7.875C7.96875 7.625 8.0625 7.67188 8.13281 7.74219C8.20312 7.8125 8.25 7.90625 8.25 8V9.5C8.25 9.61719 8.20312 9.71094 8.13281 9.78125C8.0625 9.85156 7.96875 9.875 7.875 9.875H6.375ZM6.375 13.625C6.25781 13.625 6.16406 13.6016 6.09375 13.5312C6.02344 13.4609 6 13.3672 6 13.25V11.75C6 11.6562 6.02344 11.5625 6.09375 11.4922C6.16406 11.4219 6.25781 11.375 6.375 11.375H7.875C7.96875 11.375 8.0625 11.4219 8.13281 11.4922C8.20312 11.5625 8.25 11.6562 8.25 11.75V13.25C8.25 13.3672 8.20312 13.4609 8.13281 13.5312C8.0625 13.6016 7.96875 13.625 7.875 13.625H6.375ZM6.375 17.375C6.25781 17.375 6.16406 17.3516 6.09375 17.2812C6.02344 17.2109 6 17.1172 6 17V15.5C6 15.4062 6.02344 15.3125 6.09375 15.2422C6.16406 15.1719 6.25781 15.125 6.375 15.125H7.875C7.96875 15.125 8.0625 15.1719 8.13281 15.2422C8.20312 15.3125 8.25 15.4062 8.25 15.5V17C8.25 17.1172 8.20312 17.2109 8.13281 17.2812C8.0625 17.3516 7.96875 17.375 7.875 17.375H6.375Z" fill="white"/>
          </svg>
          <h3>Company directory list</h3>
        </a>
      </Link>

      <Link href="/admin">
        <a>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="24" height="24" rx="12" fill="#1D1D1D"/>
          <path d="M5 8.76562C5 8.625 5.02344 8.48438 5.11719 8.34375C5.21094 8.22656 5.32812 8.13281 5.46875 8.0625L8.75 6.75V15.75L5.51562 17.2266C5.375 17.2734 5.25781 17.2734 5.16406 17.1797C5.04688 17.1094 5 17.0156 5 16.875V8.76562ZM9.5 15.75V6.75L14 8.25V17.25L9.5 15.75ZM17.9844 6.77344C18.1016 6.72656 18.2188 6.75 18.3359 6.82031C18.4297 6.91406 18.5 7.00781 18.5 7.125V15.2344C18.5 15.3984 18.4531 15.5391 18.3594 15.6562C18.2656 15.7969 18.1719 15.8906 18.0312 15.9375L14.75 17.25V8.25L17.9844 6.77344Z" fill="white"/>
          </svg>
          <h3>Map</h3>
        </a>
      </Link>

      <Link href="/admin/settings">
        <a>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="24" height="24" rx="12" fill="#7B7463"/>
          <path d="M16.4297 12.8203C16.5234 12.2812 16.5234 11.7422 16.4297 11.1797L17.4141 10.5938C17.4609 10.5703 17.5078 10.5234 17.5312 10.4531C17.5547 10.4062 17.5547 10.3359 17.5547 10.2656C17.2734 9.44531 16.8516 8.71875 16.2656 8.0625C16.2188 8.01562 16.1484 7.99219 16.1016 7.96875C16.0312 7.96875 15.9609 7.96875 15.9141 7.99219L14.9297 8.57812C14.5078 8.22656 14.0156 7.94531 13.5 7.75781V6.60938C13.5 6.5625 13.4766 6.49219 13.4297 6.44531C13.3828 6.39844 13.3359 6.35156 13.2891 6.32812C12.4219 6.14062 11.5547 6.14062 10.7109 6.32812C10.6406 6.35156 10.5938 6.39844 10.5469 6.44531C10.5 6.49219 10.5 6.5625 10.5 6.60938V7.75781C9.96094 7.94531 9.49219 8.22656 9.07031 8.57812L8.08594 7.99219C8.01562 7.96875 7.94531 7.96875 7.89844 7.96875C7.82812 7.99219 7.78125 8.01562 7.73438 8.0625C7.125 8.71875 6.70312 9.44531 6.44531 10.2656C6.42188 10.3359 6.42188 10.4062 6.44531 10.4531C6.46875 10.5234 6.51562 10.5703 6.58594 10.5938L7.57031 11.1797C7.47656 11.7422 7.47656 12.2812 7.57031 12.8203L6.58594 13.4062C6.51562 13.4531 6.46875 13.5 6.44531 13.5469C6.42188 13.6172 6.42188 13.6875 6.44531 13.7344C6.70312 14.5781 7.125 15.3047 7.73438 15.9375C7.78125 15.9844 7.82812 16.0312 7.89844 16.0312C7.94531 16.0547 8.01562 16.0547 8.08594 16.0078L9.07031 15.4219C9.49219 15.7969 9.96094 16.0547 10.5 16.2422V17.3906C10.5 17.4609 10.5 17.5312 10.5469 17.5781C10.5938 17.625 10.6406 17.6719 10.7109 17.6719C11.5547 17.8594 12.4219 17.8594 13.2891 17.6719C13.3359 17.6719 13.3828 17.625 13.4297 17.5781C13.4766 17.5312 13.5 17.4609 13.5 17.3906V16.2422C14.0156 16.0547 14.5078 15.7969 14.9297 15.4219L15.9141 16.0078C15.9609 16.0547 16.0312 16.0547 16.1016 16.0312C16.1484 16.0312 16.2188 15.9844 16.2656 15.9375C16.8516 15.3047 17.2734 14.5781 17.5547 13.7344C17.5547 13.6875 17.5547 13.6172 17.5312 13.5469C17.5078 13.5 17.4609 13.4531 17.4141 13.4062L16.4297 12.8203ZM13.875 12C13.875 12.5156 13.6875 12.9609 13.3125 13.3359C12.9375 13.7109 12.5156 13.875 12 13.875C11.4844 13.875 11.0391 13.7109 10.6641 13.3359C10.2891 12.9609 10.125 12.5156 10.125 12C10.125 11.4844 10.2891 11.0625 10.6641 10.6875C11.0391 10.3125 11.4844 10.125 12 10.125C12.5156 10.125 12.9375 10.3125 13.3125 10.6875C13.6875 11.0625 13.875 11.4844 13.875 12Z" fill="white"/>
          </svg>
          <h3>Settings</h3>
        </a>
      </Link>
    </AdminSideBar>

    <Content>
      {children}
    </Content>
  </GlobalLayout>
)}

export default AdminLayout