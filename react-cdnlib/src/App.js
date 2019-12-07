import React, { Component } from 'react'
import Header from './Header'
import Favorites from './Favorites'

class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <Favorites />
            </div>
        )
    }
}

export default App