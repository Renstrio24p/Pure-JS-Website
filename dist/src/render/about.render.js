import ES10Section from "../js/components/about-components/es10";
import UniqueHash from "../security/HashCode";

export default function About_Render(AboutRender){

    const ES10 = document.getElementById('es10');

    window.addEventListener('DOMContentLoaded', () => {
        ES10.id = UniqueHash();
    })

    ES10Section(ES10);

}