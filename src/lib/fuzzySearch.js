function fuzzyMatch(data, input) {
  const searchableInput = input.replace(/ /g, '').toLowerCase();
  const tokens = data.split('');
  let searchPosition = 0;

  tokens.map((textChar) => {
    if (textChar.toLowerCase() === searchableInput[searchPosition]) {
      searchPosition += 1;
      if (searchPosition >= searchableInput.length) {
        return false;
      }
      return textChar;
    }
    return false;
  });

  if (searchPosition !== input.length) {
    return '';
  }
  return tokens.join('');
}

export default function doSearch(value, transactions) {
  const searchInput = value;

  const results = transactions.filter((transaction) => {
    const values = Object.values(transaction);
    let matchedTransaction;

    values.forEach((searchableValue) => {
      const result = fuzzyMatch(searchableValue.toString(), searchInput);
      if (result) {
        matchedTransaction = transaction;
      }
    });

    return matchedTransaction;
  });

  return results;
}
