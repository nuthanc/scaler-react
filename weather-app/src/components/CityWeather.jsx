/* eslint-disable react/prop-types */
import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import { getIconUrl } from '../utils/constants';

const CityWeather = ({ currentWeather }) => {
  return (
    currentWeather && (
      <Flex justify="center" mb={4}>
        <Box>
          <Heading size="lg">{currentWeather?.name}</Heading>
          <Text fontSize="md">{currentWeather?.weather?.[0]?.description}</Text>
          <Text fontSize="lg" as={'b'}>
            {currentWeather?.main?.temp}
          </Text>
        </Box>
        <img
          src={getIconUrl(currentWeather?.weather?.[0]?.icon)}
          alt={currentWeather?.weather?.main}
        />
      </Flex>
    )
  );
};

export default CityWeather;
