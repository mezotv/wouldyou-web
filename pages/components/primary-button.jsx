import React from 'react'

import PropTypes from 'prop-types'

const PrimaryButton = (props) => {
  return (
    <>
      <div className={`primary-button-container ${props.rootClassName} `}>
        <button className="primary-button-button mediumLabel button">
          {props.button}
        </button>
      </div>
      <style jsx>
        {`
          .primary-button-container {
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .primary-button-button {
            color: var(--dl-color-gray-white);
            align-self: center;
            transition: 0.3s;
            padding-top: 12px;
            border-width: 0px;
            padding-left: 32px;
            border-radius: var(--dl-radius-radius-radius8);
            padding-right: 32px;
            padding-bottom: 12px;
            background-color: #0498f7;
            border-top-left-radius: Radius 20;
            border-top-right-radius: Radius 20;
            border-bottom-left-radius: Radius 20;
            border-bottom-right-radius: Radius 20;
          }
          .primary-button-button:hover {
            background-color: #f10404;
          }
          .primary-button-button:active {
            background-color: #ff0000;
          }
        `}
      </style>
    </>
  )
}

PrimaryButton.defaultProps = {
  rootClassName: '',
  button: 'Button',
}

PrimaryButton.propTypes = {
  rootClassName: PropTypes.string,
  button: PropTypes.string,
}

export default PrimaryButton
