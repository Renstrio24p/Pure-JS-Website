import { cx } from "../../../start"

export default function InstallationSection(Install){
    
        Install.innerHTML = (
            `
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

            `
            )
}