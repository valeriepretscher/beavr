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
                    title="For Employers"
                />

            <div className="block pb-50 app-block-intro">
                <div className="container text-center app-beavr-masthead">
                    <h1 className="masthead-title">
                        <span className="text-primary">Hi, we're Beavr.</span><br />
                        We help you find your perfect <br /> short term employees.
                    </h1>
                    <a href="https://beavr.typeform.com/to/n7Yjw8">
                        <button className="btn btn-primary btn-xl mt-30 text-center ">Get started</button>
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
                        <div className="col-md-7 col-sm-6 text-xs-center text-sm-left">
                            <h1 className="block-title">Stop the CV nightmare</h1>
                            <h3 className="lead pr-50">
                                No more unstructured CVs and cover letters. View your candidates
                                profile which contains their most important educational and
                                professional experience and enjoa our growing community of
                                Beavr Pros. All the information you need at a glance. (Take that, email
                                clutter!)
                            </h3>
                        </div>
                        <div className="col-md-5 col-sm-6 text-right">
                            <img src="../assets/img/employer-drowning.png" data-transition="entrance" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="block block-lg app-block-chat">
                <div className="container">
                    <div className="row">
                        <div className="col-md-7 col-sm-6 text-xs-center text-sm-left">
                            <img src="../assets/img/employer-desk.png" data-transition="entrance" />
                        </div>
                        <div className="col-md-5 col-sm-6 pull-right">
                             <h1 className="block-title">Everything in one place</h1>
                            <h3 className="lead">
                                Create job ads in only a few, easy steps and recieve
                                applications within the next couple of hours.
                                Manage all your candidates and your personal pool of
                                BeavrPros in one place.
                            </h3>
                        </div>
                    </div>
                </div>
            </div>

            <div className="block block-lg app-block-truck">
                <div className="container">
                    <div className="row">
                        <div className="col-md-7 col-sm-6 text-xs-center text-sm-left pr-50">
                            <h1 className="block-title">Pick the one that really fits you</h1>
                            <h3 className="lead pr-50">
                                Sort and filter your candidates faster and more
                                efficiently than ever before. Find employees that
                                really fit your company. Any questions for your
                                applicants ? Communicate directly on Beavr and
                                clarify the the last details.
                            </h3>
                        </div>
                        <div className="col-md-5 col-sm-6 text-right">
                            <img src="../assets/img/employer-picker.png" data-transition="entrance" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="block block-lg app-block-chat pt-30 pb-30 full-width">
                <div className="container">
                    <div className="row pb-30 pt-30">
                        <div className="col-md-7 col-sm-6 text-xs-center text-sm-left">
                            <img src="../assets/img/employer-piggy-bank.png" data-transition="entrance" />
                        </div>
                        <div className="col-md-5 col-sm-6 text-center">
                            <h1 className="block-title">Save time and money</h1>
                            <hr />
                            <h2>
                                Beavr is 100% risk free.Pay only for what you really get and
                                save some of your valuable time with your brand new end-to
                                recruiting system.
                            </h2>
                            <hr />
                            <hr />
                            <a href="https://beavr.typeform.com/to/n7Yjw8">
                                <button className="btn btn-primary btn-xl text-center ">Get started</button>
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
