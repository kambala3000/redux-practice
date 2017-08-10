import React, { Component } from "react";
import PropTypes from "prop-types";

class Page extends Component {
    constructor(props, context) {
        super(props, context);
        this.onYearClick = this.onYearClick.bind(this);
    }

    onYearClick(e) {
        this.props.setYear(+e.target.textContent);
    }

    render() {
        const { year, photos } = this.props;
        return (
            <div className="ib page">
                <div className="buttons-wrap">
                    <button className="btn-year" onClick={this.onYearClick}>
                        2015
                    </button>
                    <button className="btn-year" onClick={this.onYearClick}>
                        2016
                    </button>
                    <button className="btn-year" onClick={this.onYearClick}>
                        2017
                    </button>
                </div>
                <h3 className="year-now">
                    {year} year
                </h3>
                <p>
                    You have {photos.length} photos.
                </p>
            </div>
        );
    }
}

Page.propTypes = {
    year: PropTypes.number.isRequired,
    photos: PropTypes.array.isRequired,
    setYear: PropTypes.func.isRequired
};

export default Page;
