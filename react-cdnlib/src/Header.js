import React, { Component } from 'react'
import Topnavigation from './Navigation'
import Titles from './Titles'
import Search from './Search'

class Header extends Component {
    constructor(props) {
        super(props);
    }
    showSearchResult = (value) => {
        this.setState(state => ({ message: value }));
        this.props.searchFor(this.state.message);
    }
    
render() {
    const sendProps = {
        showSearchResult: this.props.showSearchResult,
        searchingFor: this.showSearchResult,
    };
    return (
        <div className="menu_bg_arvan">
            <div className="container">
                <Topnavigation />
                <Titles />
                <Search toggleShow={sendProps} />
            </div>
        </div>
    )
}
}
export default Header