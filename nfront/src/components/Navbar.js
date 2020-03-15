import React from 'react';

// This is the bootstrap navbar component which is used in App.js

class Navbar extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="#">Hotel Resort</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ml-auto">
                        <a className="nav-item nav-link" href="#">Register <span className="sr-only">(current)</span></a>
                        <a className="nav-item nav-link" href="#">Login</a>
                    </div>
                </div>
            </nav>

        );
    }
}

export default Navbar;