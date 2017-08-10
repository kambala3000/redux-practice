import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import "../../css/App.css";

import User from "./User.js";
import Page from "./Page.js";
import * as pageActions from "../actions/PageActions";

class App extends Component {
    render() {
        console.log(this.props);
        const { user, page } = this.props;
        const { setYear } = this.props.pageActions;
        return (
            <div className="row">
                <Page year={page.year} photos={page.photos} setYear={setYear} />
                <User name={user.name} />
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

function mapDispatchToProps(dispatch) {
    return {
        pageActions: bindActionCreators(pageActions, dispatch)
    };
}

// store.dispatch(setYear(2k17)) ---in Page.js--> this.props.setYear(2k17)

export default connect(mapStateToProps, mapDispatchToProps)(App);
