import { Input, Icon } from 'semantic-ui-react';

const handleSearch = () => {
  alert('Hello');
};

const Search = () => {
  return (
    <Input
      icon={<Icon name='search' circular={true} link={true} onClick={handleSearch} />}
      placeholder='Search...'
      size='large'
    />
  );
};

export default Search;
