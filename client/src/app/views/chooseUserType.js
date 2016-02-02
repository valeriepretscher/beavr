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
                    title="Are you a job-seeker or employer?"
                />

            <div className="block pb-50 app-block-intro">
                <div className="container text-center app-beavr-masthead">
                    <h1 className="masthead-title">
                        <span className="text-primary">Hey you.</span><br />
                        How can we make <br />
                        your day today?
                    </h1>
                    <button className="btn btn-primary m-30 mt-30 btn-xl text-center m-5">Find my perfect job</button>
                    <button className="btn btn-primary m-30 mt-30 btn-xl text-center m-5">Find my perfect Pro</button>
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
