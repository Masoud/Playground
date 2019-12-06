import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import './index.css';

class App extends Component {
    render() {
        const navigation = [
            {name:'alligator', link:'https://google.com'},
            {name:'salam', link:'google.com'},
            {name:'bye', link:'google.com'},
        ];

        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-2">
                        <div className="logo"></div>
                    </div>
                    <div className="col-md-8">
                        <div className="nav">
                            <ul>
                                {navigation.map((row, index) => (
                                    <li key={index}><a href={row.link}>{row.name}</a></li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
ReactDOM.render(<App />, document.getElementById('root'))
