import React from 'react'

import PropTypes from 'prop-types'

const LinkIconButton = (props) => {
  return (
    <>
      <div className="link-icon-button-container">
        <button className="link-icon-button-button button">
          <span className="mediumLabel">{props.text}</span>
          <svg viewBox="0 0 1024 1024" className="link-icon-button-icon">
            <path d="M481.835 243.499l225.835 225.835h-494.336c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667h494.336l-225.835 225.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l298.667-298.667c3.925-3.925 7.083-8.619 9.259-13.824 4.309-10.453 4.309-22.229 0-32.683-2.091-5.035-5.163-9.728-9.259-13.824l-298.667-298.667c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331z"></path>
          </svg>
        </button>
      </div>
      <style jsx>
        {`
          .link-icon-button-container {
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .link-icon-button-button {
            color: var(--dl-color-purple-default);
            display: flex;
            transition: 0.3s;
            align-items: center;
            border-width: 0px;
            padding-left: 0px;
            padding-right: 0px;
            flex-direction: row;
          }
          .link-icon-button-icon {
            fill: var(--dl-color-purple-default);
            width: 20px;
            align-self: center;
          }
        `}
      </style>
    </>
  )
}

LinkIconButton.defaultProps = {
  text: 'Button',
}

LinkIconButton.propTypes = {
  text: PropTypes.string,
}

export default LinkIconButton
