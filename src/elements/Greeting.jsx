import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const GREETING = {
    img: '/assets/images/news/k&m.jpg',
    title: {
        en: 'Happy 24th of May',
        bg: 'Честит 24ти Май',
    },
    description: {
        en: `Happy day of the Slavic literacy and culture! Learn, study, aim to always find your answers and remember - 'Knowledge is power'!`,
        bg: `Честит ден на славянската писменост и култура! Учете, интересувайте се и помнете - 'Знанието е сила'!`
    }
}

const Greeting = () => {
    return (
        <div
            className="container team_member_border-3 greeting_card mt--100 mb--100"
        >
            <LazyLoadImage className="card_img" src={GREETING.img} alt='News' />
            <div className="card_text">
                <div className="en">
                    <h3>{GREETING.title.en}</h3>
                    <p style={{ fontSize: '22px' }}>{GREETING.description.en}</p>
                    <p>...</p>
                </div>
                <div>
                    <h3>{GREETING.title.bg}</h3>
                    <p style={{ fontSize: '22px' }}>{GREETING.description.bg}</p>
                </div>
            </div>
        </div>)
}

export default Greeting