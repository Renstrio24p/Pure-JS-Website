import { cx } from "../../../start"

export default function WebSecuritySection(WebSecure){

    WebSecure.innerHTML = (

        `
        <p class=${cx('methods')}> III - Web Security </p>
        <div class=${cx('d-flex-between')}>
            <div>
                <h3>Hashing Method</h3>
                <p class=${cx('intro-info')}>
                    Hashing is a fundamental method used in web security
                    to ensure the integrity and confidentiality of data. 
                    It involves transforming input data of any size into 
                    a fixed-size output, called a hash value or hash code. 
                    This hash value is typically a sequence of characters that 
                    is unique to the input data. <br><br>

                    you will see this method in HashCode.js
                    
                </p>
                    <pre> UniqueHash();</pre>
                <p class=${cx('pad-10')}>
                    this window.addEventListener will automatically change
                    id hashing value everytime the user reloads the page.
                    you can see this code in.
                    <pre>
                        Render.js
                    </pre>
                </p>
                <p class=${cx('pad-10')}>
                    this will Renders all the parent Components. <br>
                    <br>
                    Navbar.js, <br> MainContent.js, <br> Footer.js
                </p>
                
                    <pre>
                        window.addEventListener('DOMContentLoaded', () => {

                        ContainerDOM.id = UniqueHash();
                        Nav.id = UniqueHash();
                        Main.id = UniqueHash();
                        });
        
                        // Renders the JS Components
                        Navbar(Nav);
                        MainContent(Main);
                        }
                    </pre>                         
            </div>

            <div>
                <pre>
                    const generatedHashes = new Set();

                    export default function UniqueHash() {
                    let hash;
                    do {
                    hash = Math.random().toString(32).substring(2);
                    } while (generatedHashes.has(hash));
                    generatedHashes.add(hash);
                    return hash;
                    }
                </pre>

                <p class=${cx('pad-10')}>
                    GenerateHash will generate random unique ID hashes everytime the user reloads the browser.
                </p>
            </div>
        </div>
        `
    )
}