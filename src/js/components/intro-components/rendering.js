import { cx } from "../../../start"

export default function RenderingSection(Renders){
    Renders.innerHTML = (
        `
        <p class=${cx('methods')}> I - Javascript Rendering Method </p>
        <div class=${cx('d-flex-between')}>
            <div class=${cx('pad-20')}>
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

        <div class=${cx('d-flex-between')}>
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

            <div class=${cx('pad-20')}>
               <h3>start.js</h3>
               <p class=${cx('intro-info')}> 
               this is just like a JSX rendering method but in imperative way
                in Vanilla Javascipt.
               <br>
                  Start is a Parameter that hold the JS component innerHTML contents.

                Start will passed in to a DOM parameter in the index.js from a Start
               component.
                </p>
            </div>
        </div>
        `
        )
}