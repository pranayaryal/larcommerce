import React from 'react';

import Navbar from './Navbar'
import Footer from './Footer';

import layoutStyles from './layout.module.scss';


const Layout = props => {
    return (
        <div>
            <Navbar />
            <main>
                {props.children}
            </main>
            <Footer />
        </div>
    );
}

export default Layout;
