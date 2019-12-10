import React, { Component } from 'react'
const axios = require('axios');

class Searchresults extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: [],
            searchResults: [],
        };
    }

    componentDidMount() {
        axios.get('https://reqres.in/api/users')
            .then(response => {
                // handle success
                const searchResults = response.data.data;
                this.setState({ searchResults });
                // console.log(searchResults);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .finally(function () {
                // always executed
            });
    }
    render() {
        console.log(this.props.searching);
        return (
            <div className="container">
                <div className="row">
                    <div className="favorits">
                        <div className="section">
                            <div className="title">
                                <h2>You Search about: {this.props.searching}</h2>
                                <a href="/">See All</a>
                            </div>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Link</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.searchResults.map((row, index) => (
                                        <tr>
                                            <td>{row.last_name}</td>
                                            <td>{row.first_name}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Searchresults