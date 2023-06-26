import { cx } from "../../start"
export default function IntroSection(Intro){
    Intro.innerHTML = (
        `
            <div class=${cx('intro-div')}>
                <h2>Javascript Walkthrough</h2>
                <p>
                    ES6 Allow us to Render a JS Component just like React JS.
                </p>

                <div>
                    <p class=${cx('methods')}> Installation  </p>
                    <div class=${cx('d-flex-between')}>
                        <div>
                            <h3>Download Javascript Template</h3>
                            <a href="https://github.com/Renstrio24p/Standalone-JavascriptES10">
                            <img class=${cx('javascript-logo')} src='./src/images/javascript.webp' alt="javascript-logo"/>
                            <p>Standalone Javascript ES10 </p>
                        </a>
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

                    
                </div>

                <div>
                    <p class=${cx('methods')}> I - Javascript Rendering Method </p>
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

                        <div>
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
                </div>
                <div>
                    <p class=${cx('methods')}> II - Javascript Modular Styling </p>
                    <div class=${cx('d-flex-between')}>
                        <div>
                            <h3>Modular Styling</h3>
                            <p class=${cx('intro-info')}> Modular Styling is a best Practice Style where it optimize styling with Hashing Code classnames</p>
                            <pre>

                               import styles from './sass/modules/app.module.scss';
                               import ClassNames from 'classNames/bind';

                               const cx = ClassNames.bind(styles);
                            </pre>
                            <p> if you don't have ClassName from your projects.</p>
                            <pre>
                                &dollar; npm i classnames --save-dev
                            </pre>

                            <p class=${cx('pad-10')}>Required to install Node JS : click the node icon to download it.</p>
                            <div class=${cx('d-flex-align-center')}>
                                <a href="https://nodejs.org/en">
                                    <img class=${cx('nodejs-logo')} src='./src/images/nodejs.webp' alt='nodejs logo'/>
                                </a>
                            </div>
                        </div>

                        <div>

                            <p class=${cx('pad-10')}>
                                Generic Modular Style :
                            </p>
                            <pre>
                                &lt;div class=&dollar;{styles['d-flex']}&gt; &lt;/div&gt;
                            </pre>
                            <p class=${cx('pad-10')}>
                                with Classname Binding Modular Style :
                            </p>
                            <pre>
                                &lt;div class=&dollar;{cx('d-flex')}&gt; &lt;/div&gt;
                            </pre>

                            <p class=${cx('pad-10')}> Here's the full code from 'start.js' Component</p>
                            <pre>
                            import classNames from 'classNames/bind';
                            export const cx = classNames.bind(styles);
                
                            export default function Start(Start){
                    
                            Start.innerHTML = (
                            &#768;
                            &#8203; &#8203; &lt;div id='container' class= &dollar;{cx('d-flex-center-max')}&gt;
                            &#8203; &#8203; &#8203; &#8203; &lt;h1&gt; &#36;{hello}&gt;
                            &#8203; &#8203; &lt;/div&gt;
                            &#768;
                            &#8203; )
                            }
                            </pre>
                        </div>
                    </div>

                </div>
            </div>
        `
    )
}