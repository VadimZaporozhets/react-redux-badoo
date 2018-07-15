import React from 'react';
import {Link} from 'react-router-dom';

const FilterButton = () => {
    return(
        <Link to="/filter">
            <button className="filter-icon"></button>
        </Link>
    )
}

export default FilterButton;