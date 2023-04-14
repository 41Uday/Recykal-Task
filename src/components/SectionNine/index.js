import React from "react";

import './index.css'

const SectionNine = () => {
    return (
        <div className="s-9-container">
            <h1 className="s-9-head-1">We can grow together</h1>
            <p className="s-9-para-1">Our learnings from the field are here to <br />
               help us learn and grow</p>
            <div className="s-9-card-1">
                <div className="s-9-card-1-inner-1">
                    <h1 className="s-9-head-2">Circular Economy becomes <br />
                        the core of many brands</h1>
                    <p className="s-9-para-2">With a conscious shift towards a sustainable <br />
                        circular economy, global and national level <br />
                        brands are reaping HUGE benefits</p>
                    <button className="s-9-button">Download the case study</button>
                </div>
                <img src="https://recykal.com/wp-content/uploads/elementor/thumbs/Sustainability-q364tz80vgn19oeb7nz7so0c371w5bkyl3bpp2olyu.png" alt="sustainability" className="s-9-img" />
            </div>
        </div>
    )
}

export default SectionNine