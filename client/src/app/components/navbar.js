import React from 'react';
import Reflux from 'reflux';
import {Link, History} from 'react-router';

import NavLink from 'components/navLink';
import authStore from 'stores/auth';
import config from 'config';

export default React.createClass( {

    mixins: [
        History,
        Reflux.connect( authStore, 'user' )
    ],

    render() {
        return (
            <nav className="navbar-component navbar navbar-transparent navbar-static-top navbar-inverse" role="navigation">
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse"
                                data-target=".navbar-collapse">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <Link to="/" className="navbar-brand brand-logo">
                            <img  width="115px" src="../assets/img/logo-red.png" />
                        </Link>
                    </div>
                    <div className="navbar-collapse collapse">
                        <ul className="nav navbar-nav navbar-left">

                        </ul>

                        { !(authStore.isAuthenticated()) && this.renderGuestNavigation()}
                        { authStore.isAuthenticated() && this.renderUserNavigation()}

                    </div>
                </div>
            </nav>
        );
    },

    renderGuestNavigation() {
        return (
            <ul className="nav navbar-nav navbar-right">
                <NavLink to="/">Seekers</NavLink>
                <NavLink to="/employers">Employers</NavLink>
                <NavLink to="/login">Login</NavLink>
                <NavLink to="/signup" className="signup">Signup</NavLink>
            </ul>
        );
    },

    renderUserNavigation() {
        return (
            <ul className="nav navbar-nav navbar-right">
                <li className="dropdown">
                    <button type="button" className="btn btn-profile navbar-btn dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <span className="caption"><img className="user-avatar" src={authStore.avatarUrl()} /> {authStore.userName()}  </span>
                        <span className="caret"></span>
                    </button>
                    <ul className="dropdown-menu">
                        <NavLink to="/my/profile">Profile</NavLink>

                        <li role="separator" className="divider"></li>
                        <NavLink to="/logout">Logout</NavLink>
                    </ul>
                </li>
            </ul>
        );
    }
} );
