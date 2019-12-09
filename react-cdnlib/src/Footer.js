import React, { Component } from 'react'

class Footer extends Component {
    render() {
        return (
            <div>
                <div className="bar">
                </div>
                <div className="footerMenu">
                    <div className="container">
                        <div className="row">
                            <div className="col-fm-2">
                                <ul>
                                    <li className="title">Performance & Reliability</li>
                                    <li><a href="">CDN</a></li>
                                    <li><a href="/">Cloud Security</a></li>
                                    <li><a href="/">Cloud DNS</a></li>
                                </ul>
                            </div>
                            <div className="col-fm-2">
                                <ul>
                                    <li className="title">Media Services</li>
                                    <li><a href="/">Video Platform</a></li>
                                    <li><a href="/">Video Adverstisment</a></li>
                                    <li><a href="/">Live Streaming</a></li>
                                </ul>
                            </div>
                            <div className="col-fm-2">
                                <ul>
                                    <li className="title">Cloud Computing Services</li>
                                    <li><a href="/">Cloud Computing</a></li>
                                </ul>
                            </div>
                            <div className="col-fm-2">
                                <ul>
                                    <li className="title">ArvanCloud</li>
                                    <li><a href="/">About ArvanCloud</a></li>
                                    <li><a href="/">Our Vision</a></li>
                                </ul>
                            </div>
                            <div className="col-fm-2">
                                <ul>
                                    <li className="title">Users</li>
                                    <li><a href="/">Terms of Service</a></li>
                                    <li><a href="/">Service Level Agreement (SLA)</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="logoFooter">
                                    <img src="https://blog.arvancloud.com/wp-content/themes/ar-circle-en/assets/img/icons/logo-typo.svg" alt="Logo Footer" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="socialFooter">
                                    <ul>
                                        <li><a href="/">
                                            <img src="https://blog.arvancloud.com/wp-content/themes/ar-circle-en/assets/img/icons/telegram.svg" />
                                        </a></li>
                                        <li><a href="/">
                                            <img src="https://blog.arvancloud.com/wp-content/themes/ar-circle-en/assets/img/icons/linkedin.svg" />
                                        </a></li>
                                        <li><a href="/">
                                            <img src="https://blog.arvancloud.com/wp-content/themes/ar-circle-en/assets/img/icons/twitter.svg" />
                                        </a></li>
                                        <li><a href="/">
                                            <img src="https://blog.arvancloud.com/wp-content/themes/ar-circle-en/assets/img/icons/instagram.svg" />
                                        </a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="row footer__address-row">
                            <div className="col-12 col-md-6 footer__info-col">
                                <div className="footer__info">
                                    <div className="footer__info__row">
                                        <div className="footer__info__icon">
                                            <img src="https://blog.arvancloud.com/wp-content/themes/ar-circle-en/assets/img/icons/address.svg" />
                                        </div>
                                        <div className="footer__info__text">
                                            Softqloud GmbH, Hegelstr. 3, 40667 Meerbusch
                                        </div>
                                    </div>
                                    <div className="footer__info__row">
                                        <div className="footer__info__icon">
                                            <img src="https://blog.arvancloud.com/wp-content/themes/ar-circle-en/assets/img/icons/support.svg" />
                                        </div>
                                        <div className="footer__info__email">
                                            <img src="https://blog.arvancloud.com/wp-content/themes/ar-circle-en/assets/img/support-at-arvancloud.svg" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 footer__social-col">
                                <form action="https://arvancloud.us19.list-manage.com/subscribe/post?u=46432acdf60b32fd027c5c0ac&amp;id=4e1643c49e" id="nwsl_form" method="post" name="nwsl-form" className="validate" target="_blank" novalidate="">
                                    <div className="footer__nwsl">
                                        <input type="email" name="EMAIL" id="nwsl_email" placeholder="Enter your Email" className="footer__nwsl__input" />
                                        <input name="email" type="submit" value="Join" id="nwsl_btn" className="footer__nwsl__btn" />
                                    </div>
                                    <div className="field-group nwsl-name">
                                        <input type="text" name="NAME" className="" value="arvan_circle" id="nwsl-name" />
                                    </div>
                                    <div className="formPopUp" aria-hidden="true">
                                        <input type="text" name="b_46432acdf60b32fd027c5c0ac_4e1643c49e" tabindex="-1" value="" />
                                        <input type="text" name="SRC" value="popup" />
                                    </div>
                                </form>
                        </div>
                    </div>
                </div>
            </div>
            </div >
        )
    }
}

export default Footer