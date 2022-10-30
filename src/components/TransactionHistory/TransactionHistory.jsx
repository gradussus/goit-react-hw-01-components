import PropTypes from 'prop-types';
import styled from 'styled-components';

const Table = styled.table`
  color: #4f4f4f;
  margin-bottom: 50px;
`;
const Thead = styled.thead`
  background-color: #49cdde;
`;
const TheadItem = styled.th`
  color: white;
  width: 150px;
  padding: 15px;
`;

const TransactionInfo = styled.td`
  text-align: center;
  padding-top: 10px;
  padding-bottom: 10px;
`;
const Trow = styled.tr`
  background-color: white;
  :nth-child(2n) {
    background-color: #9c9c9c;
  }
`;
export const TransactionHistory = ({ transactions }) => {
  return (
    <Table>
      <Thead>
        <tr>
          <TheadItem>Type</TheadItem>
          <TheadItem>Amount</TheadItem>
          <TheadItem>Currency</TheadItem>
        </tr>
      </Thead>
      <tbody>
        {transactions.map(({ id, type, amount, currency }) => (
          <Trow key={id}>
            {/* type[0].toUpperCase() + type.slice(1) */}
            <TransactionInfo>
              {type[0].toUpperCase() + type.slice(1)}
            </TransactionInfo>
            <TransactionInfo>{amount}</TransactionInfo>
            <TransactionInfo>{currency}</TransactionInfo>
          </Trow>
        ))}
      </tbody>
    </Table>
  );
};

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
