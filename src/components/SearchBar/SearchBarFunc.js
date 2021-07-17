import React, { useState } from 'react';
import './SearchBar.css';

export const SearchBar = () => {
    const [options, setOptions] = useState({ // state
        term: '',
        location: '',
        sortBy: 'best_match'
    })

    // terminar!!!

    return (
        <div className="SearchBar">
            <div className="SearchBar-sort-options">
                <ul>
                    {this.renderSortByOptions()}
                </ul>
            </div>
            <div className="SearchBar-fields">
                <input placeholder="Search Businesses" onChange={this.handleTermChange} />
                <input placeholder="Where?" onChange={this.handleLocationChange} />
            </div>
            <div className="SearchBar-submit">
                <a href="https://www.google.com" onClick={this.handleSearch}>Let's Go</a>
            </div>
        </div>
    );
}