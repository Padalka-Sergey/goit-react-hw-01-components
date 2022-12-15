import PropTypes from 'prop-types';
import { TransactionHistory, Thead, Tr, Th, Td, Tbody } from './Transactions.styled';

export const Transactions = ({ transactions }) => {
  return (
<TransactionHistory>
  <Thead>
    <Tr>
      <Th>Type</Th>
      <Th>Amount</Th>
      <Th>Currency</Th>
    </Tr>
  </Thead>
    <Tbody>
      {transactions.map(({id, type, amount, currency}) => (
        <Tr key={id}>
          <Td>{type}</Td>
          <Td>{amount}</Td>
          <Td>{currency}</Td>
        </Tr>
    ))}
    </Tbody>
</TransactionHistory>);
}

Transactions.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired
    }),
  ),
}