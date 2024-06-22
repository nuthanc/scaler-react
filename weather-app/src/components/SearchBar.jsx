import { Input } from '@chakra-ui/react';
import { useState } from 'react';

const SearchBar = ({ setCity }) => {
  const [query, setQuery] = useState('');
  return (
    <Input
      placeholder="Search for cities"
      colorScheme={'green'}
      w={'50%'}
      pr="4.5rem"
      size="lg"
      mb={4}
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      onKeyUp={(e) => {
        if (e.key === 'Enter') {
          setCity(query);
          setQuery('');
        }
      }}
    />
  );
};

export default SearchBar;
