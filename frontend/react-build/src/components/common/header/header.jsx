import React, { Component } from 'react'
import Image from 'react-bootstrap/Image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faJedi } from '@fortawesome/free-solid-svg-icons'
import LogoIMG from '../../../assets/imgs/magnus-logo.jpg'

class header extends Component {
    render() {
        return (
          <div className='container-fluid header-nav'>
            <div className="main_header">                
              <Image
                className="logo_img"
                src={LogoIMG}
                width={150}
                height={50}
              /><FontAwesomeIcon className="magnum_icon" icon={faJedi} size="1x"/>
            </div>
          </div>
        );
    }
}

export default header;