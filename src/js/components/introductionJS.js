import { cx } from "../../start"
export default function IntroSection(Intro){
    Intro.innerHTML = (
        `
            <div class=${cx('intro-div')}>
                <h2>Javascript Walkthrough</h2>
                <p>
                    ES6 Allow us to Render a JS Component just like React JS.
                </p>
                <div class=${cx('d-flex-between')}>
                    <div>
                        <h3>index.js</h3>
                        <p class=${cx('intro-info')}> this file contains the render ability to get an element id app to index.html</p>
                    </div>

                    <pre>
                        import Start from "./start";
                        import './sass/index.scss';
                        import UniqueHash from "./security/HashCode";
                
                        const DOM = document.querySelector('#root');
                        DOM.id = UniqueHash();
                        Start(DOM); // Renders the Element ID
                    </pre>
                </div>

                <p>start.js</p>
                <pre>

                    import cx '../../start';

                    export default function Start(Start){

                        Start.innerHTML = (
                            &#768;
                            &#8203; &#8203; &lt;div id='container' class=${cx('d-flex-center-max')}&gt;
                            &#8203; &#8203; &#8203; &#8203; &lt;h1&gt; &#36;{hello}&gt;
                            &#8203; &#8203; &lt;/div&gt;
                            &#768;
                            &#8203; )
                    }
                </pre>
            </div>
        `
    )
}