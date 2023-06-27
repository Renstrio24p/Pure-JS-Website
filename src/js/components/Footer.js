import Footer_Render from "../../render/footer.render";
import { cx } from "../../start";

export default function Footer(Foot){

    Foot.innerHTML = (
        `
            <div class=${cx('footer-container')}>
                <div class=${cx('top-footer')}>
                    <div id='collab'></div>
                    <div id='Stacks'></div>
                    <div class=${cx('divider')}></div>
                    <div id='contact-us'></div>
                </div>
            </div>
        `
    )

    Footer_Render();

}