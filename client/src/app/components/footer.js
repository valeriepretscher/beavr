import React from 'react';

export default React.createClass({

    mixins: [
        require('react-intl').IntlMixin
    ],

    shouldComponentUpdate() {
        return false;
    },

    render() {
        return (
            <footer className="hidden-print">
                <div className="block app-block-footer">
                  <div className="container">
                    <div className="row">
                      <div className="col-sm-2 m-b">
                        <ul className="list-unstyled list-spaced">
                          <li><h6 className="text-uppercase text-primary">{ this.getIntlMessage("footer.heading-signup") }</h6></li>
                          <li>
                              <a href="https://beavr.typeform.com/to/uL8a0G">
                                { this.getIntlMessage("footer.job-seekers") }
                            </a>
                          </li>
                          <li>
                            <a href="https://beavr.typeform.com/to/n7Yjw8">
                                { this.getIntlMessage("footer.employers") }
                            </a>
                          </li>
                          <li>
                            <a href="mailto:hello@beavr.com">
                                { this.getIntlMessage("footer.press") }
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="col-sm-2 m-b">
                        <ul className="list-unstyled list-spaced">
                          <li><h6 className="text-uppercase text-primary">{ this.getIntlMessage("footer.heading-contact") }</h6></li>
                          <li>
                              AT
                                <a href="tel:+436769383522"> +43 676 9383522</a>
                          </li>
                          <li>
                             US
                                <a href="tel:+18448181334"> +1 (844) 818-1334</a>
                          </li>
                          <li>
                            <a href="mailto:hello@beavr.com">
                                hello@beavr.com
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="col-sm-2 m-b">
                        <ul className="list-unstyled list-spaced">
                          <li><h6 className="text-uppercase text-primary">{ this.getIntlMessage("footer.heading-follow") }</h6></li>
                          <li>
                            <a href="https://facebook.com/busybeavr">
                                Facebook
                            </a>
                          </li>
                          <li>
                            <a href="https://twitter.com/busybeavr">
                               Twitter
                            </a>
                          </li>
                          <li>
                            <a href="https://www.linkedin.com/company/beavr">
                               Linkedin
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="col-sm-6">
                        <h6 className="text-uppercase text-primary">{ this.getIntlMessage("footer.heading-about") }</h6>
                        <p>
                            { this.getIntlMessage("footer.about-text-1") }
                        </p>
                        <p>
                            { this.getIntlMessage("footer.about-text-2") }
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
            </footer>
        );
    }
} );
