import React, { Component } from "react";

class BrandTwo extends Component {
    render() {
        return (
            <div className="rn-brand-area brand-separation bg_color--5 ptb--80">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h3 style={{ textAlign: 'center', fontFamily: 'Archive' }}>Partners</h3>
                            <ul className="brand-style-2">

                                <li>
                                    <a href='https://en.unify.bg/' target='_blank'><img src="/assets/images/brand/brand-02.png" alt="Logo Images" /></a>
                                </li>
                                <li>
                                    <a href='https://www.stripe.com/' target='_blank'> <img src="/assets/images/brand/brand-03.png" alt="Logo Images" /></a>
                                </li>
                                <li>
                                    <a href='https://www.stelstuff.com/' target='_blank'><img src="/assets/images/brand/brand-01.png" alt="Logo Images" /></a>
                                </li>
                                
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default BrandTwo;