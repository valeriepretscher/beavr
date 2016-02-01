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
                            <h3 className="lead pr-50">
                                Create your personal profile with all the things
                                your future employer would love to know about you.  Showcase
                                what you’ve really got to companies that you would love to work
                                for.
                            </h3>
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
                        <div className="hidden-xs col-md-6 col-sm-6 text-xs-center text-sm-left">
                            <img src="../assets/img/seeker-race-car.png" data-transition="entrance" />
                        </div>
                        <div className="col-md-6 col-sm-6 pull-right">
                             <h1 className="block-title">Applications &mdash; fast &amp; easy</h1>
                            <h3 className="lead">
                                Discover unique job opportunities wherever you are,
                                whenever you want. and find the job that really fits to
                                you. Apply with 1 tap. No CV or cover letter required. It's
                                never been this easy to get ahead.
                            </h3>
                        </div>
                    </div>
                </div>
            </div>

            <div className="block block-lg app-block-truck">
                <div className="container">
                    <div className="row">
                        <div className="col-md-7 col-sm-6 text-xs-center text-sm-left pr-50">
                            <h1 className="block-title">In every job that must be done, there is an element of fun</h1>
                            <h3 className="lead pr-50">
                                Witth Beaver you're independent. Forget about boring job
                                platforms, discover your strengths and become a
                                BeavrPro.
                            </h3>
                        </div>
                        <div className="col-md-5 col-sm-6 text-right">
                            <img src="../assets/img/employer-ice-cream-truck.png" data-transition="entrance" />
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
                             <h1 className="block-title">Seamless communication</h1>
                            <h3 className="lead">
                                Forget about emails. Get your conersation going in
                                seconds. via the Bevar Messenger and clarify any
                                open questions. You deserve an answer. Always hear
                                back in 24 hours.
                            </h3>
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
                            <h2>Complete your bucket list. Travel the world. Buy a laser sword. Get your own place. Fly to the moon. Acquire a hover board...
                                the possibilities are endless!</h2>
                            <p>(Hang loose, we got you covered.)</p>
                            <hr />
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
