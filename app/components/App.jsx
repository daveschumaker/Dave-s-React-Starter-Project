import React from 'react';
import Note from './Note.jsx';

import image from '../images/1f61c.png'

export default class App extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="four columns">
                        <img src={image} />
                    </div>
                    <div className="eight columns"><Note /></div>
                </div>
            </div>
        )
    }
}
