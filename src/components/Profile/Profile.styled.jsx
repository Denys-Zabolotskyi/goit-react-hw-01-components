import styled from '@emotion/styled';

export const ProfileCard = styled.div`
margin-left: auto;
  margin-right: auto;
  text-align: center;
  width: 350px;
  height: 100%;
  border-radius: 2%;
  background-color: #fff;
  box-shadow: 5px 5px 5px 0px rgba(0,0,0,0.3);
  filter: drop-shadow(5px 5px 5px rgba(0,0,0,0.3));
`;
export const Description = styled.div`
  padding: 20px;
`;


export const Avatar = styled.img` width: 100px;
  border-radius: 50%;
  border: 4px solid;
  overflow: hidden;`;
  
export const Name = styled.p`font-weight: 700;
  font-size: 25px;
  `;

export const Tag = styled.p`
color: rgba(0, 0, 0, 0.5);`;

export const Location = styled.p`
color: rgba(0, 0, 0, 0.5);`;

export const Stats = styled.ul`
display: flex;
  background-color: rgba(0, 0, 0, 0.04);
  li {
      padding-top: 15px;
    padding-bottom: 15px;
    width: 100%;
    height: 100%;
    // border: 1px solid rgb(0 0 0 / 20%);
      &:hover {
      background-color: rgba(39, 245, 229, 0.57);
      cursor: pointer;
    }
  }
  `;

export const Label = styled.span`
display: block;`;

export const Value = styled.span`
font-weight: 700;`;


