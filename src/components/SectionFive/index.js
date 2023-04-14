import React from "react";

import './index.css'

const SectionFive = () => {
    return (
        <div className="s-5-container">
            <p className="s-3-head-1 s-5-h-1">IEC Awareness Programs</p>
            <h1 className="s-4-head-1 s-5-h-1">Information, Education & Communication</h1>
            <div className="s-4-card-1">
                <div className="s-4-card-1-inner-1 s-5-card-1">
                    <ul className="s-4-list-container">
                        <li className="s-4-li-item s5-li-item-1">Brands</li>
                        <li className="s-4-li-item s5-li-item-2">Government Agencies</li>
                        <li className="s-4-li-item s5-li-item-2">Corporates & MNCs</li>
                        <li className="s-4-li-item s5-li-item">RWAs</li>
                    </ul>
                    <p className="s-3-head-1 s-4-head-2 s-5-h-1">Change begins with awareness</p>
                    <p className="s-3-para-1 s-4-para-1 s-5-p-1">Our comprehensive IEC Awareness <br />
                            programs cater to key stakeholders of <br /> 
                            the waste management ecosystem, <br />
                            while assisting your brand in championing <br />
                            as a 'Conscious Sustainable Brand'</p>
                    <button className="s-1-button s-3-button s-4-button s-5-button">Find out more</button>
                </div>
                <img src="https://recykal.com/wp-content/uploads/2022/03/IMG_20211203_093811-1.png.webp" alt="e-waste" className="s-5-img-1" />
            </div>
        </div>
    )
}

export default SectionFive