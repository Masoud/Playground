import React, { Component } from 'react'
import Topnavigation from './Navigation'
import Titles from './Titles'
import Search from './Search'

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isShow: true,
        };
    }
    toggleShow = () => {
        this.setState(state => ({ isShow: !state.isShow }));
    };
    render() {
        const greeting = 'Welcome to React';
        return (
            <div className="menu_bg_arvan">
                <div className="container">
                    <Topnavigation />
                    {this.state.isShow ? <Titles /> : null}
                    {/* <Titles /> */}

                    <Search toggleShow={this.toggleShow}/>
                </div>
            </div>
        )
    }
}

export default Header