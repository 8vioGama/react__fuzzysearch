import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from '../presentational/Input';
import SearchResult from '../presentational/SearchResult';
import doSearch from '../../lib/fuzzySearch';

class SearchContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      results: this.props.transactions,
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({ searchTerm: event.target.value });
    const results = doSearch(event.target.value, this.props.transactions);
    this.setState({ results });
  }
  render() {
    const { searchTerm } = this.state;

    const transactions = this.state.results.map(result =>
      <SearchResult result={result} key={result.card_last_four} />);

    return (
      <div className="search-container">
        <div className="input-container">
          <Input
            text="Search transactions"
            type="text"
            id="search"
            value={searchTerm}
            handleChange={this.handleChange}
          />
        </div>
        <div className="searchResults-container">
          <table>
            <tbody>
              <tr>
                <th>Amount</th>
                <th>Date</th>
                <th>Card</th>
              </tr>
              {transactions}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

SearchContainer.propTypes = {
  transactions: PropTypes.array.isRequired, /* eslint react/forbid-prop-types: 0 */
};

export default SearchContainer;
