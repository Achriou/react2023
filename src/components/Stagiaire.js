import PropTypes from "prop-types";
import { useLayoutEffect } from "react";


const Stagiares = (props) => {
  const {listeStagiares } = props
   
  return(
    <ul>
        {listeStagiares.map((stagiare,index) => <li key={index}>{stagiare}</li>)}
    </ul>
  )
        
}
Stagiares.propTypes ={

    listeStagiares: PropTypes.arrayOf(PropTypes.string)
}

export default Stagiares;