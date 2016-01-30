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
                    <button className="btn btn-primary mt-30 btn-xl text-center m-5">Get started</button>

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
                        <div className="col-md-7 col-sm-6 text-xs-center text-sm-left">
                            <h1 className="block-title">Showcase your inner beast</h1>
                        </div>
                        <div className="col-md-5 col-sm-6 text-right">
                            <img src="../assets/img/seeker-profile-mirror.png" data-transition="entrance" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="block block-lg app-block-race-car">
                <div className="container">
                    <div className="row">
                        <div className="hidden-xs col-md-7 col-sm-6 text-xs-center text-sm-left">
                            <img src="../assets/img/seeker-race-car.png" data-transition="entrance" />
                        </div>
                        <div className="col-md-5 col-sm-6 pull-right">
                             <h1 className="block-title">This is an awesome header</h1>
                        </div>
                    </div>
                </div>
            </div>

            <div className="block block-lg app-block-profile">
                <div className="container">
                    <div className="row">
                        <div className="col-md-7 col-sm-6 text-xs-center text-sm-left">
                            <h1 className="block-title">Showcase your inner beast</h1>
                        </div>
                        <div className="col-md-5 col-sm-6 text-right">
                            <img src="../assets/img/seeker-profile-mirror.png" data-transition="entrance" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="block block-lg app-block-chat">
                <div className="container">
                    <div className="row">
                        <div className="col-md-7 col-sm-6 text-xs-center text-sm-left">
                            <img src="../assets/img/seeker-chat.png" data-transition="entrance" />
                        </div>
                        <div className="col-md-5 col-sm-6 pull-right">
                             <h1 className="block-title">Start earning money with jobs you love</h1>
                        </div>
                    </div>
                </div>
            </div>

            <div className="block block-lg app-block-truck">
                <div className="container">
                    <div className="row">
                        <div className="col-md-7 col-sm-6 text-xs-center text-sm-left">
                            <h1 className="block-title">Showcase your inner beast</h1>
                        </div>
                        <div className="col-md-5 col-sm-6 text-right">
                            <img src="../assets/img/employer-ice-cream-truck.png" data-transition="entrance" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="block block-lg app-block-giraffe pt-30 pb-50 full-width">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 pl-50 pr-50 col-sm-6 text-center">
                            <hr />
                            <hr />
                            <h1 className="block-title">Enjoy life!</h1>
                            <hr />
                            <h2>Travel the world, buy a laser sowrd, get your own place, fly to the moon, acquire a hover board...
                                the possibilities are endless!</h2>
                            <p>(and if you ever need to make more cash, we can help you out!)</p>
                            <hr />
                            <button className="btn btn-primary btn-xl text-center ">Get started</button>
                        </div>
                        <div className="col-md-6 col-sm-6 text-right">
                            <img src="../assets/img/seeker-giraffe.png" data-transition="entrance" />
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
