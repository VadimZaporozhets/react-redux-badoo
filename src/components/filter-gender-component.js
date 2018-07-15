import React from 'react';

const FilterGender = ({onChange, value}) => {
    return (
        <div className="filter-wrapper filter-gender">
            <p className="filter-title">Choose a gender:</p>
            <label>
                Female
                <input onChange={(e) => {onChange(e.target.value)}} type="radio" value="F" name="filter-gender" defaultChecked={value === 'F'}/>
            </label>
            <label>
                Male
                <input onChange={(e) => {onChange(e.target.value)}} type="radio" value="M" name="filter-gender" defaultChecked={value === 'M'}/>
            </label>
        </div>
    );
}

export default FilterGender;