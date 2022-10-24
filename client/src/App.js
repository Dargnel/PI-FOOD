import './App.css';
import React from "react";
import { Route } from "react-router-dom";
import Buscador from "./Components/Searchbar/bar"
import FrontPage from './Components/FrontPage/Front';
import NewRecipe from './Components/PostRecipe/PostRecipe';
import RecipDetail from './Components/RecipesDetail/RecipesDetail';
function App() {
  return (
    <React.Fragment>
 
      <Route exact path="/newrecipe" component={NewRecipe} />
      <Route exact path="/" component={FrontPage} />
      <Route path="/recipes/:page" component={Buscador} />
      <Route path="/recip/:id" component={RecipDetail} />

    
    </React.Fragment>
  );
}

export default App;
