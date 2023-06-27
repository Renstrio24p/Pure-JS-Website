import { cx } from "../../../start";

export default function Footer_ContactUS(Contact){

    Contact.innerHTML = (
        `
            <div>
                <form class=${cx('d-flex-align-center')}>
                    <img class=${cx('email-icon')} src='./src/images/icons/email.webp' alt="email icon" />
                    <input type='email' name='email' placeholder='abc@domain.com' />
                    <button type='submit'> Subscribe</button>
                </form>
            </div>

            <ul class=${cx('d-flex-gap-10-left')}>
                <li class=${cx('pad-5')}>
                   <img class=${cx('footer-icons')} src='./src/images/icons/collab.webp' alt="collab icon" />
                </li>
                <li class=${cx('pad-5')}>
                   <img class=${cx('footer-icons')} src='./src/images/icons/linkedin.webp' alt="linkedin icon" />
                </li>
                <li class=${cx('pad-5')}>
                   <img class=${cx('footer-icons')} src='./src/images/icons/github.webp' alt="github icon" />
                </li>
            </ul>
        `
    )
}