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
                <div className="container text-center app-beavr-masthead">
                    <h1 className="masthead-title">
                        <span className="text-primary">Hi, we're Beavr.</span><br />
                        Smart, simple<br />
                        job-search.
                    </h1>
                </div>
            </div>

            <div className="block block-lg pt-30 app-block-stats">
                <div className="container">
                    <div className="row">
                        <div className="col-md-7 col-sm-6 text-center">
                            <img src="../assets/img/seeker-profile-mirror.png" data-transition="entrance" />
                            <hr className="m-t-0 m-b-lg m-x-auto visible-xs" />
                        </div>
                        <div className="col-md-5 col-sm-6 text-xs-center text-sm-left">
                            <div className="row m-y-md">
                                <h1 className="block-title pb-50 mt-0 pt-0 text-center">Showcase your inner beast</h1>
                                <div className="col-xs-6">
                                    <div className="statcard">
                                        <h2 className="statcard-number block-title">Create</h2>
                                        <p className="lead">your profile with a few clicks.</p>
                                    </div>
                                </div>
                                <div className="col-xs-6">
                                    <div className="statcard">
                                        <h2 className="statcard-number">Show</h2>
                                        <p className="lead">employers what you've truly got.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row hidden-sm">
                                <div className="col-xs-6 m-b-lg">
                                    <div className="statcard">
                                        <h2 className="statcard-number block-title">Collect</h2>
                                        <p className="lead">all the information employers need in one place.</p>
                                    </div>
                                </div>
                                <div className="col-xs-6 m-b-lg">
                                    <div className="statcard">
                                        <h2 className="statcard-number block-title">Display</h2>
                                        <p className="lead">recommendations from your past employers &amp; colleagues.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="block block-lg pt-0 pb-20 app-block-stats">
                <div className="container">
                    <h1 className="block-title pb-50 text-center">Apply instantly &mdash; fast &amp; easy</h1>
                    <div className="row">
                        <div className="col-md-6 col-md-offset-1 col-sm-6 text-xs-center text-sm-left">
                            <div className="row m-y-md">
                                <div className="col-xs-6">
                                    <div className="statcard">
                                        <h2 className="statcard-number block-title">Discover</h2>
                                        <p className="lead">unique opportunities near you.</p>
                                    </div>
                                </div>
                                <div className="col-xs-6">
                                    <div className="statcard">
                                        <h2 className="statcard-number">Throw out</h2>
                                        <p className="lead">Your CVs and cover letters - on beavr you won't need them..</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row hidden-sm">
                                <div className="col-xs-6 m-b-lg">
                                    <div className="statcard">
                                        <h2 className="statcard-number block-title">Apply</h2>
                                        <p className="lead">with a single click.</p>
                                    </div>
                                </div>
                                <div className="col-xs-6 m-b-lg">
                                    <div className="statcard">
                                        <h2 className="statcard-number block-title">Arrive</h2>
                                        <p className="lead">at your job with all the information you need to shine.</p>
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

            <div className="block block-lg pt-0 app-block-stats">
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
                                        <h2 className="statcard-number block-title">chat</h2>
                                        <p className="lead">directly within the app.</p>
                                    </div>
                                </div>
                                <div className="col-xs-6">
                                    <div className="statcard">
                                        <h2 className="statcard-number">clarify</h2>
                                        <p className="lead">any questions you might have beforehand</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row hidden-sm">
                                <div className="col-xs-6 m-b-lg">
                                    <div className="statcard">
                                        <h2 className="statcard-number block-title">connect</h2>
                                        <p className="lead">even before your first day has started</p>
                                    </div>
                                </div>
                                <div className="col-xs-6 m-b-lg">
                                    <div className="statcard">
                                        <h2 className="statcard-number block-title">know</h2>
                                        <p className="lead">exactly what lies ahead.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="block block-lg pt-30 pb-30 app-block-truck">
                <div className="container">
                    <h1 className="block-title pb-50 text-center">start earning money with jobs you love</h1>
                    <div className="row">
                        <div className="col-md-6 col-md-offset-1 col-offset-11 col-sm-6 text-xs-center text-sm-left">
                            <div className="row m-y-md">
                                <div className="col-xs-6">
                                    <div className="statcard">
                                        <h2 className="statcard-number block-title">make</h2>
                                        <p className="lead">your financial problems disappear.</p>
                                    </div>
                                </div>
                                <div className="col-xs-6">
                                    <div className="statcard">
                                        <h2 className="statcard-number">gain</h2>
                                        <p className="lead">valuable experience with every single job.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row hidden-sm">
                                <div className="col-xs-6 m-b-lg">
                                    <div className="statcard">
                                        <h2 className="statcard-number block-title">discover</h2>
                                        <p className="lead">the strengths that make you, you.</p>
                                    </div>
                                </div>
                                <div className="col-xs-6 m-b-lg">
                                    <div className="statcard">
                                        <h2 className="statcard-number block-title">become</h2>
                                        <p className="lead">a beavr pro today and say goodbye to boring job platforms.</p>
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

            <div className="block block-lg pt-30 app-block-stats">
                <div className="container">
                    <div className="row">
                        <div className="col-md-7 col-sm-6 text-center">
                            <img src="../assets/img/seeker-giraffe.png" data-transition="entrance" />
                            <hr className="m-t-0 m-b-lg m-x-auto visible-xs" />
                        </div>
                        <div className="col-md-5 col-sm-6 text-xs-center text-sm-left">
                            <div className="row m-y-md text-center">
                                <h1 className="block-title">Enjoy life!</h1>
                                <h2>travel the world, buy a laser sowrd, get your own place, fly to the moon, acquire a hover board...
                                    the possibilities are endless!</h2>
                                <p>(and if you ever need to make more cash, we can help you out!)</p>
                                <button className="btn btn-primary mt-30 btn-lg text-center m-5">Get started</button>
                            </div>
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
