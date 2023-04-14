import React from "react";

import './index.css'

const SectionFour = () => {
    return (
        <div className="s-4-container">
            <p className="s-3-head-1 s-4-head-1-1">Takeback Solutions</p>
            <h1 className="s-4-head-1 s-4-head-1-1">Efficient Packaging REUSE with our Takeback Solutions</h1>
            <div className="s-4-card-1">
                <img src="https://recykal.com/wp-content/uploads/2022/03/IMG-20200202-WA0022-1.png.webp" alt="e-waste" className="s-4-img-1" />
                <div className="s-4-card-1-inner-1">
                    <ul className="s-4-list-container">
                        <li className="s-4-li-item">Producers</li>
                        <li className="s-4-li-item">Brand Owners</li>
                        <li className="s-4-li-item">Importers</li>
                    </ul>
                    <p className="s-3-head-1 s-4-head-2 s-4-para-1-1">Collect - Channel - Reuse</p>
                    <p className="s-3-para-1 s-4-para-1 s-4-para-1-1">Our ‘Plastic Takeback Solutions’ aim to eliminate the impact <br /> of post-consumer plastic waste in the environment, by using <br /> technology enabled takeback and recycling programs.</p>
                    <button className="s-1-button s-3-button s-4-button">Explore our Solutions</button>
                </div>
            </div>
        </div>
    )
}

export default SectionFour
