import React from 'react';

const Card = (props) => {
    return (
        <div class="card">
            <div class="card-image">
                <figure class="image is-4by3">
                    <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image" />
                </figure>
            </div>
            <div class="card-content">

                <div class="content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Phasellus nec iaculis mauris.
                        <br />
                </div>
                <a href="/details" 
                className="button is-primary" 
                onClick={props.handleDetailsClick}>Details</a>
            </div>
        </div>
    );
}

export default Card;
