import React, { Component } from 'react'
import Topnavigation from './Navigation'
import Titles from './Titles'
import Search from './Search'

class Header extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const greeting = 'Welcome to React';
        return (
            <div className="menu_bg_arvan">
                <div className="container">
                    <Topnavigation />
                    <Titles />
                    <Search toggleShow={this.props.showSearchResult}/>
                </div>
            </div>
        )
    }
}

export default Header