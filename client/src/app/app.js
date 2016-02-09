/* global require */

// load CSS assets first
require( '../assets/main.css' );

import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';

// @TODO: This should only be loaded when needed - e.g. for Safari
import Intl from 'intl'

import routes from './routes';
import messages from './messages';
import Debug from 'debug';
import 'utils/ga';

Debug.enable("*,-engine*,-socket*");

let debug = new Debug("app");

debug("begins");

/* Extract the language code from the browser using navigator.language, then rewrite
 * the string to match what we have in our dictionary from messages.js. toUpperCase()
 * here because Safari will return en-us  where as Firefox and Chrome will return en-US. */

var locale = navigator.language.split('-')
locale = locale[1] ? `${locale[0]}-${locale[1].toUpperCase()}` : navigator.language

var strings = messages[locale] ? messages[locale] : messages['en-US']

/* Sometimes we will include a language with partial translation and we need to make
 * sure the object that we pass to intlData contains all keys based on the en-US
 * messages otherwise React-intl will throw up on us */

strings = Object.assign(messages['en'], strings);

var intlData = {
    locales : ['de', 'en'],
    messages: strings
};

/*  IntlMixin works by looking on the context for relevanti data unless the props
 *  contain what it needs. So we need to pass our internationalization data down to
 *  every route handler. */

function createIntlElement(Component, props) {
  return <Component {...props}
                    locales={intlData.locales}
                    messages={intlData.messages} />
}

let mountEl = document.getElementById('application');

ReactDOM.render(<Router  history={createBrowserHistory()} createElement={createIntlElement} routes={routes} />, mountEl);
