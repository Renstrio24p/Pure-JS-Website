import Render from './render/start.render';
import styles from './sass/modules/app.module.scss';
import classNames from 'classnames/bind';

export const cx = classNames.bind(styles);

export default function Start(DOM) {
  // Function here

  DOM.innerHTML = `
    <div id='container' class=${cx('DOM')}">
       <nav id='navbar' class=${cx('navbar')}></nav>
       <main id='main' class=${cx('main-style')}></main>
       <footer id='footer' class=${cx('footer')}></footer>
    </div>
  `;

    Render(); // Renders all your JS Components

}
