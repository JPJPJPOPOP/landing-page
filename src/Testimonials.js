import React, { Component } from 'react'
import testimonials1 from './testimonials1.jpg';

export default class Testimonials extends Component {
    render() {
        return (
            <div className="test-container">
                <div>
                    <div className="test-title">What people are saying...</div>
                    <div>
                        <div className="test-group">
                            <img className="test-img" src={testimonials1} alt="test1"></img>
                            <div className="test-name">Margaret E.</div>
                            <div>"This is fantastic! Thanks so much guys!"</div>
                        </div>
                        <div className="test-group">
                            <img className="test-img" src={testimonials1} alt="test1"></img>
                            <div className="test-name">Fred S.</div>
                            <div>"Bootstrap is amazing. I've been using it to create lots of super nice landing pages."</div>
                        </div>
                        <div className="test-group">
                            <img className="test-img" src={testimonials1} alt="test1"></img>
                            <div className="test-name">Sarah W.</div>
                            <div>"Thanks so much for making these free resources available to us!"</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}