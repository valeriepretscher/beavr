/* global process */
import _ from 'lodash';

let env = process.env;

let config = {

    general: {
        title: 'Beavr',
        description: 'Be independent.',
        apiUrl: '/api/v1/',
        analytics: {
            google: ""
        }
    },

    development: {
        env: "development"
    },

    production: {
        env: "production"

    }
};

export default _.extend( {}, config.general, config[ env.NODE_ENV ] );
