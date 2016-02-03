import React from 'react';
import DocMeta from 'react-doc-meta';
import DocTitle from 'components/docTitle';
import config from 'config';

import Debug from 'debug';
let debug = new Debug("views:main");

export default React.createClass({

    mixins: [
        require('react-intl').IntlMixin
    ],

    componentDidMount() {
        debug("componentDidMount");
    },

    render() {
        debug("render");

        return (
            <div>
                <DocTitle
                    title="Be independent"
                />

            <div className="block pb-50 app-block-intro">
                <div className="container text-center app-beavr-masthead">
                    <h1 className="masthead-title">
                        <span className="text-primary">{ this.getIntlMessage("mainLanding.masthead-greeting") }</span><br />
                        { this.getIntlMessage("mainLanding.masthead-claim-1") }
                        <br />
                        { this.getIntlMessage("mainLanding.masthead-claim-2") }
                    </h1>
                    <a href="https://beavr.typeform.com/to/uL8a0G">
                        <button className="btn btn-primary mt-30 btn-xl text-center m-5">{ this.getIntlMessage("mainLanding.button-cta") }</button>
                    </a>

                    <div className="masthead-scroll-arrow">
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="37" height="16" viewBox="0 0 37 16">
                                <path d="M19.075 15.43c-.35.366-.926.414-1.334.097L.76 2.08C.326 1.743.248 1.115.587.68.926.242 1.553.163 1.99.502L18.35 13.46 34.864.617c.436-.34 1.064-.26 1.403.175.34.436.26 1.065-.175 1.404L19.075 15.43z" fill="#CCD3DC" fill-rule="evenodd">
                                </path>
                            </svg>
                        </span>
                    </div>
                </div>
            </div>

            <div className="block block-lg app-block-profile">
                <div className="container">
                    <div className="row">
                        <div className="col-md-7 col-sm-6 text-xs-center text-sm-left">
                            <h1 className="block-title">{ this.getIntlMessage("mainLanding.showcase-your-beast") }</h1>
                            <h3 className="lead">
                                { this.getIntlMessage("mainLanding.beast-text") }
                            </h3>
                        </div>
                        <div className="col-md-5 col-sm-6">
                            <img className="img-responsive pull-right reset-margins-xs" src="../assets/img/seeker-profile-mirror.png" data-transition="entrance" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="block block-lg app-block-race-car">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-lg-push-6 col-sm-6 text-xs-center text-sm-left">
                            <h1 className="block-title">{ this.getIntlMessage("mainLanding.applications-fast-easy") }</h1>
                            <h3 className="lead">
                                { this.getIntlMessage("mainLanding.applications-text") }
                            </h3>
                        </div>
                        <div className="col-md-6 col-lg-pull-6 col-sm-6 text-xs-center text-sm-left">
                            <img className="img-responsive reset-margins-xs" src="../assets/img/seeker-race-car.png" data-transition="entrance" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="block block-lg app-block-truck">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-sm-6 text-xs-center text-sm-left">
                            <h1 className="block-title">{ this.getIntlMessage("mainLanding.element-of-fun") }</h1>
                            <h3 className="lead">
                                { this.getIntlMessage("mainLanding.element-of-fun-text") }
                            </h3>
                        </div>
                        <div className="col-md-6 col-sm-6 pull-xs-right">
                            <img className="img-responsive pull-right reset-margins-xs" src="../assets/img/employer-ice-cream-truck.png" data-transition="entrance" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="block block-lg app-block-chat">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-lg-push-6 col-sm-6 text-xs-center text-sm-left">
                             <h1 className="block-title">{ this.getIntlMessage("mainLanding.seamless-communication") }</h1>
                            <h3 className="lead">
                                { this.getIntlMessage("mainLanding.seamless-communication-text") }
                            </h3>
                        </div>
                        <div className="col-md-6 col-lg-pull-6 col-sm-6 text-xs-center text-sm-right">
                            <img className="img-responsive pull-left reset-margins-xs" src="../assets/img/seeker-chat.png" data-transition="entrance" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="block block-lg app-block-giraffe">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-sm-6 text-xs-center text-sm-left">
                            <h1 className="block-title">{ this.getIntlMessage("mainLanding.enjoy-life") }</h1>
                            <h3 className="lead">
                                { this.getIntlMessage("mainLanding.enjoy-life-text") }
                            </h3>
                        </div>
                        <div className="col-md-6 col-sm-6">
                            <img className="img-responsive pull-right reset-margins-xs" src="../assets/img/seeker-giraffe.png" data-transition="entrance" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="block block-lg app-block-pool pt-30 pb-50 full-width">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-sm-6 text-right">
                            <img className="img-responsive hidden-xs pull-left reset-margins-xs" src="../assets/img/beavr-pool.png" data-transition="entrance" />
                        </div>
                        <div className="col-md-6 col-sm-6 text-center">
                            <hr />
                            <hr />
                            <h1 className="block-title">Join our Beavr Pool!</h1>
                            <hr />
                            <h2>
                                We are working closely with comapanies in Vienna, Berlin, Munich and Warsaw to get
                                you the best short term jobs. Join the the Beavr Pool and set up your account right now.
                                Takes only a minute. Promise.
                            </h2>
                            <hr />
                            <a href="https://beavr.typeform.com/to/uL8a0G">
                                <button className="btn btn-primary btn-xl text-center m-5">Get started</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <DocMeta tags={ this.tags() } />
            </div>
        );
    },

    tags() {
        let description = config.description;

        return [
            {name: 'description', content: description},
            {name: 'twitter:card', content: description},
            {name: 'twitter:title', content: description},
            {property: 'og:title', content: description}
        ];
    }


} );
