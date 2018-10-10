import React from 'react';
import PropTypes from 'prop-types';
import formatDate from '../../lib/formatDate';

const SearchResult = ({
  result,
}) => (
  <tr className="search-result">
    <td className="amount">{result.amount}</td>
    <td className="date">{formatDate(result.date)}</td>
    <td className="card">{result.card_last_four}</td>
  </tr>
);
SearchResult.propTypes = {
  result: PropTypes.object.isRequired, /* eslint react/forbid-prop-types: 0 */
};

export default SearchResult;
