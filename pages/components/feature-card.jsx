import React from "react";
import Image from "next/image";

import PropTypes from "prop-types";

const FeatureCard = (props) => {
  return (
    <>
      <div className="feature-card-container">
          <Image
            width={auto}
            height={auto}
            alt={props.image_alt}
            src={props.image_src}
            className="feature-card-image"
          />
        <h5 className="feature-card-text headline5">{props.title}</h5>
        <span className="feature-card-text1">{props.text}</span>
      </div>
      <style jsx>
        {`
          .feature-card-container {
            width: 320px;
            margin: var(--dl-space-space-halfunit);
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            color: none;
          }
          .feature-card-image {
            color: #fff;
            width: var(--dl-size-size-doubleunit);
            height: var(--dl-size-size-doubleunit);
            object-fit: cover;
            fill: white;
          }
          .feature-card-text {
            margin-top: var(--dl-space-space-unit);
            margin-bottom: var(--dl-space-space-unit);
          }
          .feature-card-text1 {
            text-align: center;
          }
        `}
      </style>
    </>
  );
};

FeatureCard.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  image_src: PropTypes.string,
  image_alt: PropTypes.string,
};

export default FeatureCard;
