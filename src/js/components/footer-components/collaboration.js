import { cx } from "../../../start"

export default function Footer_Collaboration(collab){

    collab.innerHTML = (

        `
            <h2>Collaborators</h2>
            <ul class=${cx('d-flex-gap-10')}>
                <li>
                    <span class=${cx('contribute-name')}>Gador, Waren A. </span>
                    <div class=${cx('d-flex-gap-5px-left')}>
                    <div class=${cx('collab-box')}>
                        <img class=${cx('github-icon')} src='./src/images/icons/github.webp' alt="github" />
                        <a class=${cx('links')} href="#0">Github: Renstrio24p</a>
                    </div>
                    </div>
                </li>
                <li>
                    <span class=${cx('contribute-name')}>Ballena, Jerome </span>
                    <div class=${cx('d-flex-gap-5px-left')}>
                    <div class=${cx('collab-box')}>
                        <img class=${cx('github-icon')} src='./src/images/icons/github.webp' alt="github" />
                        <a class=${cx('links')} href="#0">Github: Dioscoder</a>
                    </div>
                    </div>
                </li>
                <li>
                    <span class=${cx('contribute-name')}>Tubao, Emillio</span>                    
                    <div class=${cx('d-flex-gap-5px-left')}>
                    <div class=${cx('collab-box')}>
                        <img class=${cx('github-icon')} src='./src/images/icons/github.webp' alt="github" />
                        <a class=${cx('links')} href="#0">Github: Eyong</a>
                    </div>
                    </div>
                </li>

            </ul>
        `

    )

}