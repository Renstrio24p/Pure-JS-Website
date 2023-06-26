import { cx } from "../start";


export default function Navbar(Nav){

    Nav.innerHTML = (
        `
            <div class=${cx('logo-container')}>
                <img class=${cx('logo')}  src='./src/images/javascript.webp' alt='brand logo' />
                <p> Javascript Fundamentals </p>
            </div>

            <ul class=${cx('nav-links')}>
                <li>Home</li>
                <li>About</li>
                <li>About US</li>
            </ul>
        `
    )


}