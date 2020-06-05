import React from 'react';
import Card from './Card';

const Details = () => {
    return (
        <div>
            <div className="container">
                <section className="section">
                    <div className="columns">
                        <div className="column is-two-thirds">
                            <div class="card">
                                <div class="card-image">
                                    <figure class="image is-2by2">
                                        <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image" />
                                    </figure>
                                </div>
                                <div class="card-content">

                                    <div class="content">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Phasellus nec iaculis mauris.
                        <br />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

        </div>
    );
}

export default Details;
