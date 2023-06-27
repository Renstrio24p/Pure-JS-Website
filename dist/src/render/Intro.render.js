import InstallationSection from "../js/components/intro-components/installation";
import ModularSection from "../js/components/intro-components/modular";
import RenderingSection from "../js/components/intro-components/rendering";
import WebSecuritySection from "../js/components/intro-components/websecurity";
import UniqueHash from "../security/HashCode";

export default function Intro_Render(){

    const installation = document.getElementById('installation');
    const rendering = document.getElementById('rendering');
    const modular = document.getElementById('modular-scss');
    const websecurity = document.getElementById('web-security');
   
    window.addEventListener('DOMContentLoaded', () => {
        installation.id = UniqueHash();
        rendering.id = UniqueHash();
        modular.id = UniqueHash();
        websecurity.id = UniqueHash();
    })

    InstallationSection(installation);
    RenderingSection(rendering);
    ModularSection(modular);
    WebSecuritySection(websecurity);
}




