import PropTypes from "prop-types";
import './Films.css'

const FilmCard= (props) => {
    const { affiche, titre, realisateur } = props;

    return (
        //Si gender est male mettra la classe blue, si gender pas male, mettre la classe pink
        <div className="film-card">
            <img src={affiche} alt ="affiche" />
            <p className='film-titre'>{titre}</p>
            <p className="info">De: {realisateur}</p>
        </div>
    
    )
}
FilmCard.protoTypes = {
    affiche : PropTypes.string,
    titre : PropTypes.string,
    realisateur : PropTypes.string
}

 const Films = (props) => {
    const {listFilms} = props

    return(
        <div className="films-container">
            { listFilms.map(film => <FilmCard key={film.id} affiche={film.affiche}titre={film.titre} realisateur={film.realisateur}/>)}
             </div>
    )
}
Films.propTypes = {

    listFilms : PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        affiche : PropTypes.string,
        realisateur : PropTypes.string,
        titre : PropTypes.string
    }))
  
}

export default Films;