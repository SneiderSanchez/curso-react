import React  from "react";
import {render}  from "react-dom";
import Home  from '../pages/containers/homeContainer';
//import Playlist from './src/playlist/components/playlist';
import data from '../api.json';

const home = document.getElementById('home-container')
/* const saludo = <h1>Perro hijueputa :(</h1> */

//ReactDOM.render("que voy a renderizar", "donde lo haré");
render(<Home data={data}/>, home);
