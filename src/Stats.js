import * as React from 'react';
import {
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  StatGroup,
} from '@chakra-ui/react';

export const Stats = ({ data }) => (
  <StatGroup maxWidth="xl" role="meter" aria-title="Stat cards">
    {data.map((stat) => (
      <Stat
        key={stat.type}
        bg="blue.50"
        borderStyle="solid"
        borderWidth="1px"
        borderColor="gray.300"
        borderRadius="xl"
        p={3}
        mr={4}
      >
        <StatLabel>{stat.type}</StatLabel>
        <StatNumber>{stat.value.toLocaleString()}</StatNumber>
        <StatHelpText mb="0">
          <StatArrow type={stat.delta.type} />
          {stat.delta.value}%
        </StatHelpText>
      </Stat>
    ))}
  </StatGroup>
);
