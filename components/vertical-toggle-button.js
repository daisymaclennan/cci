import styled from 'styled-components'

const VerticalToggleButton = ({ isActive, onClick }) => (
  <button className="not-style-button open-button" onClick={onClick}>
    <Icon isActive={isActive} />
  </button>
)

const Icon = ({ isActive }) => (
  <svg
    width="16"
    height="10"
    viewBox="0 0 16 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    css={`
      ${isActive && `
        transform: rotate(180deg);
      `}
    `}
  >
    <path d="M7.625 9.3125H7.57813C7.67188 9.40625 7.8125 9.45312 8 9.45312C8.14063 9.45312 8.28125 9.40625 8.42188 9.3125L15.3594 2.42187C15.4531 2.32812 15.5 2.1875 15.5 2.04687C15.5 1.90625 15.4531 1.76562 15.3594 1.625L14.4219 0.6875C14.2812 0.59375 14.1406 0.546875 14 0.546875C13.8125 0.546875 13.7188 0.59375 13.625 0.6875L8 6.26562L2.375 0.6875C2.28125 0.59375 2.14063 0.546875 2 0.546875C1.8125 0.546875 1.67188 0.59375 1.57813 0.6875L0.640625 1.625C0.546875 1.76562 0.5 1.90625 0.5 2.04687C0.5 2.1875 0.546875 2.32812 0.6875 2.42187L7.625 9.3125Z" fill="white"/>
  </svg>
)

export default VerticalToggleButton
