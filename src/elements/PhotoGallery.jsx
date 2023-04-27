import React from "react";
import ImageFb from "./ui/ImageFb";

//works only with webp and jpg pair images
const PhotoGallery = (props) => {
  if (props.target.length > 0) {
    return (
      <div className="container mt--80 mb--80">
        <div className="row">
          <div className="col-lg-12">
            <div className="mb--30 mb_sm--0">
              <h2 className="title">Photo Gallery</h2>
            </div>
          </div>
        </div>
        <div className="row">
          {props.target.map((event, index) => {
            return (
              <div key={index} className="col-lg-6 col-md-6 col-12">
                <div className="mb--30 mb_sm--0 center_section">
                  <ImageFb
                    className={
                      index % 2 !== 0
                        ? "team_member_border-3 mb--20"
                        : "team_member_border-4 mb--20"
                    }
                    src={`/assets/images/events/${event.image}.webp`}
                    fallback={`/assets/images/events/${event.image}.jpg`}
                    alt="Blog Images"
                  />
                  {event.text && (
                    <p style={{ fontStyle: "italic" }}>{`"${event.text}"`}</p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
        <div className="row">
          <div className="col-lg-12">
            <a
              href="https://flickr.com/photos/197725983@N03/albums"
              target="_blank"
              className="rn-button-style--2 btn-solid"
            >
              Check our Flickr for more
            </a>
          </div>
        </div>
      </div>
    );
  }
};

export default PhotoGallery;
