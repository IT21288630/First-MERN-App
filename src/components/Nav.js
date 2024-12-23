import React, { Component } from 'react'

export default class Nav extends Component {
  render() {
    return (
      <div className='mb-5'>
        <nav className="navbar navbar-expand-lg navbar-light bg-light ps-3">
          <a className="navbar-brand" href="/">First MERN App</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-item nav-link active" href="/">Home <span className="sr-only">(current)</span></a>
              <a className="nav-item nav-link" href="/add">Add Post</a>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}
