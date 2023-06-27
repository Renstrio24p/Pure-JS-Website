import About_Render from "../../render/about.render";
import { cx } from "../../start";

export default function AboutSection(About){
    About.innerHTML = (
        `
        <div class=${cx('d-flex-row')}>
            <img src='./src/images/javascript.webp' class=${cx('about-img')} alt="javascript-logo"/>
            <div class=${cx('about-es10')}>
                <h2 class=${cx('about-title')}>ES10 - ECMAScript 2019 </h2>
                <p class=${cx('about-description')}>
                    ES10, also known as ECMAScript 2019, is the 10th edition of the ECMAScript
                    language specification. ECMAScript is a scripting language standardized by 
                    the Ecma International organization and is commonly used for client-side 
                    scripting in web development.
                </p>
            </div>
        </div>

            <div id='es10' class=${cx('d-grid-row-start')}></div>
        `
    )

    About_Render();
}