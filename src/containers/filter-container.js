import React, {Component} from 'react';
import FilterAge from '../components/filter-age-component';
import FilterGender from '../components/filter-gender-component';
import {connect} from 'react-redux';
import {filterChangeAge, filterChangeGender} from '../actions/filter-actions';

const mapStateToProps = (state) => {
    return {
        filterAge: state.filterParams.age,
        filterGender: state.filterParams.gender
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeFilterAge: (age) => {
            dispatch(filterChangeAge(age));
        },
        changeFilterGender: (gender) => {
            dispatch(filterChangeGender(gender));
        }
    }
}

class Filter extends Component {
    render() {
        const {changeFilterAge, filterAge, changeFilterGender, filterGender} = this.props;
        return (
            <div className="filter">
                <FilterAge onChange={changeFilterAge} value={filterAge}/>
                <FilterGender onChange={changeFilterGender} value={filterGender}/>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter);