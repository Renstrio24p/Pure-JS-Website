
import MainContent from "../js/Main";
import Navbar from "../js/Navbar";
import UniqueHash from "./HashCode";

export default function Render() {

  // Render the JS Component
  const ContainerDOM = document.getElementById('container');
  const Nav = document.getElementById('navbar');
  const Main = document.getElementById('main');

  // Child JS Components

  window.addEventListener('DOMContentLoaded', () => {
      
        ContainerDOM.id = UniqueHash();
        Nav.id = UniqueHash();
        Main.id = UniqueHash();
    });

    // Renders the JS Components
    Navbar(Nav);
    MainContent(Main);
}
