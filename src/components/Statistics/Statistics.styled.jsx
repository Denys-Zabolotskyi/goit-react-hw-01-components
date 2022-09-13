import styled from '@emotion/styled';

export const StatisticsContainer = styled.section`
  display: inline-block;
  margin: 20px;
  
  background-color: #fff;
  box-shadow: 5px 5px 5px 0px rgba(0,0,0,0.3);
  filter: drop-shadow(5px 5px 5px rgba(0,0,0,0.3));
  border-radius: 2%;
`;

export const Title = styled.h2`
  font-weight: 700;
  font-size: 25px;
`;

export const List = styled.ul`
  display: flex;
   background-color: rgba(0, 0, 0, 0.04);
`;

export const Item = styled.li`
  padding-top: 15px;
  padding-bottom: 15px;
  width: 75px;
  height: 75px;
   border: 1px solid rgb(0 0 0 / 20%);
  background-color: ${props => {
    return props.backgroundColor;
  }};
`;

export const Label = styled.span`
  display: block;
  font-weight: 700;
`;

export const Percentage = styled.span``;