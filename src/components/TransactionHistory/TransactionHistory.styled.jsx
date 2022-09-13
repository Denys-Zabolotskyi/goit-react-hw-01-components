import styled from '@emotion/styled';

export const Table = styled.table`
  width: 100%;
  font-size: 16px;
    background-color: #fff
  
  `;

export const Head = styled.thead`

  background-color: #6f6ca3;
    box-shadow: 5px 5px 5px 0px rgba(0,0,0,0.3);
    filter: drop-shadow(5px 5px 5px rgba(0,0,0,0.3));
  `;

export const Tr = styled.tr`
  height: 45px;
  text-align: center;
  :nth-of-type(2n) {
    background-color: #d5d5d5;
  }
`;

export const Th = styled.th``;

export const Body = styled.tbody``;

export const Td = styled.td``;