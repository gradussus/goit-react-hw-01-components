import PropTypes from 'prop-types';
import styled from 'styled-components';

const Table = styled.table`
background-color: tomato
`
const Thead = styled.thead`
background-color: pink
`
const TheadItem = styled.th`
background-color: red
`
const Tbody = styled.tbody`
background-color: blue
`
const TransactionInfo = styled.td`
background-color: purple
`

export const TransactionHistory = ({ transactions }) => {
    return (<Table>
        <Thead>
            <TheadItem>Type</TheadItem>
            <TheadItem>Amount</TheadItem>
            <TheadItem>Currency</TheadItem>
        </Thead>
        {transactions.map(({ id, type, amount, currency }) =>
        (
            <Tbody key={id}>
                <tr>
                <TransactionInfo>{type}</TransactionInfo>
                <TransactionInfo>{amount}</TransactionInfo>
                <TransactionInfo>{currency}</TransactionInfo>
                </tr>

            </Tbody>

            ))}
    </Table>
            
    )
}

TransactionHistory.propTypes = {
    transactions: PropTypes.arrayOf(PropTypes.exact({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
}))
};