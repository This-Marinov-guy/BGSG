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
                    <h3>Happy Day of St George</h3>
                    <p>Bulgarian Society Groningen wishes you a happy holiday full of joy, great moments with your family and friends and a warm welcoming of the summer! We wish all people named after the Saint to be healthy and cheerful all year аround and to carry their name proudly!</p>
                    <p>...</p>
                </div>
                <div>
                    <h3>Честит Гергьовден</h3>
                    <p>Ние от Bulgarian Society Groningen ви пожелаваме весело прекарване на празника, много позитивни емоции със семейството и близките ви и най-вече топло посрещане на лятото! А на всички именници - пожелаваме здраве, щастие, късмет и да си носят името със здраве!</p>                </div>
            </div>
        </div>)
}

export default Greeting