import { Box, Input } from '@chakra-ui/react';
import { useState } from 'react';

const SearchBar = ({ setCity }) => {
  const [query, setQuery] = useState('');
  return (
    <Box w={'50%'}>
      <Input
        placeholder="Search for cities"
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
    </Box>
  );
};

export default SearchBar;
