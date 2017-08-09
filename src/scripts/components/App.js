import React, { Component } from "react";
import { connect } from "react-redux";
import "../../css/App.css";

import User from "./User.js";
import Page from "./Page.js";

class App extends Component {
    render() {
        const { user, page } = this.props;
        return (
            <div className="app">
                <User name={user.name} />
                <Page year={page.year} photos={page.photos} />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        user: state.user,
        page: state.page
    };
}

export default connect(mapStateToProps)(App);
