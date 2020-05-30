import React from 'react';

import footerlinkStyle from './footerlinks.module.scss';

const FooterLinks = () => {
    return (
        <section className={footerlinkStyle.footerlinks}>
            <ul>
                <li>About</li>
                <li>Company</li>
                <li>Locations</li>
                <li>Contact</li>
                <li>Hours</li>
            </ul>
            <ul>
                <li>Twitter</li>
                <li>Facebook</li>
                <li>Instagram</li>
                <li>LinkedIn</li>
            </ul>
            <ul>
                <h4>Newsletter</h4>
                <input className={footerlinkStyle.footerLinkInput} type="text" />
            </ul>
        </section>
            
    );
}

export default FooterLinks;
