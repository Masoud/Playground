import React, { Component } from 'react'
import Topnavigation from './Navigation'
import Titles from './Titles'
import Search from './Search'

class App extends Component {
    render() {
        return (
            <div className="menu_bg_arvan">
                <div className="container">
                    <Topnavigation />
                    <Titles />
                    <Search />
                </div>
            </div>
        )
    }
}

export default App