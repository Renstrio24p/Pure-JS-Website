import AboutSection from "../js/components/about";
import HomeSection from "../js/components/home";
import IntroSection from "../js/components/introductionJS";
import UniqueHash from "../security/HashCode";

export default function Main_Render(){
    const Home = document.getElementById('home');
    const About = document.getElementById('about');
    const Intro = document.getElementById('intro-js');

    window.addEventListener('DOMContentLoaded', () => {
            Home.id = UniqueHash();
            About.id = UniqueHash();
            Intro.id = UniqueHash();
    })

    HomeSection(Home);
    AboutSection(About);
    IntroSection(Intro);
}