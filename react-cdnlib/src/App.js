import React, { Component } from 'react'
import Header from './Header'
import Favorites from './Favorites'
import Footer from './Footer'


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {isSearching: false};
    }
    render() {
        const isSearching = this.state.isSearching;
        let favorits;
        if (!isSearching) {
            favorits=<Favorites />
        }
        return (
            <div>
                <Header />
                {favorits}
                <Footer />
            </div>
        )
    }
}

export default App