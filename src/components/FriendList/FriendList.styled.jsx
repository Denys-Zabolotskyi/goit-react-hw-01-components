import styled from '@emotion/styled';

export const FriendBoard = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  `;

export const Friend = styled.li`
  display: flex;
  align-items: center;
  background-color: #fff;
  box-shadow: 5px 5px 5px 0px rgba(0,0,0,0.3);
  filter: drop-shadow(5px 5px 5px rgba(0,0,0,0.3));
  border-radius: 2%;
  padding: 20px;
  margin-top: 10px;
  margin-bottom: 10px;
  width: 350px;
`;

export const Status = styled.span`
  border-radius: 50%;
  height: 20px;
  margin-right: 20px;
  width: 20px;
  background-color: ${props => (props.isOnline ? 'green' : 'red')};
`;

export const Avatar = styled.img`
  width: 48px;
`;

export const Name = styled.p`
  margin-left: 20px;
  font-weight: 700;
`;