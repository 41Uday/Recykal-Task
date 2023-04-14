import React from "react";

import './index.css'

const SectionSix = () => {
    return (
        <div className="s-6-container">
            <p className="s-6-head-1-1">Industrial Waste Solutions</p>
            <h1 className="s-6-para-1-1">Certified Disposal Solutions for your Industrial Waste</h1>
            <ul className="s-4-list-container s-6-list-container">
                <li className="s-4-li-item s-6-list-item-1">Manufacturing Industries</li>
                <li className="s-4-li-item">FMCG Brands</li>
                <li className="s-4-li-item s-6-list-item-1">Bulk Waste Generators</li>
            </ul>
            <div className="s-6-card-1">
                <div className="S-6-card-1-inner-1">
                    <h1 className="s-6-head-1">For Manufacturing Waste</h1>
                    <p className="s-6-para-1">Our digital solutions help you effectively dispose <br /> the waste generated during the manufacturing <br /> process </p>
                </div>
                <div className="S-6-card-1-inner-1 S-6-card-1-inner-2">
                    <h1 className="s-6-head-1">For Industrial Product Waste</h1>
                    <p className="s-6-para-1">We source the best disposal solutions for all <br /> product and by-product related wastes at your <br /> facility</p>
                </div>
            </div>
            <button className="s-1-button s-3-button s-4-button">Explore our Solutions</button>
        </div>
    )
}

export default SectionSix