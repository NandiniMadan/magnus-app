import React, { Component } from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Image from 'react-bootstrap/Image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCamera, faPen, faUserAlt, faCog, faIdCard, faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import Picture from '../../../assets/imgs/client1.jpeg'

import './about.scss'

export default class aboutClient extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedPanel: ''
        }
    }

    selectSection(e) {
        console.log(e.target.name);
    }

    render() {
        return (
          <div>
            <Jumbotron className="panel_about_client">
              <div className="image_section">
                <Image
                  className="profile_img"
                  src={Picture}
                  width={200}
                  height={200}
                  roundedCircle
                />
                <span className="img_info_text">Choose Profile Picture</span>
                <div className="icons_row">
                  <FontAwesomeIcon
                    className="profile_pic_icon"
                    icon={faPen}
                    size="2x"
                  />
                  <FontAwesomeIcon
                    className="profile_pic_icon"
                    icon={faCamera}
                    size="2x"
                  />
                </div>
              </div>
              <div className="details_section">
                <button
                  className="nav_panel_button"
                  name="account_inf0"
                  onClick={(e) => this.selectSection()}
                >
                 <FontAwesomeIcon className="details_icons" icon={faIdCard} size="xs"/>&nbsp;
                  Account Information
                </button>
                <button
                  className="nav_panel_button"
                  name="personal_info"
                  onClick={(e) => this.selectSection()}
                >
                  <FontAwesomeIcon className="details_icons" icon={faUserAlt} size="xs"/>&nbsp;
                  Personal Details
                </button>
                <button
                  className="nav_panel_button"
                  name="profile_info"
                  onClick={(e) => this.selectSection()}
                >
                  <FontAwesomeIcon className="details_icons" icon={faPlusCircle} size="xs"/>&nbsp;
                  Add/Edit Profile Feeds
                </button>
                <button
                  className="nav_panel_button"
                  name="account_settings"
                  onClick={(e) => this.selectSection()}
                >
                  <FontAwesomeIcon className="details_icons" icon={faCog} size="xs"/>&nbsp;
                  Account Settings
                </button>
              </div>
            </Jumbotron>
          </div>
        );
    }
}
