import React from "react";
import { BrowserRouter, Link, Route } from "react-router-dom";
import DetailsScreen from "./screens/DetailsScreen";
import FavoritesScreen from "./screens/FavoritesScreen";
import HomeScreen from "./screens/HomeScreen";


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <header className="navbar">
      <div className="header-links">
          <Link   to="/" >Home</Link>
          <Link to="/favorites">Favorites</Link>
          </div>
        
        
      </header>

      <main className="main">
      <Route path="/" exact={true} component={HomeScreen} />
      <Route path="/favorites" component={FavoritesScreen} />
      <Route path="/details" component={DetailsScreen} />
        </main>
      <footer><p>by giorgi batselashvili</p></footer>
    </div>
     </BrowserRouter>
  );
}

export default App;
