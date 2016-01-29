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
                          <li><h6 className="text-uppercase text-primary">Products</h6></li>
                          <li>Todo</li>
                          <li>Calendario</li>
                          <li>Email Town</li>
                          <li>Pomodorotary</li>
                          <li>ChillTower</li>
                        </ul>
                      </div>
                      <div className="col-sm-2 m-b">
                        <ul className="list-unstyled list-spaced">
                          <li><h6 className="text-uppercase text-primary">Extras</h6></li>
                          <li>AutotuneU</li>
                          <li>Freestyler</li>
                          <li>Chillaxation</li>
                        </ul>
                      </div>
                      <div className="col-sm-2 m-b">
                        <ul className="list-unstyled list-spaced">
                          <li><h6 className="text-uppercase text-primary">Support</h6></li>
                          <li>Online Support</li>
                          <li>Telephone Sales</li>
                          <li>Help Desk</li>
                          <li>Workshops</li>
                        </ul>
                      </div>
                      <div className="col-sm-6">
                        <h6 className="text-uppercase text-primary">About</h6>
                        <p>Call us crazy, but we believe that there is a smarter way to match young enthusiastic job seekers with employers that are in need of qualified and reliable staff. Our mission is to build the fastest short-term job application platform, providing jobseekers with a simple and efficient solution to make extra cash as well as employers with the data and tools they need to hire applicants in a timely manner.</p>
                      </div>
                    </div>
                  </div>
                </div>
            </footer>
        );
    }
} );
