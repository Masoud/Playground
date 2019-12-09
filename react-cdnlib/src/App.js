import React, { Component } from 'react'
import Header from './Header'
import Favorites from './Favorites'
import Searchresults from './Searchresults'
import Footer from './Footer'


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isSearching: false,
        };
    }
    showSearchResult = () => {
        this.setState(state => ({ isSearching: true }));
    };
    hideSearchResult = () => {
        this.setState(state => ({ isSearching: false }));
    };
    render() {
        const isSearching = this.state.isSearching;
        const Results={
            show: this.showSearchResult,
            hide: this.hideSearchResult
        }
        let favorits;
        let searchResult;
        if (!isSearching) {
            favorits = <Favorites />
        } else {
            searchResult = <Searchresults />
        }
        return (
            <div>
                <Header showSearchResult={Results} />
                    { favorits }
                {searchResult}
                <Footer />
            </div>
        )
    }
}

export default App