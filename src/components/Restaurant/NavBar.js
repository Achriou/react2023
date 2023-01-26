
import PropTypes from "prop-types";
import StyleNavBar from './NavBar.css';

const NavBar = (props) => {

    const {listeNav } = props
  
   
    return(
      <ul>
          
          {listeNav.map((nav,index) => <li key={index}>{nav}</li>)}
      </ul>
    )
  

NavBar.propTypes = {

    listeNav: PropTypes.arrayOf(PropTypes.string)
}

}

export default NavBar;