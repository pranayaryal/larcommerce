import React from 'react';

import FooterLinks from './FooterLinks';

import footerStyles from './footer.module.scss';

const Footer = () => {
    return (
        <footer>
            <section className={footerStyles.callout}>
                <h2 className={footerStyles.callout.h2}>"The surprising styles of Skyline Ivy are advanced for all seasons"</h2>
                <p>Hansel Anderson</p>
            </section>
            <FooterLinks />
            <div className={footerStyles.sarahstuff}>
                <p className={footerStyles.sarahlink}>
                </p>
            </div>
        </footer>
    );
}

export default Footer;
