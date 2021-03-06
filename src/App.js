import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar'
import carrusel from './images/carrusel.jpg';
import button from './images/button.png';

import Superheroes from './components/Superheroes/Superheroes';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

library.add(faSearch)


const API_KEY = 'ee3ec3d304aa87d05d8a92e45b526f4d';
const HASH = "974c38ee92752852e61d83c41972e012"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      superheroes: []
    }
  }

  componentDidMount = () => {
    fetch(`https://cors-anywhere.herokuapp.com/http://gateway.marvel.com/v1/public/characters?ts=1&apikey=${API_KEY}&hash=${HASH}&limit=100`)
      .then(res => res.json())
      .then(json => {
        this.setState({
          superheroes: json.data.results
        })

      });
  }

  render() {

    return (
      <div>
        <Navbar />
        <section>
          <img src={carrusel} alt="logo" className="carrusel" />
          <div className="navUnderCarrusel"></div>
        </section>
        <img src={button} alt="logo" className="characters" />
        <div className="search"> 
        <FontAwesomeIcon className="iconSearch" icon="search" /> <input placeholder= "SEARCH" className="inputSearch"></input>
        </div>

        

        <Superheroes superheroes={this.state.superheroes} />
        <footer className="footer-info"><p>Data provided by Marvel. © 2019 MARVEL</p></footer>
      </div>
    )
  }
};

export default App;
