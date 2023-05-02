import React, { Component } from "react";

class BrandTwo extends Component{
    render(){
        return(
            <React.Fragment>
              <h3 style={{textAlign:'center'}}>Partners</h3>
                <ul className="brand-style-2">
                    
                    <li>
                        <img src="/assets/images/brand/brand-01.png" alt="Logo Images"/>
                    </li>
                    <li>
                        <img src="/assets/images/brand/brand-02.png" alt="Logo Images"/>
                    </li>
                </ul>
            </React.Fragment>
        )
    }
}
export default BrandTwo;