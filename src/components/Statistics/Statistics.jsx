import PropTypes from 'prop-types';
import styled from 'styled-components';

const Section = styled.section`
background-color: red
`
const SectionTitle = styled.h2`
font-size: 64 px
`
const StatList = styled.ul`
list-style: none;
display: flex
`
const StatItem = styled.li`
background-color: pink
`
const StatLabel = styled.span`
color: blue
`
const StatPercentage = styled.span`
color: green
`
export const Statistics = ({ title, stats }) => {
    return (
        <Section>
            {title && (<SectionTitle>{title}</SectionTitle>)}
            <StatList>
                {stats.map(stat => (
                    <StatItem key={stats.id}>
                        <StatLabel>{stat.label }</StatLabel>
                        <StatPercentage>{stat.percentage }</StatPercentage>
                    </StatItem>
                ))}
            </StatList>
     </Section>
 )
}


Statistics.propTypes = {
  title: PropTypes.string,
  stats:PropTypes.arrayOf(PropTypes.exact({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
}))
};