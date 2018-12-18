import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import * as moment from 'moment';

export class Publisher extends React.Component {
  state = {
    published: [
      { type: 'Japan non yen', updated: moment(), from: moment(), to: moment().add(this.randon(30, 1), 'days'), usage: this.randon(100, 1) },
      { type: 'Sovereign ', updated: moment().add(-10, 'days'), from: moment(), to: moment().add(this.randon(30, 1), 'days'), usage: this.randon(100, 1) },
      { type: 'Credit', updated: moment(), from: moment(), to: moment().add(this.randon(30, 1), 'days'), usage: this.randon(90, 1) },
      { type: 'UAD', updated: moment().add(-15, 'days'), from: moment(), to: moment().add(this.randon(30, 1), 'days'), usage: this.randon(105, 1) }
    ]
  };

  randon(max, min) {
    return Math.floor(Math.random() * max) + min;
  }

  render() {
    return (
      <div className="row">
        <div className="col">
          <div className="row my-2">
            <div className="col text-center text-primary h4">Publisher</div>
          </div>
          <div className="row my-2">
            <div className="col">
              <div className="card">
                <h5 className="card-header">Data Published</h5>
                <div className="card-body">
                  <table className="table table-hover">
                    <thead>
                      <tr>
                        <th scope="col">Type</th>
                        <th scope="col">Updated</th>
                        <th scope="col">From</th>
                        <th scope="col">To</th>
                        <th scope="col">Usage</th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.state.published.map((item, i) => (
                        <tr key={i} className="pointer">
                          <td>{item.type}</td>
                          <td>{item.updated.format('lll')}</td>
                          <td>{item.from.format('lll')}</td>
                          <td>{item.to.format('lll')}</td>
                          <td>{item.usage}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>

                  <button className="btn btn-primary float-right">
                    <FontAwesomeIcon icon={faPlus} /> Add another
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
