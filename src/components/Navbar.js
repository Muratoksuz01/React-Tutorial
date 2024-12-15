import React from 'react'
import PropsTypes from "prop-types" 

 function Navbar(props) {
  return (
    <div>
        <h1>{props.title}</h1>
    </div>
  )
}
Navbar.propsTypes={
    title:PropsTypes.string.isRequired
}
// Navbar.defaultProps={
//     title: "default title"
// }
export default Navbar
