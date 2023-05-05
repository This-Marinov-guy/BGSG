import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Greeting = () => {
    return (
        <div
            className="team_member_border-3 greeting_card mt--40 mb--80"
        >
            <LazyLoadImage className="card_img" src='/assets/images/news/george.jpg' alt='News' />
            <div className="card_text">
                <div className="en">
                    <h3>Happy Day of George</h3>
                    <p>BGSG wishes you a happy holiday full of joy, great moments with family and friends and warm welcoming of summer! We wish all people named after the saint to be healthy and cheerful around the year and to be proud of their name!</p>
                    <p>...</p>
                </div>
                <div>
                    <h3>Честит Гергьовден</h3>
                    <p>Ние от BGSG пожелаваме весело прекарване на празника, много весели емоции със семейството и близки и най-вече топло посрещане на лятото! А на всички именници - пожелаваме здраве, щастие, късмет и да си носят името със здраве!</p>
                </div>
            </div>
        </div>)
}

export default Greeting