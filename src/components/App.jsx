import React from 'react';
import SearchContainer from './container/SearchContainer';
import transactions from '../lib/data';
import '../assets/app.scss';

const App = () => (
  <div className="fuzzySearch">
    <SearchContainer transactions={transactions} />
  </div>
);

export default App;
