import PropTypes from 'prop-types';
import { StatisticBox, StatTitle, StatList, StatItem, StatLabel, StatQty  } from './Statistics.styled';

export const Statistics = ({ title, stats }) => {

  return (
    <StatisticBox>
      {title && (<StatTitle>{title}</StatTitle>)}
      <StatList>
        {stats.map(({ id, label, percentage }) => (
          <StatItem key={id}>
            <StatLabel>{label}</StatLabel>
            <StatQty>{percentage}</StatQty>
          </StatItem>))}
      </StatList>
    </StatisticBox>
  ); 
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired
    }),
  ),
}