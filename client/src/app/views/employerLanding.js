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
                    title="For Employers"
                />

            <div className="block pb-50 app-block-intro">
                <div className="container text-center app-beavr-masthead">
                    <h1 className="masthead-title">
                        <span className="text-primary">{ this.getIntlMessage("employerLanding.masthead-greeting") }</span><br />
                        { this.getIntlMessage("employerLanding.masthead-claim-1") }
                        <br />
                        { this.getIntlMessage("employerLanding.masthead-claim-2") }
                    </h1>
                    <a href="https://beavr.typeform.com/to/n7Yjw8">
                        <button className="btn btn-primary btn-xl mt-30 text-center ">{ this.getIntlMessage("employerLanding.button-cta") }</button>
                    </a>

                    <div className="masthead-scroll-arrow hidden-xs">
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
                        <div className="col-md-6 col-sm-6 text-xs-center text-sm-left">
                            <h1 className="block-title">{ this.getIntlMessage("employerLanding.stop-cv-nightmare") }</h1>
                            <h3 className="lead">
                                { this.getIntlMessage("employerLanding.stop-cv-nightmare-text") }
                            </h3>
                        </div>
                        <div className="col-md-6 col-sm-6 text-right">
                            <img className="img-responsive reset-margins-xs pull-right" src="../assets/img/employer-drowning.png" data-transition="entrance" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="block block-lg app-block-chat">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-lg-push-6 col-sm-6 text-xs-center text-sm-left">
                            <h1 className="block-title">{ this.getIntlMessage("employerLanding.everything-in-one-place") }</h1>
                            <h3 className="lead">
                                { this.getIntlMessage("employerLanding.everything-in-one-place-text") }
                            </h3>
                        </div>
                        <div className="col-md-6 col-lg-pull-6 col-sm-6 text-xs-center text-sm-left">
                            <img className="img-responsive reset-margins-xs pull-left" src="../assets/img/employer-desk.png" data-transition="entrance" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="block block-lg app-block-employer-picker">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-sm-6 text-xs-center text-sm-left">
                            <h1 className="block-title">{ this.getIntlMessage("employerLanding.pick-the-one") }</h1>
                            <h3 className="lead">
                                { this.getIntlMessage("employerLanding.pick-the-one-text") }
                            </h3>
                        </div>
                        <div className="col-md-6 col-sm-6 text-right">
                            <img className="img-responsive reset-margins-xs pull-right" src="../assets/img/employer-picker.png" data-transition="entrance" />
                        </div>
                    </div>
                </div>
            </div>

            <div id="#signup" className="block block-lg app-block-piggy-bank full-width">
                <div className="container">
                    <div className="row pb-30 pt-30">
                        <div className="col-md-7 col-sm-6 text-xs-center text-sm-left">
                            <img className="img-responsive pull-left reset-margins-xs mb-30" src="../assets/img/employer-piggy-bank.png" data-transition="entrance" />
                        </div>
                        <div className="col-md-5 col-sm-6 text-center">
                            <h1 className="block-title">{ this.getIntlMessage("employerLanding.save-time-and-money") }</h1>
                            <hr />
                            <h2>
                                { this.getIntlMessage("employerLanding.save-time-and-money-text") }
                            </h2>
                            <hr />
                            <hr />
                            <a href="https://beavr.typeform.com/to/n7Yjw8">
                                <button className="btn btn-primary btn-xl text-center ">{ this.getIntlMessage("employerLanding.button-cta") }</button>
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
