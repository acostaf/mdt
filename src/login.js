import React from 'react';
import { Redirect } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';
import logo from './logo.svg';

export class Login extends React.Component {
  state = { redirectToReferrer: false };

  login = () => this.setState({ redirectToReferrer: true });

  render() {
    let { from } = this.props.location.state || { from: { pathname: '/home' } };
    let { redirectToReferrer } = this.state;

    if (redirectToReferrer) return <Redirect to={from} />;

    return (
      <div className="container-fluid h-100" style={{ background: '#85C0DB', padding: '90px' }}>
        <div
          className="bg-primary"
          style={{ position: 'absolute', top: '150px', left: '0', height: '80px', width: '300px', zIndex: 9999, paddingTop: '25px', paddingLeft: '50px' }}
        >
          <img src={logo} alt="" style={{ height: '35px' }} />
        </div>
        <div className="row m-0 h-100">
          <div className="col h-100 d-table" style={{ background: '#CCCCCC' }}>
            <span className="d-table-cell align-middle text-center" style={{ fontSize: '45px' }}>
              Mizuho Data Trading
            </span>
          </div>
          <div className="col h-100 d-table pl-5" style={{ background: 'white' }}>
            <div className="d-table-cell align-middle">
              <div className="w-50">
                <div className="font-weight-bold" style={{ fontSize: '20px' }}>
                  Login
                </div>
                <div className="my-1 mb-2">Sign in to your account</div>
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1">
                      <FontAwesomeIcon icon={faUser} />
                    </span>
                  </div>
                  <input type="text" className="form-control" placeholder="Username" />
                </div>

                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1">
                      <FontAwesomeIcon icon={faLock} />
                    </span>
                  </div>
                  <input type="text" className="form-control" placeholder="Password" />
                </div>

                <button type="button" className="btn btn-secondary btn-sm" onClick={this.login}>
                  Login
                </button>
              </div>
            </div>
          </div>
          <div className="col-2" style={{ background: 'white' }} />
        </div>
      </div>
    );
  }
}
