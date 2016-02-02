import React from 'react';
import Reflux from 'reflux';

import analyticsStore from 'stores/analytics';

import NavBar from 'components/navbar';
import Footer from 'components/footer';

export default React.createClass( {

    mixins: [
        Reflux.connect( analyticsStore ),
        require('react-intl').IntlMixin
    ],

    render() {
        return (
            <div id="application-view">
                <NavBar />

                    {this.props.children}

                <Footer />

            </div>
        );
    }

} );
