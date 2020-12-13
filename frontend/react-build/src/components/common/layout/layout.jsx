import React, { Component } from 'react'
import './layout.scss';
import Body from '../body/body'
import Header from '../header/header'

export default class layout extends Component {
    render() {
        return (
            <>
                <div className='main_layout_canvas'>
                    <Header />
                    <Body />
                </div>
                
            </>
        )
    }
}
