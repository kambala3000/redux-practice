import React, { Component } from "react";
import PropTypes from "prop-types";

class Page extends Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        const { year, photos } = this.props;
        return (
            <div>
                <p>
                    You have {photos.length} photos for {year} year.
                </p>
            </div>
        );
    }
}

Page.propTypes = {
    year: PropTypes.number.isRequired,
    photos: PropTypes.array.isRequired
};

export default Page;
