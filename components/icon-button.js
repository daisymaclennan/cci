import styled from 'styled-components'
import Link from 'next/link'

const IconButton = ({ color, icon }) => {
  return(
    <div className="icon-button"
         style={
           backgroundColor: {color},

         }>
      {icon}
    </div>
  )
}

export default IconButton
