import Intro_Render from "../../render/Intro.render";
import { cx } from "../../start"

export default function IntroSection(Intro){
    Intro.innerHTML = (
        `
            <div class=${cx('intro-info')}>
                <h2>Javascript Walkthrough</h2>
                <p>
                    ES6 Allow us to Render a JS Component just like React JS.
                </p>

                <div id='installation'></div>
                <div id='rendering'></div>
                <div id='modular-scss'></div>
                <div id='web-security'></div>
            </div>
        `
    )

       Intro_Render(); 

}