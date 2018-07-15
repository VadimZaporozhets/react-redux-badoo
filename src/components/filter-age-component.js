import React, {Component} from 'react';

class FilterAge extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="filter-wrapper filter-gender">
                <p className="filter-title">Choose maximum age:</p>
                <input onChange={(e) => {
                    this.props.onChange(e.target.value)
                }} value={this.props.value} type="range" min="18" max="40"/>
                {this.props.value}
            </div>
        );
    }
}

export default FilterAge;