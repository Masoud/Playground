import React, { Component } from 'react'

class Favorites extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="favorits">
                        <div className="title">
                            <h2>Favorite JavaScript Libraries</h2>
                        </div>
                        <table>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Link</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>angular-formly-material</td>
                                    <td>http://cdnlib.net/ar/angular-formly-material/0.9.0/formly-material.min.js</td>
                                </tr>
                                <tr>
                                    <td>styled-components</td>
                                    <td>http://cdnlib.net/ar/styled-components/5.0.0-beta.8/styled-components.browser.cjs.min.js</td>
                                </tr>
                                <tr>
                                    <td>sticky-kit</td>
                                    <td>http://cdnlib.net/ar/sticky-kit/1.1.3/sticky-kit.min.js</td>
                                </tr>
                                <tr>
                                    <td>Vue.Draggable</td>
                                    <td>http://cdnlib.net/ar/Vue.Draggable/2.9.0/vuedraggable.min.js</td>
                                </tr>
                                <tr>
                                    <td>darkroomjs</td>
                                    <td>http://cdnlib.net/ar/darkroomjs/2.0.1/darkroom.css</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

export default Favorites