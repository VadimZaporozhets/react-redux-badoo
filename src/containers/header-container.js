import React, {Component} from 'react';
import LogoComponent from '../components/logo-component';
import FilterButton from '../components/filter-button-component';

class Header extends Component {
    render() {
        return (
            <header className="header">
                <LogoComponent/>
                <FilterButton/>
            </header>
        );
    }
}

export default Header;