import PropTypes from 'prop-types';
import styled from 'styled-components';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const Section = styled.section`
  background-color: red;
  max-width: 300px;
  margin-left: auto;
  margin-right: auto;
`;
const SectionTitle = styled.h2`
  font-size: 64 px;
`;
const StatList = styled.ul`
  list-style: none;
  display: flex;
  padding: 0px;
`;
const StatItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 60px;
  width: 60px;
`;
const StatLabel = styled.span`
  color: white;
`;
const StatPercentage = styled.span`
  color: white;
`;
export const Statistics = ({ title, stats }) => {
  return (
    <Section>
      {title && <SectionTitle>{title}</SectionTitle>}
      <StatList>
        {stats.map(stat => (
          <StatItem
            key={stat.id}
            style={{ backgroundColor: getRandomHexColor() }}
          >
            <StatLabel>{stat.label}</StatLabel>
            <StatPercentage>{stat.percentage}</StatPercentage>
          </StatItem>
        ))}
      </StatList>
    </Section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
