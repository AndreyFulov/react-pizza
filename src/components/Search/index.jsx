import React from 'react';
import debounce from 'lodash/debounce';

import styles from './Search.module.scss';
import { SearchContext } from '../../App';

const Search = () => {
  const [value, setValue] = React.useState('');
  const { setSearchValue } = React.useContext(SearchContext);

  const onChangeInput = (event) => {
    setValue(event.target.value);
    updateSearchValue(event.target.value);
  };

  const updateSearchValue = React.useCallback(
    debounce((str) => {
      setSearchValue(str);
    }, 1000),
    [],
  );
  return (
    <input
      placeholder="Поиск пиццы ..."
      className={styles.root}
      onChange={onChangeInput}
      value={value}
    />
  );
};

export default Search;
