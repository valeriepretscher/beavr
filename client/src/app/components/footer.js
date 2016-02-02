import React from 'react';

export default React.createClass({

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
                          <li><h6 className="text-uppercase text-primary">Sign Up</h6></li>
                          <li>
                              <a href="https://beavr.typeform.com/to/uL8a0G">
                                Job-Seekers
                            </a>
                          </li>
                          <li>
                            <a href="https://beavr.typeform.com/to/n7Yjw8">
                               Employers
                            </a>
                          </li>
                          <li>
                            <a href="mailto:hello@beavr.com">
                                Press
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="col-sm-2 m-b">
                        <ul className="list-unstyled list-spaced">
                          <li><h6 className="text-uppercase text-primary">Get in Touch</h6></li>
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
                          <li><h6 className="text-uppercase text-primary">Follow Us</h6></li>
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
                        <h6 className="text-uppercase text-primary">About</h6>
                        <p>
                            Call us crazy, but we believe that there is a smarter way to match young enthusiastic job seekers with employers that are in need of qualified and reliable staff. Our mission is to build the fastest short-term job application platform, providing jobseekers with a simple and efficient solution to make extra cash as well as employers with the data and tools they need to hire qualified applicants faster.
                        </p>
                        <p>
                            The “On Demand Economy” is changing every aspect of our daily lives by faster and more efficient solutions. However, the world of job recruitment is still driven by paper applications, oldschool job boards, unstructured CV's, endless emails or tiring motivation letters. It's time to change that.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
            </footer>
        );
    }
} );
