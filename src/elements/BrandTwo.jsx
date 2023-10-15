import React, { Component } from "react";

class BrandTwo extends Component {
    render() {
        return (
            <div className="rn-brand-area brand-separation bg_color--5 ptb--40">
                <h3 style={{ textAlign: 'center', fontFamily: 'Archive' }}>Partners</h3>
                <ul className="brand-style-2">
                    <li>
                        <a href='https://bulgariansocietyrtm.nl' target='_blank'><img src="/assets/images/brand/brand-08.jpg" style={{borderRadius: '50%'}} alt="Logo Images" /></a>
                    </li>
                    <li>
                        <a href='https://www.cooltravel.bg/' target='_blank'><img className="splash-li" src="/assets/images/brand/brand-06.png" alt="Logo Images" /></a>
                    </li>
                    <li>
                        <a href='https://domakin.nl/' target='_blank'><img src="/assets/images/brand/brand-07.png" alt="Logo Images" style={{ borderRadius: '5%' }} /></a>
                    </li>
                    <li>
                        <a href='https://studybuddy.bg/' target='_blank'><img src="/assets/images/brand/brand-04.png" alt="Logo Images" /></a>
                    </li>
                    <li>
                        <a href='https://www.integral.bg/' target='_blank'><img src="/assets/images/brand/brand-05.png" alt="Logo Images" /></a>
                    </li>
                    <li>
                        <a href='https://en.unify.bg/' target='_blank'><img src="/assets/images/brand/brand-02.png" alt="Logo Images" /></a>
                    </li>
                </ul>
            </div>

        )
    }
}
export default BrandTwo;