import React from 'react';
import Cal from '../static/icon-cal.svg'
import Package from '../static/icon-package.svg'
import Service from '../static/icon-service.svg'

import saleboxesStyle from './saleboxes.module.scss';


const SaleBoxes = () => {
    const boxes = [
        {
          icon: "icon-package.svg",
          heading: "Free Shipping Globally",
          details: "Delivery in 4 Days"
        },
        {
          icon: "icon-cal.svg",
          heading: "24/7 Customer Service",
          details: "Call us any time"
        },
        {
          icon: "icon-service.svg",
          heading: "Easy Online Returns",
          details: "Send Within 30 Days"
        }
      ];
    return (
        <div>
            <section className={saleboxesStyle.boxes}>
              {
                boxes.map((box,ix) => 
                  <div className={`box${ix + 1}`} key={ix}>
                    <img src={ require(`../static/${box.icon}`)} alt="service icon" />
                    <h4 className={saleboxesStyle.heading}>{ box.heading }</h4>
                    <p>{ box.details }</p>
                  </div>
                )
              }
            </section>
            
        </div>
    );
}

export default SaleBoxes;
