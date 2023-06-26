import styles from './sass/modules/app.module.scss';
import classNames from 'classnames/bind';
import Render from './security/Render';

export const cx = classNames.bind(styles);

export default function Start(DOM) {
  // Function here

  DOM.innerHTML = `
    <div id='container' class=${cx('DOM')}">
       <nav id='navbar' class=${cx('navbar')}></nav>
       <main id='main' class=${cx('main-style')}></main>
    </div>
  `;

    Render(); // Renders all your JS Components

}
