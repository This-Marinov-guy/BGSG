import React, { Component } from "react";

class BrandTwo extends Component{
    render(){
        return(
            <React.Fragment>
              <h3 style={{textAlign:'center'}}>With the help of</h3>
                <ul className="brand-style-2">
                    
                    <li>
                        <img src="/assets/images/brand/brand-03.png" alt="Logo Images"/>
                    </li>
                    <li>
                        <img src="/assets/images/brand/brand-04.png" alt="Logo Images"/>
                    </li>
                </ul>
            </React.Fragment>
        )
    }
}
export default BrandTwo;