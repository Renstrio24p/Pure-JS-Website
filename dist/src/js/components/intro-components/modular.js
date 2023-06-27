import { cx } from "../../../start"

export default function ModularSection(Modular){

    Modular.innerHTML = (
        `
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
                    <p class=${cx('pad-10')}>
                        Node.js is an open-source, server-side JavaScript runtime environment
                        built on Chrome's V8 JavaScript engine. 
                    </p>
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
        `
    )

}