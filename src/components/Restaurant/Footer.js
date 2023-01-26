import PropTypes from "prop-types";
import './Footer.css';
import './NavBar.css';

const Footer = (props) =>{
    const {listeFooter } = props
   
    return(
        <ul>
            {listeFooter.map((foot,index) => <li key={index}>{foot}</li>)}
          
        </ul>
      )
}
Footer.propTypes = {

    listeFooter: PropTypes.arrayOf(PropTypes.string),
   
}


export default Footer;