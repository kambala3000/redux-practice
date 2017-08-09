import React, { Component } from "react";
import PropTypes from "prop-types";

class User extends Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        const { name } = this.props;
        return (
            <div>
                <p>
                    Hello, {name}
                </p>
            </div>
        );
    }
}

User.propTypes = {
    name: PropTypes.string.isRequired
};

export default User;
