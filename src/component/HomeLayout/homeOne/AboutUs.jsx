import React, { Component } from "react";
import ImageFb from "../../../elements/ui/ImageFb";

class AboutUs extends Component {
  render() {
    let title = "About Us";
    return (
      <React.Fragment>
        <div className="about-wrapper mb--40">
          <div className="container">
            <div className="row row--35 align-items-center">
              <div className="col-lg-5 col-md-12">
                <div className="thumbnail">
                  <ImageFb
                    className="w-100"
                    src="/assets/images/about/board.webp"
                    fallback="/assets/images/about/board.jpg"
                    alt="About Images"
                  />
                </div>
              </div>

              <div className="col-lg-7 col-md-12">
                <div className="about-inner inner">
                  <div className="section-title">
                    <h2 className="title">{title}</h2>
                  </div>
                  <div className="row mt--30 mt_sm--10">
                    <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                      <div className="about-us-list">
                        <h3 className="title">Goal</h3>
                        <p>
                          We aim to bring the Bulgarian students of Groningen
                          together
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                      <div className="about-us-list">
                        <h3 className="title">Environment</h3>
                        <p>
                          Creating a supportive, welcoming and stimulating
                          environment
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="row mt--30 mt_sm--10">
                    <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                      <div className="about-us-list">
                        <h3 className="title">Culture</h3>
                        <p>
                          We aim to nurture and develop the Bulgarian culture in
                          the city of Groningen
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                      <div className="about-us-list">
                        <h3 className="title">Representation</h3>
                        <p>
                          We aim to represent the Bulgarian culture in Groningen
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default AboutUs;
