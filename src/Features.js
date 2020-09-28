import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDesktop, faLayerGroup, faCheckCircle } from '@fortawesome/free-solid-svg-icons'

export default class Features extends Component {
  render() {
    return (
      <div className="icon-container">
        <div className="icon-centered">
          <div className="icon-section">
            <div className="icon">
              <FontAwesomeIcon icon={faDesktop} />
            </div>
            <div className="icon-title">Fully Responsive</div>
            <div>This theme will look great on any device, no matter the size!</div>
          </div>
          <div className="icon-section">
            <div className="icon">
              <FontAwesomeIcon icon={faLayerGroup} />
            </div>
            <div className="icon-title"> Bootstrap 4 Ready</div>
            <div>Featuring the latest build of the new Bootstrap 4 framework!</div>
          </div>
          <div className="icon-section">
            <div className="icon">
              <FontAwesomeIcon icon={faCheckCircle} />
            </div>
            <div className="icon-title">Easy to Use</div>
            <div>Ready to use with your own content, or customize the source files!</div>
          </div>
        </div>
      </div>
    );
  }
}