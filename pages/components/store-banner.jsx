import React from 'react'

import PropTypes from 'prop-types'

const StoreBanner = (props) => {
  return (
    <>
      <div className="store-banner-store-banner">
        <img
          alt={props.image_alt1}
          src={props.image_src1}
          className="store-banner-image"
        />
        <img
          alt={props.image_alt}
          src={props.image_src}
          className="store-banner-image1"
        />
      </div>
      <style jsx>
        {`
          .store-banner-store-banner {
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .store-banner-image {
            width: 135px;
            object-fit: cover;
          }
          .store-banner-image1 {
            width: 135px;
            object-fit: cover;
            margin-left: var(--dl-space-space-halfunit);
          }
        `}
      </style>
    </>
  )
}

StoreBanner.defaultProps = {
  image_src: 'https://play.teleporthq.io/static/svg/placeholders/no-image.svg',
  image_alt1: 'image',
  image_src1: 'https://play.teleporthq.io/static/svg/placeholders/no-image.svg',
  image_alt: 'image',
}

StoreBanner.propTypes = {
  image_src: PropTypes.string,
  image_alt1: PropTypes.string,
  image_src1: PropTypes.string,
  image_alt: PropTypes.string,
}

export default StoreBanner
