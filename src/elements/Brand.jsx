import React, { Component } from "react";

class Brand extends Component{
    render(){
        const {branstyle } = this.props;
        return(
            <React.Fragment>
                <ul className={`brand-list ${branstyle}`}>
                <li>
                                    <a href='https://www.unifyfcu.com/' target='_blank'><img src="/assets/images/brand/brand-02.png" alt="Logo Images" /></a>
                                </li>
                                <li>
                                    <a href='https://www.stripe.com/' target='_blank'> <img src="/assets/images/brand/brand-03.png" alt="Logo Images" /></a>
                                </li>
                                <li>
                                    <a href='https://www.stelstuff.com/' target='_blank'><img src="/assets/images/brand/brand-01.png" alt="Logo Images" /></a>
                                </li>
                                <li>
                                    <a href='https://www.unifyfcu.com/' target='_blank'><img src="/assets/images/brand/brand-02.png" alt="Logo Images" /></a>
                                </li>
                                <li>
                                    <a href='https://www.stripe.com/' target='_blank'> <img src="/assets/images/brand/brand-03.png" alt="Logo Images" /></a>
                                </li>
                                <li>
                                    <a href='https://www.stelstuff.com/' target='_blank'><img src="/assets/images/brand/brand-01.png" alt="Logo Images" /></a>
                                </li>
                </ul>
            </React.Fragment>
        )
    }
}
export default Brand;