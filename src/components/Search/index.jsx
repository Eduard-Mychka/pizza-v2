import React from 'react';
import { Input, Icon } from 'semantic-ui-react';
import { SearchContext } from '../../App';

import styles from './Search.module.scss';

const Search = () => {
  const { searchValue, setSearchValue } = React.useContext(SearchContext);

  return (
    <div className={styles.root}>
      <Input
        placeholder='Search...'
        iconPosition='left'
        icon='search'
        size='large'
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
      />
      {searchValue && (
        <Icon
          className={styles.clearIcon}
          name='close'
          link={true}
          onClick={() => setSearchValue('')}
        />
      )}
    </div>
  );
};

export default Search;
