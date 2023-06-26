import { cx } from "../../start";

export default function AboutSection(About){
    About.innerHTML = (
        `
        <div class=${cx('d-flex-row')}>
            <img src='./src/images/javascript.png' class=${cx('about-img')} alt="javascript-logo"/>
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

            <div class=${cx('d-grid-row-start')}>
                <div class=${cx('about-item')}>
                    <h3>Array.prototype.flat()</h3>
                    <pre class=${cx('formatting')}>
                        const nestedArray = [1, 2, [3, 4, [5, 6]]];
                        console.log(flattenedArray);

                        const fullyFlattenedArray = nestedArray.flat(Infinity);
                        console.log
                    </pre>
                </div>
                <div class=${cx('about-item')}>
                    <h3>Array.prototype.flatMap()</h3>
                    <pre class=${cx('formatting')}>
                        const numbers = [1, 2, 3, 4];

                        const multipliedAndFlattened = numbers.flatMap(num => [num, num * 2]);
                        console.log(multipliedAndFlattened);
                    </pre>
                </div>
                <div class=${cx('about-item')}>
                    <h3>Object.fromEntries()</h3>
                    <pre class=${cx('formatting')}>
                        const entries = [['name', 'John'], ['age', 30], ['city', 'New York']];

                        const obj = Object.fromEntries(entries);
                        console.log(obj);
                    </pre>
                </div>
                <div class=${cx('about-item')}>
                    <h3>Optional chaining (?.)</h3>
                    <pre class=${cx('formatting')}>
                        const person = {
                            name: 'John',
                            age: 30,
                            address: {
                                city: 'New York'
                            }
                        };
                      
                        const city = person.address?.city;
                        console.log(city); // Output: 'New York'
                      
                        const country = person.address?.country;
                        console.log(country); // Output: undefined
                    </pre>
                </div>
                <div class=${cx('about-item')}>
                    <h3>Nullish coalescing operator (??)</h3>
                    <pre class=${cx('formatting')}>
                        const name = null;
                        const defaultName = name ?? 'Unknown';
                        console.log(defaultName); // Output: 'Unknown'
                    
                        const age = 0;
                        const defaultAge = age ?? 18;
                        console.log(defaultAge); // Output: 0 (since 0 is not nullish)
                    </pre>
                </div>
            </div>
        `
    )
}