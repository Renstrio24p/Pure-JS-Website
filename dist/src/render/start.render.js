
import MainContent from "../js/Main";
import Navbar from "../js/Navbar";
import Footer from "../js/components/Footer";
import UniqueHash from "../security/HashCode";

export default function Render() {

  // Render the JS Component
  const ContainerDOM = document.getElementById('container');
  const Nav = document.getElementById('navbar');
  const Main = document.getElementById('main');
  const Foot = document.getElementById('footer');

  // Child JS Components

  window.addEventListener('DOMContentLoaded', () => {
      
        ContainerDOM.id = UniqueHash();
        Nav.id = UniqueHash();
        Main.id = UniqueHash();
        Foot.id = UniqueHash();
    });

    // Renders the JS Components
    Navbar(Nav);
    MainContent(Main);
    Footer(Foot);
}
