import UniqueHash from "../../security/HashCode";
import { cx } from "../../start";

export default function HomeSection(Home){

    Home.innerHTML = (
        `
        <div class=${cx('overlay')}>
            <div>
                <div class=${cx('title-box')}>
                    <h1 class=${cx('text-title')}>Vanilla Javascript ES10</h1>
                    <p class=${cx('description-color-white')}> 
                        Render environment of vanilla javascript, utilizing some
                        ES6+ module and Modular SCSS and CSS Styling.
                    </p>
                </div>
                <div class=${cx('feature-div')}>
                    <div class=${cx('feature-item')}>Rendering Javascript using ES6+</div>
                    <div class=${cx('feature-item')}>Modular CSS/SASS</div>
                    <div class=${cx('feature-item')}>Web Security</div>
                </div>
            </div>
        </div>

        `
    )

}