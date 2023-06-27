import Main_Render from "../render/main.render";
import { cx } from "../start";

export default function MainContent(Main) {

    Main.innerHTML = (
        `
            <div id='home' class=${cx('home')}></div>
            <div id='about' class=${cx('about')}></div>
            <div id='intro-js' class=${cx('intro')}></div>
        `
    )

    Main_Render();
}