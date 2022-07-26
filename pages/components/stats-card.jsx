import React from 'react'

import PropTypes from 'prop-types'

const StatsCard = (props) => {
  return (
    <>
      <div className="stats-card-container">
        <img
          alt={props.image_alt}
          src={props.image_src}
          className="stats-card-image"
        />
        <div className="stats-card-container1">
          <h1 className="headline4">{props.number}</h1>
          <span className="body1">{props.description}</span>
        </div>
      </div>
      <style jsx>
        {`
          .stats-card-container {
            width: 200px;
            margin: var(--dl-space-space-unit);
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: row;
          }
          .stats-card-image {
            width: 32px;
            object-fit: cover;
            margin-right: var(--dl-space-space-unit);
          }
          .stats-card-container1 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
        `}
      </style>
    </>
  )
}

StatsCard.defaultProps = {
  number: '10',
  image_src: 'https://play.teleporthq.io/static/svg/placeholders/no-image.svg',
  description: 'Description',
  image_alt: 'image',
}

StatsCard.propTypes = {
  number: PropTypes.string,
  image_src: PropTypes.string,
  description: PropTypes.string,
  image_alt: PropTypes.string,
}

export default StatsCard
