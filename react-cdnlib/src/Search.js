import React, { Component } from 'react'

class Search extends Component {
    render() {
        return (
            <div className="row">
                <form className="search_body" action="/" method="get">
                    <input className="search_tx" type="text" name="s" placeholder="Search Any Libraries ..." />
                    <button className="icon-search" value=" " type="submit"></button>
                </form>
            </div>
        )
    }
}

export default Search