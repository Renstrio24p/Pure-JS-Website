import UniqueHash from "../security/HashCode";
import { cx } from "../start";
import AboutSection from "./components/about";
import HomeSection from "./components/home";
import IntroSection from "./components/introductionJS";

export default function MainContent(Main) {

    Main.innerHTML = (
        `
            <div id='home' class=${cx('home')}></div>
            <div id='about' class=${cx('about')}></div>
            <div id='intro-js' class=${cx('intro')}></div>

        `
    )

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