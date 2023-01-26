// import logo from './logo.svg';
import './App.css';
// import Welcome from './components/Welcome';
// import Condition from './components/Condition';
// import Collection from './components/Collection';
// import ListeFormateurs from './components/FormateurColl/ListeFormateurs';
// import Stagiare from './components/Stagiaire';
// import Films from './components/Films';
import NavBar from './components/Restaurant/NavBar';
// import Footer from './components/Restaurant/Footer';
import Produit from './components/Restaurant/Produit';

function App() {
  const nomNav = ['Home','About','Contact']
  
  const listeProduct = [
    {id:1, titre: "Tagine",Prix: 12, affiche:"./assets/images/tajinejpg.jpg"},
    {id:2, titre: "Couscous",Prix: 18, affiche:"./assets/images/couscous.webp"},
    {id:3, titre: "Paela",Prix: 22, affiche:"./assets/images/paela.jpg"},
    {id:1, titre: "Poulet",Prix: 12, affiche:"./assets/images/pouletjpg.jpg"},
    {id:2, titre: "Salade",Prix: 18, affiche:"./assets/images/saladejpg.jpg"},
    {id:3, titre: "Tagine d'agneau",Prix: 22, affiche:"./assets/images/tajine d'agneau.webp"},
  ]

  // const foot = [
  //     'coordonées', 'Produit', "Navigation",
  //     'contact', "adress","email"
  // ]
  
  // const formateurs = [
  //   { id : 1, lastname : "Beurive", firstname : "Aude", birthdate : "16/10/1989", avatar : "./assets/images/aude.png", gender : "female"},
  //   { id : 2, lastname : "Strimelle", firstname : "Aurélien", birthdate : "1/11/1989", avatar : "./assets/images/aurelien.png", gender : "male"},
  //   { id : 3, lastname : "Chaineux", firstname : "Gavin", birthdate : "18/10/1993", avatar : "./assets/images/gavin.png", gender : "male"},
  //   { id : 4, lastname : "Ly", firstname : "Khun", birthdate : "06/05/1982", avatar : "./assets/images/khun.png", gender : "male"}
  // ]
  // const listeStagiare= ["ikram","ilham","samir"]

  // const films = [
  //   {id:1, titre : "TITANIC", realisateur : "Robert Zemeckis", affiche : "https://fr.web.img2.acsta.net/c_310_420/pictures/15/10/13/15/12/514297.jpg"},
  //   {id:2, titre : "La liste de Sckildj", realisateur : "Robert Zemeckis", affiche : "https://fr.web.img4.acsta.net/c_310_420/pictures/19/03/14/10/37/5927961.jpg"},
  //   {id:3, titre : "Ligne la Verte", realisateur : "Frank Darabont", affiche : "https://fr.web.img2.acsta.net/c_310_420/medias/nmedia/18/66/15/78/19254683.jpg"},
  // ]

  return (
    <div className="App">
      {/* <p>Coucou</p> */}
      {/* <Welcome test="mon super test" truc="bidule" monNombrePref={5}/> */}
      {/* <Condition possedeAnimal={true} nomAnimal="Pilote" estChien={true} /> */}
      {/* <Collection nomFormateurs={nomForm} />
      <ListeFormateurs listeFormateurs={formateurs} /> */}
      {/* <Stagiare listeStagiares={listeStagiare} /> */}
      {/* <Films listFilms = {films} /> */}
      {/* <Footer /> */}
      <NavBar listeNav={nomNav} />
      {/* <Footer listeFooter={foot} /> */}
      <Produit listProduits={listeProduct}/>
    
    </div>
  );
}

export default App;
