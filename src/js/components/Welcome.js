import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Welcome extends Component{
    render() {
        return (
            <div>
                <h1 className="title">Welcome to Flippy</h1>
                <p>Begin flipping through your flash cards by clicking the button below.</p>
                <Link to="/study">
                    <input type="submit" name="name"
                       className="startStudying" value="START STUDYING"
                       />
                </Link>
            </div>
        );
    }
}
