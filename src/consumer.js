import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faPlus, faShoppingCart, faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';
import * as moment from 'moment';

export class Consumer extends React.Component {
  state = {
    isMarketOpen: false,
    subscriptions: [
      { type: 'UAD', productTypeId: 4, publisher: 'Mitsubishi', from: moment(), to: moment().add(this.randon(30, 1), 'days') },
      { type: 'Sovereign', productTypeId: 2, publisher: 'HSBC', from: moment(), to: moment().add(this.randon(30, 1), 'days') },
      { type: 'Japan non yen', productTypeId: 1, publisher: 'Barcap', from: moment(), to: moment().add(this.randon(30, 1), 'days') },
      { type: 'Credit', productTypeId: 3, publisher: 'Mizuho', from: moment(), to: moment().add(this.randon(30, 1), 'days') }
    ],
    market: [
      { publisher: 'Barcap', products: [{ type: 'Japan non yen', productTypeId: 1 }, { type: 'Sovereign ', productTypeId: 2 }] },
      { publisher: 'HSBC', products: [{ type: 'Sovereign ', productTypeId: 2 }] },
      { publisher: 'Mitsubishi', products: [{ type: 'UAD', productTypeId: 4 }, { type: 'Sovereign ', productTypeId: 2 }] },
      { publisher: 'Mizuho', products: [{ type: 'Credit', productTypeId: 3 }, { type: 'Sovereign ', productTypeId: 2 }] }
    ]
  };

  randon(max, min) {
    return Math.floor(Math.random() * max) + min;
  }

  doIHaveIt(publisher, product) {
    const result = this.state.subscriptions.find(item => item.publisher === publisher && item.type === product);

    return result ? true : false;
  }

  render() {
    return (
      <div className="row">
        <div className="col">
          <div className="row my-2">
            <div className="col text-center text-primary h4">Consumer</div>
          </div>
          <div className="row my-2">
            <div className="col">
              <div className="card">
                <h5 className="card-header">
                  <div className="float-left">
                    Marketplace <FontAwesomeIcon className="text-primary" icon={faShoppingCart} />
                  </div>
                  <div
                    className="float-right"
                    onClick={() => {
                      this.setState({ isMarketOpen: !this.state.isMarketOpen });
                    }}
                  >
                    {this.state.isMarketOpen ? (
                      <FontAwesomeIcon className="text-primary pointer" icon={faCaretUp} />
                    ) : (
                      <FontAwesomeIcon className="text-primary pointer" icon={faCaretDown} />
                    )}
                  </div>
                </h5>
                {this.state.isMarketOpen && (
                  <div className="card-body">
                    <table className="table table-hover">
                      <thead>
                        <tr>
                          <th scope="col" />
                          <th scope="col">Japan non yen</th>
                          <th scope="col">Sovereign</th>
                          <th scope="col">Credit</th>
                          <th scope="col">UAD</th>
                        </tr>
                      </thead>
                      <tbody>
                        {this.state.market.map((item, i) => (
                          <tr key={i} className="pointer">
                            <td>{item.publisher}</td>
                            <td>
                              {this.doIHaveIt(item.publisher, 'Japan non yen') ? (
                                <FontAwesomeIcon className="text-success" icon={faCheck} />
                              ) : (
                                <FontAwesomeIcon className="text-primary" icon={faPlus} />
                              )}
                            </td>
                            <td>
                              {this.doIHaveIt(item.publisher, 'Sovereign') ? (
                                <FontAwesomeIcon className="text-success" icon={faCheck} />
                              ) : (
                                <FontAwesomeIcon className="text-primary" icon={faPlus} />
                              )}
                            </td>
                            <td>
                              {this.doIHaveIt(item.publisher, 'Credit') ? (
                                <FontAwesomeIcon className="text-success" icon={faCheck} />
                              ) : (
                                <FontAwesomeIcon className="text-primary" icon={faPlus} />
                              )}
                            </td>
                            <td>
                              {this.doIHaveIt(item.publisher, 'UAD') ? (
                                <FontAwesomeIcon className="text-success" icon={faCheck} />
                              ) : (
                                <FontAwesomeIcon className="text-primary" icon={faPlus} />
                              )}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="row my-2">
            <div className="col">
              <div className="card">
                <h5 className="card-header">Subscriptions</h5>
                <div className="card-body">
                  <table className="table table-hover">
                    <thead>
                      <tr>
                        <th scope="col">Publisher</th>
                        <th scope="col">Type</th>
                        <th scope="col">From</th>
                        <th scope="col">To</th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.state.subscriptions.map((item, i) => (
                        <tr key={i} className="pointer">
                          <td>{item.publisher}</td>
                          <td>{item.type}</td>
                          <td>{item.from.format('lll')}</td>
                          <td>{item.to.format('lll')}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
