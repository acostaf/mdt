import React from 'react';

export class Dashboard extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col">
          <div className="row my-2">
            <div className="col text-center text-primary h4">Dashboard</div>
          </div>
          <div className="row my-2">
            <div className="col">
              <div className="card">
                <h5 className="card-header">Publisher</h5>
                <div className="card-body">
                  <h5 className="card-title">Special title treatment</h5>
                  <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                  <button className="btn btn-primary float-right" onClick={() => this.props.handleSubmit('publisher')}>
                    More
                  </button>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <h5 className="card-header">Consumer</h5>
                <div className="card-body">
                  <h5 className="card-title">Special title treatment</h5>
                  <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                  <button className="btn btn-primary float-right" onClick={() => this.props.handleSubmit('consumer')}>
                    More
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="row my-4">
            <div className="col">
              <div className="card">
                <h5 className="card-header">Data Science</h5>
                <div className="card-body">
                  <h5 className="card-title">Special title treatment</h5>
                  <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                  <button className="btn btn-primary float-right" onClick={() => this.props.handleSubmit('dataScience')}>
                    More
                  </button>
                </div>
              </div>
            </div>
            <div className="col" />
          </div>
        </div>
      </div>
    );
  }
}
