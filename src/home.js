import React from 'react';
import logo from './logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { Dashboard } from './dashbard';
import { Publisher } from './publisher';
import { Consumer } from './consumer';
import { DataScience } from './dataScience';

export class Home extends React.Component {
  state = { useType: '' };

  handleSubmit = useType => {
    this.setState({ useType });
  };

  render() {
    return (
      <div className="container-fluid h-100">
        <div className="row h-100">
          <div className="col-2 bg-primary text-white">
            <img className="my-3 pointer" alt="" src={logo} style={{ height: '35px' }} onClick={() => this.handleSubmit('')} />
            <br />
            <span className="h4 pointer" onClick={() => this.handleSubmit('')}>
              Home
            </span>

            <div className="row align-items-start h-75 mt-4">
              <div className="col">
                <ul className="list-unstyled d-table-cell align-top" style={{ fontSize: '18px' }}>
                  <li className="pointer" onClick={() => this.handleSubmit('consumer')}>
                    Consumer
                  </li>
                  <li className="pointer" onClick={() => this.handleSubmit('publisher')}>
                    Publisher
                  </li>
                  <li className="pointer" onClick={() => this.handleSubmit('dataScience')}>
                    Data Science
                  </li>
                </ul>
              </div>
            </div>

            <div className="row align-items-end h-auto">
              <div className="col">
                <ul className="list-unstyled d-table-cell align-top" style={{ fontSize: '18px' }}>
                  <li>About</li>
                  <li>Legal</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="row">
              <div className="col-12 bg-primary text-white pl-0" style={{ height: '55px' }}>
                <div className="float-left mt-2 pointer" style={{ fontSize: '20px' }} onClick={() => this.handleSubmit('')}>
                  Mizuho Data Trading
                </div>
                <div className="float-right m-2 mt-3 pointer">
                  <FontAwesomeIcon icon={faUser} />
                </div>
              </div>
            </div>
            {this.state.useType === 'consumer' ? (
              <Consumer />
            ) : this.state.useType === 'publisher' ? (
              <Publisher />
            ) : this.state.useType === 'dataScience' ? (
              <DataScience />
            ) : (
              <Dashboard handleSubmit={this.handleSubmit} />
            )}
          </div>
        </div>
      </div>
    );
  }
}
