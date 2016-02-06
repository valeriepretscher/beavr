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

            <div className="block app-block-intro-index full-width">
                <div className="container text-center app-beavr-masthead">
                    <h1 className="masthead-title">
                        <span className="text-primary">{ this.getIntlMessage("mainLanding.masthead-greeting") }</span><br />
                        { this.getIntlMessage("mainLanding.masthead-claim-1") }
                        <br />
                        { this.getIntlMessage("mainLanding.masthead-claim-2") }
                    </h1>
                    <a className="hidden visible-md visible-lg visible-xl" href="/register-employee">
                        <button className="btn btn-primary mt-30 btn-xl text-center m-5">{ this.getIntlMessage("mainLanding.button-cta") }</button>
                    </a>
                    <a className="hidden visible-xs visible-sm" href={this.getIntlMessage('typeformLinks.employee') }>
                        <button className="btn btn-primary mt-30 btn-xl text-center m-5">{ this.getIntlMessage("mainLanding.button-cta") }</button>
                    </a>
                </div>
            </div>

            <div className="block pt-0 pb-10 hidden visible-xs">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-sm-6 text-center">
                            <h4>{this.getIntlMessage('mainLanding.are-you-hiring') }</h4>
                            <a href="/employers">
                                <button className="btn btn-primary btn-xl text-center btn-default-outline">{ this.getIntlMessage('mainLanding.button-business') }</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="block block-lg app-block-profile">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-sm-6 text-xs-center text-sm-left">
                            <h1 className="block-title">{ this.getIntlMessage("mainLanding.showcase-your-beast") }</h1>
                            <h3 className="lead">
                                { this.getIntlMessage("mainLanding.beast-text") }
                            </h3>
                        </div>
                        <div className="col-md-6 col-sm-6">
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
                            <h1 className="block-title">{ this.getIntlMessage("mainLanding.seamless-communication") }</h1>
                            <h3 className="lead">
                                { this.getIntlMessage("mainLanding.seamless-communication-text") }
                            </h3>
                        </div>
                        <div className="col-md-6 col-sm-6 pull-xs-right">
                            <img className="img-responsive pull-right reset-margins-xs" src="../assets/img/seeker-chat.png" data-transition="entrance" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="block block-lg app-block-chat">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-lg-push-6 col-sm-6 text-xs-center text-sm-left">
                            <h1 className="block-title">{ this.getIntlMessage("mainLanding.element-of-fun") }</h1>
                            <h3 className="lead">
                                { this.getIntlMessage("mainLanding.element-of-fun-text") }
                            </h3>
                        </div>
                        <div className="col-md-6 col-lg-pull-6 col-sm-6 text-xs-center text-sm-right">
                            <img className="img-responsive pull-left reset-margins-xs" src="../assets/img/employer-ice-cream-truck.png" data-transition="entrance" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="block block-lg app-block-giraffe">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-sm-6 text-xs-center text-sm-left m-t-lg reset-margins-xs">
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

            <div id="#signup" className="block block-lg app-block-pool pt-10 pb-50 full-width">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-sm-6 text-right">
                            <img className="img-responsive hidden-xs pull-left reset-margins-xs" src="../assets/img/beavr-pool.png" data-transition="entrance" />
                        </div>
                        <div className="col-md-6 col-sm-6 text-center pt-30">
                            <h1 className="block-title pt-30">{ this.getIntlMessage("mainLanding.beavr-pool") }</h1>
                            <h2>
                                { this.getIntlMessage("mainLanding.beavr-pool-text") }
                            </h2>
                            <a className="hidden visible-md visible-lg visible-xl" href="/register-employee">
                                <button className="btn btn-primary mt-30 btn-xl text-center m-5">{ this.getIntlMessage("mainLanding.button-cta") }</button>
                            </a>
                            <a className="hidden visible-xs visible-sm" href={this.getIntlMessage('typeformLinks.employee') }>
                                <button className="btn btn-primary mt-30 btn-xl text-center m-5">{ this.getIntlMessage("mainLanding.button-cta") }</button>
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
