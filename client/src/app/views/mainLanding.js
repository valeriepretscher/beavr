import React from 'react';
import DocMeta from 'react-doc-meta';
import DocTitle from 'components/docTitle';
import config from 'config';

import Debug from 'debug';
let debug = new Debug("views:main");

export default React.createClass({

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
                <div className="container text-center">
                    <h1 className="block-title app-myphone-brand">be independent.</h1>
                    <p className="lead">In every job that must be done, there is an element of fun.</p>
                    <img src="../assets/img/beavr-masthead-figures.png" />
                </div>
            </div>

            <div className="block block-lg pt-30 app-block-stats">
                <div className="container">
                    <h1 className="block-title pb-50 text-center">showcase your inner beast</h1>
                    <div className="row">
                        <div className="col-md-7 col-sm-6 text-center">
                            <img src="../assets/img/seeker-profile-mirror.png" data-transition="entrance" />
                            <hr className="m-t-0 m-b-lg m-x-auto visible-xs" />
                        </div>
                        <div className="col-md-5 col-sm-6 text-xs-center text-sm-left">
                            <div className="row m-y-md">
                                <div className="col-xs-6">
                                    <div className="statcard">
                                        <h2 className="statcard-number block-title">create</h2>
                                        <p className="lead">your profile with a few clicks.</p>
                                    </div>
                                </div>
                                <div className="col-xs-6">
                                    <div className="statcard">
                                        <h2 className="statcard-number">show</h2>
                                        <p className="lead">employers what you've truly got.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row hidden-sm">
                                <div className="col-xs-6 m-b-lg">
                                    <div className="statcard">
                                        <h2 className="statcard-number block-title">collect</h2>
                                        <p className="lead">all the information employers need in one place.</p>
                                    </div>
                                </div>
                                <div className="col-xs-6 m-b-lg">
                                    <div className="statcard">
                                        <h2 className="statcard-number block-title">display</h2>
                                        <p className="lead">recommendations from your past employers &amp; colleagues.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="block block-lg pt-30 app-block-stats">
                <div className="container">
                    <h1 className="block-title pb-50 text-center">apply instantly &mdash; fast &amp; easy</h1>
                    <div className="row">
                        <div className="col-md-6 col-md-offset-1 col-sm-6 text-xs-center text-sm-left">
                            <div className="row m-y-md">
                                <div className="col-xs-6">
                                    <div className="statcard">
                                        <h2 className="statcard-number block-title">create</h2>
                                        <p className="lead">your profile with a few clicks.</p>
                                    </div>
                                </div>
                                <div className="col-xs-6">
                                    <div className="statcard">
                                        <h2 className="statcard-number">show</h2>
                                        <p className="lead">employers what you've truly got.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row hidden-sm">
                                <div className="col-xs-6 m-b-lg">
                                    <div className="statcard">
                                        <h2 className="statcard-number block-title">collect</h2>
                                        <p className="lead">all the information employers need in one place.</p>
                                    </div>
                                </div>
                                <div className="col-xs-6 m-b-lg">
                                    <div className="statcard">
                                        <h2 className="statcard-number block-title">display</h2>
                                        <p className="lead">recommendations from your past employers &amp; colleagues.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="text-right app-block-racecar-img">
                            <img src="../assets/img/seeker-race-car.png"  data-transition="entrance" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="block block-lg pt-30 app-block-stats">
                <div className="container">
                    <h1 className="block-title pb-50 text-center">directly message your employer</h1>
                    <div className="row">
                        <div className="col-md-7 col-sm-6 text-center">
                            <img src="../assets/img/seeker-chat.png" data-transition="entrance" />
                            <hr className="m-t-0 m-b-lg m-x-auto visible-xs" />
                        </div>
                        <div className="col-md-5 col-sm-6 text-xs-center text-sm-left">
                            <div className="row m-y-md">
                                <div className="col-xs-6">
                                    <div className="statcard">
                                        <h2 className="statcard-number block-title">create</h2>
                                        <p className="lead">your profile with a few clicks.</p>
                                    </div>
                                </div>
                                <div className="col-xs-6">
                                    <div className="statcard">
                                        <h2 className="statcard-number">show</h2>
                                        <p className="lead">employers what you've truly got.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row hidden-sm">
                                <div className="col-xs-6 m-b-lg">
                                    <div className="statcard">
                                        <h2 className="statcard-number block-title">collect</h2>
                                        <p className="lead">all the information employers need in one place.</p>
                                    </div>
                                </div>
                                <div className="col-xs-6 m-b-lg">
                                    <div className="statcard">
                                        <h2 className="statcard-number block-title">display</h2>
                                        <p className="lead">recommendations from your past employers &amp; colleagues.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="block block-lg pt-30 pb-30 app-block-stats">
                <div className="container">
                    <h1 className="block-title pb-50 text-center">start earning money with jobs you love</h1>
                    <div className="row">
                        <div className="col-md-6 col-md-offset-1 col-offset-11 col-sm-6 text-xs-center text-sm-left">
                            <div className="row m-y-md">
                                <div className="col-xs-6">
                                    <div className="statcard">
                                        <h2 className="statcard-number block-title">create</h2>
                                        <p className="lead">your profile with a few clicks.</p>
                                    </div>
                                </div>
                                <div className="col-xs-6">
                                    <div className="statcard">
                                        <h2 className="statcard-number">show</h2>
                                        <p className="lead">employers what you've truly got.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row hidden-sm">
                                <div className="col-xs-6 m-b-lg">
                                    <div className="statcard">
                                        <h2 className="statcard-number block-title">collect</h2>
                                        <p className="lead">all the information employers need in one place.</p>
                                    </div>
                                </div>
                                <div className="col-xs-6 m-b-lg">
                                    <div className="statcard">
                                        <h2 className="statcard-number block-title">display</h2>
                                        <p className="lead">recommendations from your past employers &amp; colleagues.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-5 col-sm-6 text-center">
                            <img src="../assets/img/employer-ice-cream-truck.png" data-transition="entrance" />
                            <hr className="m-t-0 m-b-lg m-x-auto visible-xs" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="block block-lg p-0 text-center">
                <div className="container-fluid">
                    <p className="lead m-b-md">
                        Become a Beavr Pro now and <strong>be independent</strong> forever!
                    </p>
                    <form className="form-inline">
                        <input className="form-control m-b m-5" placeholder="Email Address" />
                        <input className="form-control m-b m-5" type="password" placeholder="Create a Password" />
                        <button className="btn btn-primary m-5">Get started</button>
                    </form>
                    <small className="text-muted">
                        By clicking "Get started" I agree to beavr's
                        <a href="#">Terms of service</a>
                    </small>
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
