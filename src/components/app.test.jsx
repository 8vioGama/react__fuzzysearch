import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { mount, shallow } from 'enzyme';
import App from './App';
import SearchContainer from './container/SearchContainer';
import Input from './presentational/Input';
import SearchResult from './presentational/SearchResult';
import transactions from '../lib/data';
import doSearch from '../lib/fuzzySearch';

Enzyme.configure({ adapter: new Adapter() });

describe('App', () => {
  let props;
  let mountedApp;
  const app = () => {
    if (!mountedApp) {
      mountedApp = mount(<App {...props} />);
    }
    return mountedApp;
  };

  beforeEach(() => {
    props = {
    };
    mountedApp = undefined;
  });

  it('always renders a div', () => {
    const divs = app().find("div");
    expect(divs.length).toBeGreaterThan(0);
  });

  it("always renders a `SearchContainer`", () => {
    expect(app().find(SearchContainer).length).toBe(1);
  });

  it("always renders a `Input`", () => {
    expect(app().find(Input).length).toBe(1);
  });

  it("always renders a `SearchResult`", () => {
    const numberOfTransactions = transactions.length;
    expect(app().find(SearchResult).length).toBe(numberOfTransactions);
  });

  describe('OnInput', () => {

    it("renders the right results", () => {
      const inputValue = '433';
      const event = {target: {name: "search", value: inputValue}};
      const wrapper = shallow(<SearchContainer transactions={transactions} />).instance();
      wrapper.handleChange(event)

      const results = doSearch(inputValue, transactions);

      expect(wrapper.state.results).toEqual(results);
    });

  });
});
