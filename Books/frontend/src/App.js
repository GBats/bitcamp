import "./App.css";
import HomeScreen from "./screens/HomeScreen";
import { Route, Link, BrowserRouter } from "react-router-dom";
import Favorites from "./screens/Favorites";
import { useSelector } from "react-redux";
import DetailsScreen from "./screens/DetailsScreen";

function App() {
  const favorites = useSelector((state) => state.favorites);

  const openMenu = () => {
    document.getElementById("sidebar").classList.add("open");
  };

  const closeMenu = () => {
    document.getElementById("sidebar").classList.remove("open");
  };

  return (
    <BrowserRouter>
      <div className="App">
        <header className="header">
          <div className="side-options">
            <button className="side-button" onClick={(e) => openMenu()}>
              &#9776;
            </button>

            <aside id="sidebar" className="sidebar">
              <button
                className="sidebar-close-button"
                onClick={(e) => closeMenu()}
              >
                x
              </button>
              <ul className="sidebar-menu">
                <li className="menu-title">Menu</li>
                <li className="underline" ></li>
                <li >
                  <Link className="menu-links" to="/favorites">Favorites</Link>
                </li>
              </ul>
            </aside>

            <Link className="google-book-api" to="/">
              Google Book API
            </Link>
          </div>
          <div className="navbar">
            <ul>
              <li className="fav-header-icon">
                <Link to="/favorites/">Favorites</Link>
                <div className="fav-count">{favorites.fav.length}</div>
              </li>
            </ul>
          </div>
        </header>
        <main className="main">
          <Route path="/" exact={true} component={HomeScreen} />
          <Route path="/favorites" component={Favorites} />
          <Route path="/details/:id" component={DetailsScreen} />
        </main>

        <footer className="footer">All right reserved.</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
