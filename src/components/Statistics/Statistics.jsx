// import PropTypes from 'prop-types';
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
                    <StatItem id={stats.id}>
                        <StatLabel>{stat.label }</StatLabel>
                        <StatPercentage>{stat.percentage }</StatPercentage>
                    </StatItem>
                ))}
            </StatList>
     </Section>
 )
}


/* <section class="statistics">
  <h2 class="title">Upload stats</h2>

  <ul class="stat-list">
    <li class="item">
      <span class="label">.docx</span>
      <span class="percentage">4%</span>
    </li>
    <li class="item">
      <span class="label">.mp3</span>
      <span class="percentage">14%</span>
    </li>
    <li class="item">
      <span class="label">.pdf</span>
      <span class="percentage">41%</span>
    </li>
    <li class="item">
      <span class="label">.mp4</span>
      <span class="percentage">12%</span>
    </li>
  </ul>
</section> */