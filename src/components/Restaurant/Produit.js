import PropTypes from "prop-types";
import './Produit.css'

const ProduitCard= (props) => {
    const { affiche, titre,prix} = props;
    
    return (
        //Si gender est male mettra la classe blue, si gender pas male, mettre la classe pink
        
        
        <div className="produit-card">
            
            <img src={affiche} alt ="affiche" />
            <p className='produit-titre'>{titre}</p>
            <p className='produit-prix'>{prix}</p>
             <button>Selectionner</button>
           
        </div>
    
    )
}
ProduitCard.protoTypes = {
    affiche : PropTypes.string,
    titre : PropTypes.string,
    prix:PropTypes.number,
}
const Produit = (props) => {
    const {listProduits} = props
    
    return(
       
        <div className="produit-container">
            { listProduits.map(product=> <ProduitCard key={product.id} prix={product.prix} affiche={product.affiche}titre={product.titre} />)}
             </div>
    )
}
Produit.propTypes = {

    listProduits : PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        affiche : PropTypes.string,
        titre : PropTypes.string,
        prix:PropTypes.number,
    }))
}

























export default Produit