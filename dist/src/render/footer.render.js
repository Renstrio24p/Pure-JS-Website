import Footer_Collaboration from "../js/components/footer-components/collaboration";
import Footer_ContactUS from "../js/components/footer-components/contactus";
import UniqueHash from "../security/HashCode";

export default function Footer_Render(){

    const Collaboraton = document.getElementById('collab');
    const ContactUS = document.getElementById('contact-us');

    window.addEventListener('DOMContentLoaded', () => {
        Collaboraton.id = UniqueHash();
        ContactUS.id = UniqueHash();
    })

    Footer_Collaboration(Collaboraton);
    Footer_ContactUS(ContactUS);

}