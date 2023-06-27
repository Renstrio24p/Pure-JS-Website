import { cx } from "../../../start"

export default function Footer_Collaboration(collab){

    collab.innerHTML = (

        `
            <h2>Collaborators</h2>
            <ul class=${cx('d-grid-gap-10-left')}>
                <li>
                    <div>
                        <img class=${cx('profile-img')} src='./src/images/collaborators/renstrio24p.webp' alt='renstrio24p img' />
                    </div>
                    <div>
                        <span class=${cx('contribute-name')}>Gador, Waren A. </span>
                        <div class=${cx('d-flex-gap-5px-left')}>
                            <div class=${cx('collab-box')}>
                                <img class=${cx('github-icon')} src='./src/images/icons/github.webp' alt="github" />
                                <a class=${cx('links')} href="#0">Github: Renstrio24p</a>
                            </div>
                        </div>
                    </div>
                </li>
                <li>
                    <div>
                        <img class=${cx('profile-img')} src='./src/images/collaborators/daioscoder.webp' alt='daioscoder img' />
                    </div>
                    <div>
                        <span class=${cx('contribute-name')}>Ballena, Jerome </span>
                        <div class=${cx('d-flex-gap-5px-left')}>
                            <div class=${cx('collab-box')}>
                                <img class=${cx('github-icon')} src='./src/images/icons/github.webp' alt="github" />
                                <a class=${cx('links')} href="#0">Github: Daioscoder</a>
                            </div>
                        </div>
                    </div>
                </li>
                <li>
                    <div>
                        <img class=${cx('profile-img')} src='./src/images/collaborators/eyong.webp' alt='daioscoder img' />
                    </div>
                    <div>
                        <span class=${cx('contribute-name')}>Tubao, Emilio </span>
                        <div class=${cx('d-flex-gap-5px-left')}>
                            <div class=${cx('collab-box')}>
                                <img class=${cx('github-icon')} src='./src/images/icons/github.webp' alt="github" />
                                <a class=${cx('links')} href="#0">Github: Eyong24</a>
                            </div>
                        </div>
                    </div>
                </li>
                <li>
                    <div>
                        <img class=${cx('profile-img')} src='./src/images/collaborators/agaspar.webp' alt='daioscoder img' />
                    </div>
                    <div>
                        <span class=${cx('contribute-name')}>Agaspar, Adrian S. </span>
                        <div class=${cx('d-flex-gap-5px-left')}>
                            <div class=${cx('collab-box')}>
                                <img class=${cx('github-icon')} src='./src/images/icons/github.webp' alt="github" />
                                <a class=${cx('links')} href="#0">Github: Agaspar11</a>
                            </div>
                        </div>
                    </div>
                </li>
                <li>
                    <div>
                        <img class=${cx('profile-img')} src='./src/images/collaborators/ryanayo.webp' alt='daioscoder img' />
                    </div>
                    <div>
                        <span class=${cx('contribute-name')}>Ayo, Ryan A. </span>
                        <div class=${cx('d-flex-gap-5px-left')}>
                            <div class=${cx('collab-box')}>
                                <img class=${cx('github-icon')} src='./src/images/icons/github.webp' alt="github" />
                                <a class=${cx('links')} href="#0">Github: ryanayo74 </a>
                            </div>
                        </div>
                    </div>
                </li>
                <li>
                    <div>
                        <img class=${cx('profile-img')} src='./src/images/collaborators/bernard.webp' alt='daioscoder img' />
                    </div>
                    <div>
                        <span class=${cx('contribute-name')}>Opis, Bernard </span>
                        <div class=${cx('d-flex-gap-5px-left')}>
                            <div class=${cx('collab-box')}>
                                <img class=${cx('github-icon')} src='./src/images/icons/github.webp' alt="github" />
                                <a class=${cx('links')} href="#0">Github: OpisBernard </a>
                            </div>
                        </div>
                    </div>
                </li>
                

            </ul>
        `

    )

}