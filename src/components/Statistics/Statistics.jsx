import PropTypes from 'prop-types';
import {
  StatisticsContainer,
  Title,
  List,
  Item,
  Label,
  Percentage,
} from 'components/Statistics/Statistics.styled'

export const Statistics = ({ title, stats }) => {
  return (
    <StatisticsContainer>
      {title && <Title>{title}</Title>}
      <List>
        {stats.map(({ id, label, percentage }) => (
          <Item backgroundColor={getRandomColor()} key={id}>
            <Label>{label}</Label>
            <Percentage>{percentage}%</Percentage>
          </Item>
        ))}
      </List>
    </StatisticsContainer>
  );
};

function getRandomColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}