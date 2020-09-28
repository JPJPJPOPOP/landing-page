import React, { Component } from 'react'
import showcase1 from './showcase1.jpg';

export default class Showcase extends Component {
    render() {
        return (
            <div className="sidetext-container">
                <div className="sidetext">
                    <div className="sidetext-inner">
                        <div className="sidetext-title">Fully Responsive Design</div>
                        When you use a theme created by Start Bootstrap,
                        you know that the theme will look great on any device,
                        whether it's a phone, tablet, or desktop the page will behave responsively!
                    </div>
                </div>
                <img className="sideimg" src={showcase1} alt="showcase1"/>
                <img className="sideimg" src={showcase1} alt="showcase1"/>
                <div className="sidetext">
                    <div className="sidetext-inner">
                        <div className="sidetext-title">Updated For Bootstrap 4</div>
                        Newly improved, and full of great utility classes,
                        Bootstrap 4 is leading the wayin mobile responsive web development!
                        All of the themes on Start Bootstrap are now using Bootstrap 4!
                    </div>
                </div>
                <div className="sidetext">
                    <div className="sidetext-inner">
                        <div className="sidetext-title">Easy to Use & Customize</div>
                        Landing Page is just HTML and CSS with a splash of SCSS for users
                        who demand some deeper customization options. Out of the box,
                        just add your content and images, and your new landing page will be ready to go!
                    </div>
                </div>
                <img className="sideimg" src={showcase1} alt="showcase1"/>
            </div>
        );
    }
}