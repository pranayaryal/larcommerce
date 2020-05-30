import React, { useState } from 'react';

import textlockupStyles from './textlockup.module.scss';

const TextLockUp = props => {

    const textLockUpSections = [
        {
          icon: "icon-package.svg",
          heading: "Free Shipping Globally",
          details: "Delivery in 4 Days"
        },
    ]

    return (
        <div className={textlockupStyles.textlockup}>
            <div className={textlockupStyles.img}>
                <img src={require(`../static/${props.image}.jpg`)} alt="Shoe" />
            </div>
            <div className={textlockupStyles.new}>{ props.new }</div>
            <div className={textlockupStyles.sale}>{ props.sale }</div>
            <div className={textlockupStyles.collection}>{ props.collection }</div>
            <div className={textlockupStyles.details}>{ props.details }</div>
        </div>

    );
};

export default TextLockUp;

