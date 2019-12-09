import React, { Component } from 'react'

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = { search: '' };

        this.SearchIT = this.SearchIT.bind(this);
    }

    state= {
        search: '',
        typing: false,
        typingTimeout: 0
    }
    SearchIT(event) {
        const self = this;

        if (self.state.typingTimeout) {
            clearTimeout(self.state.typingTimeout);
        }

        self.setState({
            search: event.target.value,
            typing: false,
            typingTimeout: setTimeout(function () {
                self.afterSetStateFinished();
            }, 1500)
        });
    }



    afterSetStateFinished() {
        alert('hi');
    }

    render() {
        return (
            <div className="row">
                <form className="search_body">
                    <input className="search_tx" type="text" placeholder="Search Any Libraries ..."
                        value={this.state.value}
                        onKeyDown={this.SearchIT}
                    />
                    <button className="icon-search" value=" " type="submit"></button>
                </form>
            </div>
        )
    }
}

export default Search