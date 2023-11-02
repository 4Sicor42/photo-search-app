import React from 'react';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchQuery: ''
    };
  }

  handleSearch = () => {
    this.props.onSearch(this.state.searchQuery);
  }

  handleChange = e => {
    this.setState({ searchQuery: e.target.value });
  }

  handleKeyPress = e => {
    if (e.key === 'Enter') {
      this.handleSearch();
    }
  }

  handleClear = () => {
    this.setState({ searchQuery: '' });
  }

  render() {
    return (
      <div className="search-form">
      	<div className="input-container">
        <input
          autoFocus
          type="text"
          placeholder="Search..."
          value={this.state.searchQuery}
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
        />

        {this.state.searchQuery && (
          <span className="clear-button" onClick={this.handleClear}>x</span>
          )}
        </div>

        <button onClick={this.handleSearch}>Search</button>

      </div>
    );
  }
}

export default SearchForm;