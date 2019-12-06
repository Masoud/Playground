import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import './index.css';

class App extends Component {
    render() {
        const navigation = [
            { name: 'Products', link: 'https://google.com' },
            { name: 'Support', link: 'google.com' },
            { name: 'Blog', link: 'google.com' },
            { name: 'Pricing', link: 'google.com' },
        ];
        const logo = ['https://blog.arvancloud.com/wp-content/themes/ar-circle-en/assets/img/logo-w.svg']
        const lang = ['fa'];

        return (
            <div className="menu_bg_arvan">
                <div className="container">
                    <div className="row">
                        <div className="col-md-10">
                            <div className="logo"><img src={logo}></img></div>
                            <div className="nav">
                                <ul>
                                    {navigation.map((row, index) => (
                                        <li key={index}><a href={row.link}>{row.name}</a></li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <div className="changeLang"><a href={lang}>{lang}</a></div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="big_title">
                            <h1>ArvanCloud Library</h1>
                            <h2>CSS Libraries, JavaScript Libraries <br/> and Fonts on CDN</h2></div>
                    </div>
                </div>
            </div>
        )
    }
}
ReactDOM.render(<App />, document.getElementById('root'))
